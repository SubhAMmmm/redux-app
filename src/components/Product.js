import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';

export const Product = () => {
    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();

    return (
        <div className=" bg-slate-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
            {items.map((item, index) => (
                <div key={index} className="max-w-sm ml-12 rounded overflow-hidden shadow-lg p-5 bg-white">
                    <div className="flex justify-center mb-4">
                        <img className="w-32 h-32 object-cover" src={item.img} alt="" />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-center">{item.title}</div>
                        <p className="text-gray-700 text-base text-center mb-2">$ {item.price}</p>
                        <button onClick={() => dispatch(addToCart(item))} className={`w-full text-white py-3 rounded-lg ${item.addedCart ? 'bg-red-400 hover:bg-red-300 transition duration-300' : 'bg-gray-600 hover:bg-gray-500 transition duration-300'}`}>
                        {item.addedCart ?"Remove from Cart" : "Add to Cart"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Product;
