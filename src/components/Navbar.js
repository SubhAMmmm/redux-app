import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../features/userSlice';


export const Navbar = () => {

    const dispatch = useDispatch();
    const {totalQuantity , likedItem} = useSelector((state) => state.allCart)
    return (
        <nav className="bg-teal-950 shadow shadow-gray-300 w-100 px-8 md:px-auto">
            <div className="md:h-20 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                <div className="text-green-950 md:order-1">
                    <img className='ml-3' src='/shopee.png'></img>
                    <h1 className='text-white'>Shopee.in</h1>
                </div>
                <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
          
                </div>
                <div className="order-2 md:order-3">
                <ul className="flex font-semibold justify-between">

                        <button  className='px-2 text-white hover:text-2xl hover:text-slate-200'>
                            <Link to='/Likedpage'>Favourite({likedItem.length})</Link>
                        </button>
                        <button className='px-2 text-white hover:text-2xl hover:text-slate-200'>
                            <Link to='/Cart'>Cart({totalQuantity})</Link>
                        </button>
                        <button  className='px-2 text-white hover:text-2xl hover:text-slate-200' onClick={() => dispatch(logout())}>
                            Logout
                        </button>
                        
                        

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
