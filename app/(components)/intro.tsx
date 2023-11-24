import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import Image from 'next/image';

const Intro = () => {
  return (
    <section >
        <div className='flex justify-between items-center mt-4'>
        <div className='w-[100%] lg:w-[40%] p-4'>
            <h1 className='text-[3.5rem] font-[600]'>Handmade, <br /> With an Extra Pinch of <span className='text-[#E80902]'>Love</span></h1>
            <p className='mt-2'>Welcome to Pizzon, where each pizza is crafted with a meticulous touch and an extra pinch of love!</p>
            <button className='bg-[#FFB200] flex items-center uppercase px-8 py-4 text-white rounded-full my-6'><MdShoppingCart className="mr-2 text-[1.2rem]" /> order now</button>

        </div>
        <div className='relative lg:w-[50%] flex justify-end'>
            <div className='w-[400px] h-[700px] bg-yellow-400 rounded-tl-full rounded-bl-full'></div>
            <Image 
            src="https://res.cloudinary.com/ilove2support/image/upload/v1696889286/uploads/bxoopgh1ixlhpdwfkz7m.png"
            alt=''
            width={400}
            height={400}
            className='absolute top-20 left-20'
            />
              <Image 
            src="https://res.cloudinary.com/ilove2support/image/upload/v1697637066/uploads/whkayb8vpzhlsczydg3j.png"
            alt=''
            width={150}
            height={150}
            className='absolute bottom-0 right-48'
            />
             <Image 
            src="https://res.cloudinary.com/ilove2support/image/upload/v1699863242/pizza-onion_bvpupn.png"
            alt=''
            width={100}
            height={100}
            className='absolute bottom-20 left-0'
            />
        </div>
        </div>
        <div className='flex items-center'>
            <Image 
            src="https://res.cloudinary.com/ilove2support/image/upload/v1696767665/uploads/n0exddnuejvtk5zh1t0y.png"
            alt=''
            width={500}
            height={500}
             />
            <div className='ml-16 w-[40%] relative pr-8'>
                <h2 className='text-[2rem] font-bold mb-4'>Daily fresh and <br /> always tasty</h2>
                <p className='w-[70%]'>At Pizzon, we take pride in our artisanal approach to pizza-making. Our skilled chefs handcraft each pizza, ensuring a perfect blend of flavors and textures in every bite.</p>
                <Image 
                src="https://res.cloudinary.com/ilove2support/image/upload/v1699863242/pizza-daily-fresh-vacter_x6mcof.png"
                alt=''
                width={100}
                height={100}
                className='absolute bottom-0 right-0'
                />
            </div>
        </div>
        <div className='pt-12'>
        <p className='uppercase text-[#C2414B] font-bold'>Popular Dishes</p>
        <h2 className='text-[3rem] font-bold capitalize'>Browse our Menu</h2>
        </div>
    </section>
  )
}

export default Intro