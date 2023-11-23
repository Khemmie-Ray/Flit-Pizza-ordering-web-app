'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch } from "react-icons/fi";
import { MdShoppingCart } from "react-icons/md";

const Header = () => {

  return (
    <header className="relative flex justify-between items-center p-4 w-[95%] mx-auto">
      <div className="">
        <Link href="/" className="flex sm:gap-5 gap-3">
          <Image src="https://res.cloudinary.com/ilove2support/image/upload/v1699863114/pizza-logo_afsvzn.png" width={50} height={50} alt="Pizzon Logo" className="w-auto h-auto" />
        </Link>
        </div>
        <Image src="https://res.cloudinary.com/ilove2support/image/upload/v1699863113/pizza-header-img_krzjsl.png" alt='' width={200} height={200} className='w-auto h-auto '/>
        <nav className=" flex w-[45%] justify-between uppercase font-bold items-center">
          <Link href="">Home</Link>
          <Link href="">Product</Link>
          <Link href="">pages</Link>
          <Link href="">blog</Link>
          <Link href="">contact</Link>
          <div className='flex items-center'>
          <Link href="" className='text-[1.4rem] mr-2'><FiSearch /></Link>
          <Link href="" className='text-blue-600 text-[1.8rem]'><MdShoppingCart /></Link>
          </div>
        </nav>
    </header>
  );
};

export default Header;