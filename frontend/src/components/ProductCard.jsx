import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";


const ProductCard = ({product, index}) => {
    const {currency, addToCart, removeFromCart, cartItems, navigate} = useAppContext()

   
    return product && (
        <div onClick={()=> {navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0,0)}} className="border border-gray-500/20 rounded-lg p-4 bg-white min-w-56 max-w-56 w-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1" style={{backgroundColor: `hsl(${index * 40 + 120}, 60%, 95%)`}}>
            <div className="group cursor-pointer flex items-center justify-center px-2">
                <img className="group-hover:scale-105 transition max-w-26 md:max-w-36" src={product.image[0]} alt={product.name} />
            </div>
            <div className="text-gray-500/60 text-sm mt-3">
                <p className="text-xs uppercase font-semibold">{product.category}</p>
                <p className="text-gray-700 font-bold text-lg truncate w-full mt-1">{product.name}</p>
                <div className="flex items-center gap-0.5 mt-2">
                    {Array(5).fill('').map((_, i) => (
                           <img key={i} className="md:w-3.5 w3" src={i < 4 ? assets.star_icon : assets.star_dull_icon} alt=""/>
                    ))}
                    <p className="text-xs text-gray-500">(4)</p>
                </div>
                <div className="flex items-end justify-between mt-4">
                    <p className="md:text-xl text-base font-bold text-primary">
                        {currency}{product.offerPrice}{" "} <span className="text-gray-500/60 md:text-sm text-xs line-through font-normal">{currency}{product.price}</span>
                    </p>
                    <div onClick={(e) => { e.stopPropagation(); }} className="text-primary">
                        {!cartItems[product._id] ? (
                            <button onClick={() => addToCart(product._id)} className="flex items-center justify-center gap-1 bg-primary/10 border border-primary/40 md:w-[80px] w-[64px] h-[34px] rounded-full cursor-pointer text-primary hover:bg-primary-dull/80 hover:text-white transition-all duration-300">
                                <img src={assets.cart_icon} alt="cart_icon" className="w-4 h-4"/>
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-primary/25 rounded-full select-none text-primary">
                                <button onClick={() => {removeFromCart(product._id)}} className="cursor-pointer text-md px-2 h-full hover:bg-primary/20 rounded-l-full transition-all duration-300">
                                    -
                                </button>
                                <span className="w-5 text-center font-semibold">{cartItems[product._id]}</span>
                                <button onClick={() => {addToCart(product._id)}} className="cursor-pointer text-md px-2 h-full hover:bg-primary/20 rounded-r-full transition-all duration-300">
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;