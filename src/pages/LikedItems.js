import React from 'react';
import { likedItems } from '../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export const LikedItems = () => {
  const likedItem = useSelector((state) => state.allCart.likedItem);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-slate-500">
        <div className="container w-11/12 mx-auto p-4">
          <h1 className="text-2xl text-white font-bold mb-6">
            Your List - {likedItem.length} {likedItem.length > 1 ? "items" : "item"}
          </h1>
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1">
              {likedItem.length > 0 ? (
                likedItem.map((item, index) => (
                  <div
                    className="flex flex-col md:flex-row mb-4 p-4 bg-white rounded-lg shadow-md"
                    key={index}
                  >
                    <div className="flex w-full items-center">
                      <img
                        className="w-24 h-24 object-cover rounded-lg mr-4"
                        src={item.img}
                        alt={item.title}
                      />
                      <div className="flex flex-grow justify-between items-center">
                        <div>
                          <h2 className="text-lg sm:truncate font-bold">
                            {item.title}
                          </h2>
                          <p className="text-gray-600">${item.price}</p>
                        </div>
                        <button
                          onClick={() => dispatch(likedItems(item))}
                          className="flex items-center bg-red-400 text-white w-24 py-1 mt-1 rounded-md hover:bg-red-500 transition duration-300 ml-auto"
                        >
                          <img className="w-4 h-4 m-1" src="/heart.png" alt="heart" /> 
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="mb-4 p-8 bg-white rounded-lg shadow-md text-center text-gray-600">
                  <strong>No Favourite</strong>
                </p>
              )}
            </div>
          </div>
          <Link to='/'>
            <button className='h-10 w-44 mt-4 text-white bg-gray-700 py-1 rounded-md hover:bg-red-500 transition duration-300'>
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LikedItems;
