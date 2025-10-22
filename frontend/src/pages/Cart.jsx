import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    removeFromCart,
    getCartCount,
    updateCartItem,
    navigate,
    getCartAmount,
    axios,
    user,
    setCartItems,
  } = useAppContext();

  const [cartArray, setCartArray] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [showAddress, setShowAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentOption, setPaymentOption] = useState("COD");

  const getCart = () => {
    let tempArray = [];
    for (const key in cartItems) {
      const product = products.find((item) => item._id === key);
      product.quantity = cartItems[key];
      tempArray.push(product);
    }
    setCartArray(tempArray);
  };

  const getUserAddress = async () => {
    try {
      const { data } = await axios.get("/api/address/get");
      if (data.success) {
        setAddresses(data.addresses);
        if (data.addresses.length > 0) {
          setSelectedAddress(data.addresses[0]);
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const placeOrder = async () => {

  if(!user) {
      toast.error("Please login to place order");
      return;
    }
    
    try {
      if (!selectedAddress) return toast.error("Please select an address");

      const endpoint =
        paymentOption === "COD" ? "/api/order/cod" : "/api/order/stripe";
      const { data } = await axios.post(endpoint, {
        userId: user._id,
        items: cartArray.map((item) => ({
          product: item._id,
          quantity: item.quantity,
        })),
        address: selectedAddress._id,
      });

      if (data.success) {
        if (paymentOption === "COD") {
          toast.success(data.message);
          setCartItems({});
          navigate("/my-orders");
        } else {
          window.location.replace(data.url);
        }
      } else toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (products.length > 0 && cartItems) getCart();
  }, [products, cartItems]);

  useEffect(() => {
    if (user) getUserAddress();
  }, [user]);

  return products.length > 0 && cartItems ? (
    <div className="flex flex-col md:flex-row mt-16 gap-10 px-4 md:px-10">
      {/* 🛒 LEFT SIDE - CART ITEMS */}
      <div className="flex-1 bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">
          Shopping Cart{" "}
          <span className="text-sm text-primary font-medium">
            ({getCartCount()} items)
          </span>
        </h1>

        <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 font-medium pb-3 border-b border-gray-200">
          <p className="text-left">Product</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>

        {cartArray.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-[2fr_1fr_1fr] items-center py-4 border-b border-gray-100 hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-4">
              <div
                onClick={() => {
                  navigate(
                    `/products/${product.category.toLowerCase()}/${product._id}`
                  );
                  scrollTo(0, 0);
                }}
                className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-200 rounded-lg overflow-hidden hover:shadow-sm transition"
              >
                <img
                  className="object-cover w-full h-full"
                  src={product.image[0]}
                  alt={product.name}
                />
              </div>

              <div>
                <p className="font-medium text-gray-800">{product.name}</p>
                <p className="text-sm text-gray-500">
                  Weight: {product.weight || "N/A"}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-sm text-gray-600">Qty:</p>
                  <select
                    onChange={(e) =>
                      updateCartItem(product._id, Number(e.target.value))
                    }
                    value={cartItems[product._id]}
                    className="border border-gray-300 text-sm rounded-md px-2 py-1 focus:ring-2 focus:ring-primary outline-none"
                  >
                    {Array(
                      cartItems[product._id] > 9
                        ? cartItems[product._id]
                        : 9
                    )
                      .fill("")
                      .map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>

            <p className="text-center font-medium text-gray-800">
              {currency}
              {product.offerPrice * product.quantity}
            </p>

            <button
              onClick={() => removeFromCart(product._id)}
              className="cursor-pointer mx-auto hover:scale-110 transition"
            >
              <img
                src={assets.remove_icon}
                alt="remove"
                className="w-6 h-6 opacity-80 hover:opacity-100"
              />
            </button>
          </div>
        ))}

        <button
          onClick={() => {
            navigate("/products");
            scrollTo(0, 0);
          }}
          className="mt-6 flex items-center gap-2 text-primary font-medium hover:underline hover:gap-3 transition-all"
        >
          <img
            className="w-5 h-5 rotate-360"
            src={assets.arrow_right_icon_colored}
            alt="arrow"
          />
          Continue Shopping
        </button>
      </div>

      {/* 💳 RIGHT SIDE - SUMMARY */}
      <div className="max-w-sm w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-6 h-fit">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Order Summary
        </h2>
        <hr className="border-gray-200 mb-4" />

        {/* Address */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-700 uppercase">
            Delivery Address
          </p>
          <div className="relative mt-2">
            <p className="text-gray-600 text-sm">
              {selectedAddress
                ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}`
                : "No address found"}
            </p>
            <button
              onClick={() => setShowAddress(!showAddress)}
              className="text-primary text-sm mt-1 hover:underline"
            >
              Change
            </button>
            {showAddress && (
              <div className="absolute top-12 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden z-10">
                {addresses.map((address, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      setSelectedAddress(address);
                      setShowAddress(false);
                    }}
                    className="p-2 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer"
                  >
                    {address.street}, {address.city}, {address.state},{" "}
                    {address.country}
                  </p>
                ))}
                <p
                  onClick={() => navigate("/add-address")}
                  className="text-primary text-center p-2 hover:bg-primary/10 cursor-pointer font-medium"
                >
                  + Add Address
                </p>
              </div>
            )}
          </div>

          {/* Payment */}
          <p className="text-sm font-semibold text-gray-700 uppercase mt-6">
            Payment Method
          </p>
          <select
            onChange={(e) => setPaymentOption(e.target.value)}
            className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 text-sm rounded-md outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="COD">Cash On Delivery</option>
            <option value="Online">Online Payment</option>
          </select>
        </div>

        <hr className="border-gray-200 mb-4" />

        {/* Summary */}
        <div className="text-gray-700 text-sm space-y-2">
          <p className="flex justify-between">
            <span>Price</span>
            <span>
              {currency}
              {getCartAmount()}
            </span>
          </p>
          <p className="flex justify-between">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </p>
          <p className="flex justify-between">
            <span>Tax (2%)</span>
            <span>
              {currency}
              {getCartAmount() * 2 / 100}
            </span>
          </p>
          <p className="flex justify-between text-base font-semibold text-gray-800 pt-2 border-t border-gray-200">
            <span>Total</span>
            <span>
              {currency}
              {getCartAmount() + getCartAmount() * 2 / 100}
            </span>
          </p>
        </div>

        <button
          onClick={placeOrder}
          className="w-full py-3 mt-6 bg-primary hover:bg-primary/90 text-white rounded-md font-medium shadow-sm transition-all"
        >
          {paymentOption === "COD" ? "Place Order" : "Proceed to Checkout"}
        </button>
      </div>
    </div>
  ) : null;
};

export default Cart;
