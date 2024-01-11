import React from 'react';
import Link from 'next/link';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
   <footer className='bg-[#FFFBED] px-4 py-[4em]'>
    <div className='flex flex-col lg:flex-row justify-between bg-[#FFFBED] w-[95%] mx-auto'>
    <div className='flex flex-col'>
      <h2 className='font-bold uppercase mb-6'>Information</h2>
      <Link href="/" className='mb-4 text-[14px]'>Home</Link>
      <Link href="/blog" className='mb-4 text-[14px]'>Blog</Link>
      <Link href="#" className='mb-4 text-[14px]'>About Us</Link>
      <Link href="#" className='mb-4 text-[14px]'>Menu</Link>
      <Link href="/contact" className='text-[14px]'>Contact Us</Link>
    </div>
    <div className='flex flex-col mt-6 lg:mt-0'>
      <h2 className='font-bold uppercase mb-6'>Top Items</h2>
      <Link href="#" className='mb-4 text-[14px]'>Pepperoni</Link>
      <Link href="#" className='mb-4 text-[14px]' >Swiss Mushroom</Link>
      <Link href="#" className='mb-4 text-[14px]'>Barbeque Chicken</Link>
      <Link href="#" className='mb-4 text-[14px]'>Vegetarian</Link>
      <Link href="#" className='text-[14px]'>Ham & Cheese</Link>
    </div>
    <div className='flex flex-col mt-6 lg:mt-0'>
      <h2 className='font-bold uppercase mb-6'>Others</h2>
      <Link href="#" className='mb-4 text-[14px]'>Checkout</Link>
      <Link href="/cart" className='mb-4 text-[14px]'>Cart</Link>
      <Link href="/product" className='mb-4 text-[14px]'>Product</Link>
      <Link href="#" className='mb-4 text-[14px]'>Location</Link>
      <Link href="#" className='text-[14px]'>Legal</Link>
    </div>
    <div className='flex flex-col mt-6 lg:mt-0'>
      <h2 className='font-bold uppercase mb-6'>social media</h2>
     <div className='flex text-[3rem]'>
      <Link href="#" className='text-blue-800 mr-4'><FaFacebookSquare/></Link>
      <Link href="#" className='text-[#D42E23] mr-4'><FaSquarePinterest /></Link>
      <Link href="#" className='text-[#20A2E2] mr-4'><FaSquareTwitter /></Link>
      <Link href="#" className='text-white bg-[#EA5734]'> <AiFillInstagram /></Link>
     </div>
     <p className='mt-2'>Signup and get exclusive offers and coupon codes.</p>
     <Link  href="" className='bg-[#FFB200] text-white py-2 px-8 rounded-[20px] w-[40%] text-center mt-4 font-bold uppercase'>sign up</Link>
    </div>
    </div>
   </footer>
  )
}

export default Footer