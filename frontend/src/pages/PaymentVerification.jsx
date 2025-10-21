import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useAppContext } from '../context/AppContext';

const PaymentVerification = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { setCartItems } = useAppContext();

  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/order/verify-payment?success=${success}&orderId=${orderId}`);
        
        if (data.success) {
          // Clear cart in frontend state
          setCartItems({});
          toast.success('Payment successful! Your order has been placed.');
          navigate('/my-orders');
        } else {
          toast.error('Payment failed or was canceled.');
          navigate('/cart');
        }
      } catch (error) {
        console.error('Verification error:', error);
        toast.error('Something went wrong during payment verification.');
        navigate('/cart');
      } finally {
        setLoading(false);
      }
    };

    if (orderId && success !== undefined) {
      verifyPayment();
    } else {
      navigate('/');
    }
  }, [orderId, success, navigate, setCartItems]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {loading && (
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500 mx-auto"></div>
          <h2 className="text-xl font-semibold mt-4">Verifying your payment...</h2>
          <p className="text-gray-600 mt-2">Please wait while we confirm your payment.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentVerification;