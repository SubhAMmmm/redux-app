import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartTotal, removeItem, increaseQuantity, decreaseQuantity, likedItems } from '../features/cartSlice';

export const Cart = () => {
    const { cart, totalPrice, totalQuantity } = useSelector((state) => state.allCart);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getCartTotal());
    }, [cart, dispatch]);	
  
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-slate-500">
          <div className="container w-11/12 mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6 text-white">
              Your Cart - {cart.length} {cart.length > 1 ? "items" : "item"}
            </h1>
            <div className="flex flex-col lg:flex-row"> 
              <div className="flex-1">
                {cart.length > 0 ? (
                  cart.map((item, index) => (
                    <div className="flex flex-col md:flex-row mb-4 p-4 bg-white rounded-lg shadow-md" key={index}>
                      <div className="flex w-full items-center">
                        <img
                          className="w-24 h-24 object-cover rounded-lg mr-4"
                          src={item.img}
                          alt={item.title}
                        />
                        <div className="flex-1">
                          <h2 className="text-lg sm:truncate font-bold">{item.title}</h2>
                          <p className="text-gray-600">${item.price}</p>
                          <button onClick={() => dispatch(likedItems(item))} 
                          className={`flex w-28 text-right rounded-md text-white px-2 py-1 mt-1 ${item.liked ? 'bg-red-400 hover:bg-red-300' : 'bg-blue-500 hover:bg-blue-400'}`}
                          >
                          <img className="w-5 h-5 mr-2" src="/heart.png" alt="Heart icon" />
                          {item.liked ? "Remove" : "Favourite"}
                          </button>
                        </div>
                        <div className="flex flex-col justify-end items-center w-full mt-2 md:mt-0 md:ml-16 lg:flex-row lg:ml-0">
                          <p className="text-lg font-bold mr-2">Quantity: {item.quantity}</p>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => dispatch(decreaseQuantity(item))}
                              className="text-white bg-red-600 w-8 py-1 rounded-md hover:bg-red-500 transition duration-300"
                            >
                              -
                            </button>
                            <button
                              onClick={() => dispatch(removeItem(item))}
                              className="text-white bg-orange-400 w-8 py-1 rounded-md hover:bg-orange-300 transition duration-300"
                            >
                              D
                            </button>
                            <button
                              onClick={() => dispatch(increaseQuantity(item))}
                              className="text-white bg-green-600 w-8 py-1 rounded-md hover:bg-green-500 transition duration-300"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="mb-4 p-8 bg-white rounded-lg shadow-md text-center text-gray-600">
                    <strong>Your cart is empty.</strong>
                  </p>
                )}
              </div>
  
              <div className="w-full lg:w-1/4 lg:ml-8 mt-6 lg:mt-0">
                <div className="h-36 p-4 bg-gray-100 rounded-lg shadow-md">
                  <h2 className="text-lg text-center font-bold">Total Quantity</h2>
                  <p className="text-xl text-center font-semibold">{totalQuantity}</p>
                  <h2 className="text-lg text-center font-bold">Total Amount</h2>
                  <p className="text-xl text-center font-semibold">${totalPrice}</p>
                </div>
              </div>
            </div>
  
            <Link to='/'>
              <button className='h-10 w-44 mt-4 ml-32 lg:ml-96 text-white bg-gray-700 py-1 rounded-md hover:bg-red-500 transition duration-300'>
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  };
  
  export default Cart;
  

