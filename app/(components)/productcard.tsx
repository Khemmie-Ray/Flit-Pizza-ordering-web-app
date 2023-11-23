import React from 'react'
import Image from 'next/image'
import { IoStarSharp } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";

const Productcard = () => {
  return (
    <section className='py-12'>
      <div className='w-[95%] mx-auto'>
       <p className='uppercase text-[#C2414B] font-bold'>Popular Dishes</p>
        <h2 className='text-[3rem] font-bold capitalize'>Browse our Menu</h2>
        <div className='flex flex-col lg:flex-row justify-between mt-12 flex-wrap'>
        <div className='lg:w-[32%] w-[100%] mb-8 shadow-md shadow-gray-500 rounded-lg p-4'>
                 <Image 
                     src="https://res.cloudinary.com/ilove2support/image/upload/v1696768880/uploads/bxnbmb4etcl5i4vgre4s.jpg"
                     alt=''
                     width={400}
                     height={400}
                     className=''
                 />
                 <h4 className='font-semibold text-[1.3rem] my-4 flex justify-between w-[70%] mb-2'>Burger Pizza <span className='text-[#E80902]'>$20</span></h4>
                 <div className='flex text-[#FFB200]'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></div>
                 <p className='text-[14px] my-4'>This is a burger pizza</p>
                 <button className='bg-[#FFB200] flex items-center uppercase px-8 py-4 text-white rounded-full mb-6'><MdShoppingCart className="mr-2 text-[1.2rem]" /> order now</button>
             </div>
             <div className='lg:w-[32%] w-[100%] mb-8 shadow-md shadow-gray-500 rounded-lg p-4'>
                 <Image 
                     src="https://res.cloudinary.com/ilove2support/image/upload/v1696768880/uploads/bxnbmb4etcl5i4vgre4s.jpg"
                     alt=''
                     width={400}
                     height={400}
                     className=''
                 />
                 <h4 className='font-semibold text-[1.3rem] my-4 flex justify-between w-[70%] mb-2'>Burger Pizza <span className='text-[#E80902]'>$20</span></h4>
                 <div className='flex text-[#FFB200]'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></div>
                 <p className='text-[14px] my-4'>This is a burger pizza</p>
                 <button className='bg-[#FFB200] flex items-center uppercase px-8 py-4 text-white rounded-full mb-6'><MdShoppingCart className="mr-2 text-[1.2rem]" /> order now</button>
             </div>
             <div className='lg:w-[32%] w-[100%] mb-8 shadow-md shadow-gray-500 rounded-lg p-4'>
                 <Image 
                     src="https://res.cloudinary.com/ilove2support/image/upload/v1696766114/uploads/qensxeruxhb3o2d9txbb.png"
                     alt=''
                     width={400}
                     height={400}
                     className=''
                 />
                 <h4 className='font-semibold text-[1.3rem] my-4 flex justify-between w-[70%] mb-2'>New Pizza <span className='text-[#E80902]'>$10</span></h4>
                 <div className='flex text-[#FFB200]'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></div>
                 <p className='text-[14px] my-4'>This is a new pizza</p>
                 <button className='bg-[#FFB200] flex items-center uppercase px-8 py-4 text-white rounded-full mb-6'><MdShoppingCart className="mr-2 text-[1.2rem]" /> order now</button>
             </div>
             <div className='lg:w-[32%] w-[100%] mb-8 shadow-md shadow-gray-500 rounded-lg p-4'>
                 <Image 
                     src="https://res.cloudinary.com/ilove2support/image/upload/v1697637066/uploads/whkayb8vpzhlsczydg3j.png"
                     alt=''
                     width={400}
                     height={400}
                     className=''
                 />
                 <h4 className='font-semibold text-[1.3rem] my-4 flex justify-between w-[70%] mb-2'>Greek Pizza <span className='text-[#E80902]'>$40</span></h4>
                 <div className='flex text-[#FFB200]'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></div>
                 <p className='text-[14px] my-4'>This is a greek pizza</p>
                 <button className='bg-[#FFB200] flex items-center uppercase px-8 py-4 text-white rounded-full mb-6'><MdShoppingCart className="mr-2 text-[1.2rem]" /> order now</button>
             </div>
             </div>
             </div>
    </section>
  )
}

export default Productcard