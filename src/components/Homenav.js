import React from 'react'

export const Homenav = () =>{



    return (
        <nav className="bg-teal-950 shadow shadow-gray-300 w-100 px-8 md:px-auto">
            <div className="md:h-20 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                <div className="text-green-950 md:order-1">
                    <img className='ml-3' src='/shopee.png'></img>
                    <h1 className='text-white'>Shopee.in</h1>
                </div>
                <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
          
                </div>
               
            </div>
        </nav>
    );
};

export default Homenav;
