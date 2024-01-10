'use client';

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { IoStarSharp } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import Link from 'next/link';

interface Product {
    _id: string;
    desc: string;
    title: string;
    prices: string;
    img: string;
}

const Productcard = () => {
    const [productData, setProductData] = useState<Product[]>([]);

    const productFallback:Product[] = [
      {
          _id: "1",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, a?",
          title: "chicken pizza",
          prices: "$4",
          img: "https://res.cloudinary.com/ilove2support/image/upload/v1696768880/uploads/bxnbmb4etcl5i4vgre4s.jpg"
      }
    ]

    useEffect(() => {
      const getData = async () => {
        const query = await fetch('https://pizza-ordering-anno.onrender.com/api/products')
        const res = await query.json();
        if (typeof res === 'object') {
          const productsArray = Object.values(res) as Product[];
          setProductData(productsArray);
        } else {
          setProductData(productFallback)
        }
      } 

      getData();
    }, [])

console.log(productData)

  return (
    <section className='pb-12 w-[95%] mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between mt-12 flex-wrap'>
        { productData.map((product) => (<Link href={`/product/${product._id}`} className='lg:w-[32%] w-[90%] mx-auto mb-8 shadow-md shadow-gray-500 rounded-lg p-4' key={product._id}>
                 <Image 
                     src={product.img}
                     alt=''
                     width={400}
                     height={400}
                     className='mx-auto object-cover object-center w-[400px] h-[400px]'
                 />
                 <h4 className='font-semibold text-[1.3rem] my-4 flex justify-between w-[70%] mb-2'>{product.title} <span className='text-[#E80902]'>${product.prices[0]}</span></h4>
                 <div className='flex text-[#FFB200]'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></div>
                 <p className='text-[14px] my-4'>{product.desc}</p>
                 <button className='bg-[#FFB200] flex items-center uppercase px-8 py-4 text-white rounded-full mb-6'><MdShoppingCart className="mr-2 text-[1.2rem]" /> order now</button>
             </Link> ))} 
             </div>
    </section>
  )
}

export default Productcard