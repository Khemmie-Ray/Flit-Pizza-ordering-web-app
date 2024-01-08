'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch } from "react-icons/fi";
import { MdShoppingCart } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function handleSubmit() {
    setShowMenu(!showMenu)
  }

  return (
    <section className='bg-white border-b border-[#e8e8e8] w-[100%]'>
    <header className="sticky top-0 z-30 p-4 ">
      <div className="w-[95%] mx-auto lg:flex justify-between items-center hidden">
      <div>
        <Link href="/" className="flex sm:gap-5 gap-3">
          <Image src="https://res.cloudinary.com/ilove2support/image/upload/v1699863114/pizza-logo_afsvzn.png" width={50} height={50} alt="Pizzon Logo" className="w-auto h-auto" />
        </Link>
        </div>
        <Image src="https://res.cloudinary.com/ilove2support/image/upload/v1699863113/pizza-header-img_krzjsl.png" alt='' width={200} height={200} className='w-auto h-auto '/>
        <nav className=" flex w-[45%] justify-between uppercase font-bold items-center">
          <Link href="/">Home</Link>
          <Link href="/product">Product</Link>
          <Link href="#">pages</Link>
          <Link href="#">blog</Link>
          <Link href="#">contact</Link>
          <div className='flex items-center'>
          <Link href="" className='text-[1.4rem] mr-2'><FiSearch /></Link>
          <Link href="/cart" className='text-blue-600 text-[1.8rem]'><MdShoppingCart /></Link>
          </div>
        </nav>
        </div>
    </header>
    <div className="sticky pb-4 top-0 z-30 w-[95%] mx-auto flex justify-between items-center lg:hidden">
            <div>
              <Link href="/" className="flex gap-3">
                <Image src="https://res.cloudinary.com/ilove2support/image/upload/v1699863114/pizza-logo_afsvzn.png" width={50} height={50} alt="Pizzon Logo" className="w-auto h-auto" />
              </Link>
              </div>
              <Image src="https://res.cloudinary.com/ilove2support/image/upload/v1699863113/pizza-header-img_krzjsl.png" alt='' width={200} height={200} className='w-auto h-auto '/>
              <Link href="/cart" className='text-blue-600 text-[1.8rem] mr-4'><MdShoppingCart /></Link>
              <RiMenu3Fill className="text-[2rem]" onClick={handleSubmit} />
        {showMenu && (   
              <nav className="absolute flex flex-col w-[100%] uppercase font-bold items-center top-36 bg-white p-4">
                <Link href="/" className='mb-4'>Home</Link>
                <Link href="/product" className='mb-4'>Product</Link>
                <Link href="#" className='mb-4'>blog</Link>
                <Link href="#" className='mb-4'>contact</Link>
                <div className='flex items-center'>
                <Link href="" className='text-[1.4rem] mr-2'><FiSearch /></Link>
                </div>
              </nav>
        )}
        </div>
    </section>
  );
};

export default Header;