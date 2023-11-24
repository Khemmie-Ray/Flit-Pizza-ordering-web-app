'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import { IoStarSharp } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
interface Product {
    id: number;
    productImage: string;
    productName: string;
    price: string;
    description: string;
}

const Productcard = () => {
    const [cart, setCart] = useState<Product[]>([]);
    const products: Product[] = [
        {
            id: 1,
            productImage: "https://res.cloudinary.com/ilove2support/image/upload/v1696768880/uploads/bxnbmb4etcl5i4vgre4s.jpg",
            productName: "Burger Pizza",
            price: "$20",
            description: "This is a burger pizza"
        },
        {
            id: 2,
            productImage: "https://res.cloudinary.com/ilove2support/image/upload/v1696768880/uploads/bxnbmb4etcl5i4vgre4s.jpg",
            productName: "Burger Pizza",
            price: "$20",
            description: "This is a burger pizza"
        },
        {
            id: 3,
            productImage: "https://res.cloudinary.com/ilove2support/image/upload/v1696766114/uploads/qensxeruxhb3o2d9txbb.png",
            productName: "New Pizza",
            price: "$10",
            description: "This is a new pizza"
        },
        {
            id: 4,
            productImage: "https://res.cloudinary.com/ilove2support/image/upload/v1697637066/uploads/whkayb8vpzhlsczydg3j.png",
            productName: "Greek Pizza",
            price: "$40",
            description: "This is a greek pizza"
        }
    ]

  
  
    const addTocart = (product: Product) => {
      // Check if the product is already in the cart
      if (!cart.find((item) => item.id === product.id)) {
        setCart([...cart, product]);
        console.log('Product added to cart:', product);
      } else {
        console.log('Product is already in the cart:', product);
      }
    };

  return (
    <section className='py-12'>
      <div className='w-[95%] mx-auto'>
       <p className='uppercase text-[#C2414B] font-bold'>Popular Dishes</p>
        <h2 className='text-[3rem] font-bold capitalize'>Browse our Menu</h2>
        <div className='flex flex-col lg:flex-row justify-between mt-12 flex-wrap'>
        { products.map((product) => (<div className='lg:w-[32%] w-[100%] mb-8 shadow-md shadow-gray-500 rounded-lg p-4' key={product.id}>
                 <Image 
                     src={product.productImage}
                     alt=''
                     width={400}
                     height={400}
                     className='mx-auto object-cover object-center w-[400px] h-[400px]'
                 />
                 <h4 className='font-semibold text-[1.3rem] my-4 flex justify-between w-[70%] mb-2'>{product.productName} <span className='text-[#E80902]'>{product.price}</span></h4>
                 <div className='flex text-[#FFB200]'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></div>
                 <p className='text-[14px] my-4'>{product.description}</p>
                 <button className='bg-[#FFB200] flex items-center uppercase px-8 py-4 text-white rounded-full mb-6' onClick={() => addTocart(product)}><MdShoppingCart className="mr-2 text-[1.2rem]" /> order now</button>
             </div> ))};  
             </div>
             </div>
    </section>
  )
}

export default Productcard