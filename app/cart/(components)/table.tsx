"use client"

import React, { useState} from 'react'
import Image from 'next/image';
import paypalLogo from '../(assets)/PayPal-Logo.png'

const Table = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
      setIsClicked(true);
    };
  return (
    <div className='flex mt-16'>
        <div className=' lg:w-[65%] w-[100%] ml-16'>
        <table className='overflow-hidden border-b border-gray w-[100%]'>
            <thead>
                <tr>
                    <th className='pb-4'>Product</th>
                    <th className='pb-4'>Name</th>
                    <th className='pb-4'>Extra</th>
                    <th className='pb-4'>Price</th>
                    <th className='pb-4'>Total</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
        </div>
        <div className=' w-[100%] lg:w-[35%]'>
            <div className='bg-gray-800 w-[80%] text-white p-6'>
            <h3 className='uppercase text-[1.5rem] font-bold mb-4'>cart total</h3>
            <p>Subtotal: $0</p>
            <p>Discount: $79.60</p>
            <p>Total: $0</p>
            {isClicked ? (
          <div>
            <button className='bg-white w-[100%] uppercase px-8 py-4 text-black mt-8'>
              cash on delivery
            </button>
            <button className='bg-[#FFB200] w-[100%] uppercase px-8  mt-4'>
            <Image 
                src={paypalLogo.src}
                alt=''
                width={150}
                height={60}
                className='mx-auto  w-[150px] h-[60px]'
                 />
            </button>
          </div>
        ) : (
          <button
            onClick={handleButtonClick}
            className='bg-[#FFB200] w-[100%] uppercase px-8 py-4 text-white rounded-full mt-8 font-bold'
          >
            Checkout Now!
          </button>
        )}
            </div>
        </div>
    </div>
  )
}

export default Table