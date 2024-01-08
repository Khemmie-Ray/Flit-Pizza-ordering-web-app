"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import paypalLogo from '../(assets)/PayPal-Logo.png'
import Modalform from './modalform';

const Table = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        setCartItems(storedCartItems);
      }, []);

    const handleButtonClick = () => {
      setIsClicked(true);
    };

    const handleShowModal = () => {
        setShowModal(!showModal)
    }

    const cartPrices:any = cartItems.map(info => {
        if (info.product.prices && Array.isArray(info.product.prices) && info.product.prices.length > 0) {
            const priceForInfo = info.product.prices[0];
    
            return priceForInfo;
        }
        return null; 
    });

    const getSubTotalPrice = () => {
      return cartItems.reduce(
        (total, cartItem, index) =>
          total +
          (cartPrices[index] ? cartPrices[index] * cartItem.quantity : 0),
        0
      );
    };

    const getDiscount = () => {
      return 0.1 * getSubTotalPrice();
    };
  
    const getTotalPrice = () => {
      return getSubTotalPrice() - getDiscount();
    };
    
  return (
    <div className='flex mt-16 w-[100%]'>
       {showModal && ( <div className='absolute top-0 w-[100%] bg-[rgba(0,0,0,0.6)] h-[100vh] flex justify-center items-center z-30'><Modalform totalprices={getTotalPrice()}/></div>)}
        <div className=' lg:w-[65%] w-[100%] ml-16'>
        <table className='w-[100%]'>
            <thead className='border-b border-gray'>
                <tr className='text-left'>
                    <th className='pb-4 w-1/6'>Product</th>
                    <th className='pb-4 w-1/6'>Name</th>
                    <th className='pb-4 w-1/6'>Extra</th>
                    <th className='pb-4 w-1/6'>Price</th>
                    <th className='pb-4 w-1/6'>Quantity</th>
                    <th className='pb-4 w-1/6 pr-4'>Total</th>
                </tr>
            </thead>
            <tbody>
            {cartItems.map((cartItem, index) => (              
              <tr key={index} className='text-left border-b border-gray'>
                <td className='py-4 w-1/6'><Image 
                src={cartItem.product.img}
                alt=''
                width={80}
                height={80}
                 /></td>
                <td className='py-4 w-1/6'>{cartItem.product.title}</td>
                <td className='py-4 w-2/6'></td>
                <td className="py-4 w-1/6">
                  ${cartPrices[index] ? cartPrices[index] : 0}
                </td>
                <td className="py-4 w-1/6">{cartItem.quantity}</td>
                <td className="py-4 w-1/6">
                  ${cartPrices[index] ? cartPrices[index] * cartItem.quantity : 0}
                </td>
              </tr>
            ))}
            </tbody>
        </table>
        </div>
        <div className=' w-[100%] lg:w-[35%]'>
            <div className='bg-gray-800 w-[80%] text-white p-6'>
          <div>
            <h3 className='uppercase text-[1.5rem] font-bold mb-4'>cart total</h3>
            <p>Subtotal: ${getSubTotalPrice()}</p>
            <p>Discount: -10%</p>
            <p>Total: ${getTotalPrice()}</p>
            </div>
            {isClicked ? (
          <div>
            <button className='bg-white w-[100%] uppercase px-8 py-4 text-black mt-8' onClick={handleShowModal}>
              cash on delivery
            </button>
            <button className='bg-[#FFB200] w-[100%] uppercase px-8  mt-4'>
            <Image 
                src={paypalLogo.src}
                alt=''
                width={100}
                height={40}
                className='mx-auto'
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