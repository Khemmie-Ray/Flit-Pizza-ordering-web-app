import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import Image from 'next/image';

const Intro = () => {
  return (
    <section >
        <div className='flex justify-between'>
        <div>
            <h1>Handmade, <br /> With an Extra Pinch of <span>Love</span></h1>
            <p>Welcome to Pizzon, where each pizza is crafted with a meticulous touch and an extra pinch of love! Our commitment to excellence begins with the finest ingredients, thoughtfully selected to deliver a taste experience that goes beyond the ordinary</p>
            <button><MdShoppingCart /> order now</button>
        </div>
        <div>
            <div className='w-[500px] h-[500px] bg-yellow-400 rounded-full'></div>
            <Image 
            src="https://res.cloudinary.com/ilove2support/image/upload/v1696889286/uploads/bxoopgh1ixlhpdwfkz7m.png"
            alt=''
            width={200}
            height={200}
            />
              <Image 
            src="https://res.cloudinary.com/ilove2support/image/upload/v1697637066/uploads/whkayb8vpzhlsczydg3j.png"
            alt=''
            width={200}
            height={200}
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
    </section>
  )
}

export default Intro