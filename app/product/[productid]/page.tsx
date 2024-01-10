'use client';

import React, { useEffect, useState } from 'react'
import { MdFavoriteBorder } from "react-icons/md";
import Image from 'next/image';
import ExternalLayout from '@/app/(components)/External-Layout';

interface detailsProps{
        _id: string;
        desc: string;
        title: string;
        prices: string;
        img: string;
        extraOptions: any[];
}

const ProductDetails = ({params} : {params: {productid : string}}) => {
    const [details, setDetails] = useState<detailsProps | null>(null);
    const [quantity, setQuantity] = useState(1);
    
    useEffect(() => {
        const getData = async () => {
          const query = await fetch(`https://pizza-ordering-anno.onrender.com/api/products/${params.productid}`, {
            cache: 'force-cache'
          })
          const res = await query.json();
          setDetails(res)
        }
  
        getData();
      }, [params.productid])

      const addToCart = () => {
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        const newCartItem = { product: details, quantity };
    
        const existingProductIndex = existingCartItems.findIndex((item: any) => item.product._id === details?._id);
    
        if (existingProductIndex !== -1) {
          existingCartItems[existingProductIndex].quantity += quantity;
        } else {
          existingCartItems.push(newCartItem);
        }
        localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
      };

  return (
    <div className="max-w-[1440px] mx-auto">
        <ExternalLayout>
        <div className='w-[100%] mb-8 p-4 lg:flex lg:justify-between mt-6'>
            {details && (
                <>
                <div className='lg:w-[50%]'>
                 <Image 
                     src={details.img}
                     alt=''
                     width={600}
                     height={600}
                     className='mx-auto object-cover object-center lg:w-[600px] w-[400px] lg:h-[600px] h-[400px]'
                 />
                 </div>
                 <div className='lg:w-[45%] w-[100%]'>
                 <h4 className='font-semibold text-[1.3rem] lg:text-[2rem] my-4 flex justify-between w-[70%] mb-2'>{details.title}</h4>
                 <p className='text-[rgb(232,9,2)] font-bold text-[1.5rem]'>${details.prices[0]}<span className='text-gray-400 ml-8'> 8 Reviews</span></p>
                 <p className='text-[14px] my-4'>{details.desc}</p>
                 <p>Category: Chicken, Launch, Pizza, Burger</p>
                 <p className='my-4'>Tags: Healthy, Organic, Chicken, Sauce</p>
                 <h3 className='font-semibold text-[1.2rem] mt-12 mb-6'>Choose Pizza Size</h3>
                 <div className='flex justify-between lg:w-[70%] w-[100%] my-8 lg:items-center flex-col lg:flex-row'>
                    <div className='relative mb-4'>
                    <Image 
                    src='https://res.cloudinary.com/ilove2support/image/upload/v1700494359/Pizza-icon_ns1nad.png'
                    alt=''
                    width={80}
                    height={80}
                    />
                    <p className='bg-[rgb(232,9,2)] py-[2px] px-4 rounded-full text-white absolute top-0 lg:right-[-20px] left-8'>Small</p>
                    </div>
                    <div className='relative mb-4'>
                    <Image 
                    src='https://res.cloudinary.com/ilove2support/image/upload/v1700494359/Pizza-icon_ns1nad.png'
                    alt=''
                    width={120}
                    height={120}
                    />
                    <p className='bg-[rgb(232,9,2)] py-[2px] px-4 rounded-full text-white absolute top-0 lg:right-[-20px] left-8'>Medium</p>
                    </div>
                    <div className='relative mb-4'>
                    <Image 
                    src='https://res.cloudinary.com/ilove2support/image/upload/v1700494359/Pizza-icon_ns1nad.png'
                    alt=''
                    width={150}
                    height={150}
                    />
                    <p className='bg-[rgb(232,9,2)] py-[2px] px-4 rounded-full text-white absolute top-0 lg:right-[-20px] left-8'>Large</p>
                    </div>
                 </div>
                 <div>
                    <h3 className='font-semibold text-[1.2rem] mt-12 mb-6'>Choose additional ingredients</h3>
                   { details.extraOptions.map((info, index) => (
                   <label htmlFor="" key={index} className='mr-4'>
                    <input type="checkbox" className='mr-4' 
                />
                       {info.text}</label>))}
                 </div>
                 <div className='flex justify-between flex-col lg:flex-row w-[100%] lg:w-[70%] lg:items-center mt-4'>
                    <input type="number" className='border p-2 mb-4 lg:mb-0' value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value, 10))} />
                    <button className='bg-[#FFB200] uppercase px-8 py-4 text-white rounded-full font-bold mb-4 lg:mb-0' onClick={addToCart}> add to cart</button>
                    <p className='text-[1.5rem] flex items-center justify-center border border-gray-400 p-4 rounded-full'><MdFavoriteBorder /></p>
                 </div>
                 </div>
             </>
            )}
             </div>
             </ExternalLayout>
             </div>
  )
}

export default ProductDetails