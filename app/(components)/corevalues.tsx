import React from 'react'
import Image from 'next/image'

const Corevalues = () => {
  return (
    <section className='bg-[#FFFBED] py-12 relative'>
      <div className='w-[95%] mx-auto'>
      <Image 
        src="https://res.cloudinary.com/ilove2support/image/upload/v1700498568/pizza-strength-vacter_oeljrn.png"
        alt=''
        width={400}
        height={400}
        className='absolute top-0 right-0'
       />
       <p className='uppercase text-[#C2414B] font-bold'>Our Strength</p>
        <h2 className='text-[3rem] font-bold capitalize'>Why we are the best?</h2>
        <div className='flex flex-col lg:flex-row justify-between mt-12'>
        <div className='lg:w-[23%] w-[100%]'>
                 <Image 
                     src="https://res.cloudinary.com/ilove2support/image/upload/v1700498567/all-kinds-of-foods_vwpaqa.png"
                     alt=''
                     width={50}
                     height={50}
                     className=''
                 />
                 <h4 className='font-semibold text-[1.3rem] my-4'>All Kind of Food</h4>
                 <p className='text-[14px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequuntur non assumenda, excepturi nam quae.</p>
             </div>
             <div className='lg:w-[23%] w-[100%]'>
                 <Image 
                     src="https://res.cloudinary.com/ilove2support/image/upload/v1700498567/fresh-foods_hsxvmj.png"
                     alt=''
                     width={50}
                     height={50}
                     className=''
                 />
                 <h4 className='font-semibold text-[1.3rem] my-4'>All Kind of Food</h4>
                 <p className='text-[14px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequuntur non assumenda, excepturi nam quae.</p>
             </div>
             <div className='lg:w-[23%] w-[100%]'>
                 <Image 
                     src="https://res.cloudinary.com/ilove2support/image/upload/v1700498567/best-taste_f5hidn.png"
                     alt=''
                     width={50}
                     height={50}
                     className=''
                 />
                 <h4 className='font-semibold text-[1.3rem] my-4'>All Kind of Food</h4>
                 <p className='text-[14px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequuntur non assumenda, excepturi nam quae.</p>
             </div>
             <div className='lg:w-[23%] w-[100%]'>
                 <Image 
                     src="https://res.cloudinary.com/ilove2support/image/upload/v1700498568/on-time-delivery_a0hhtw.png"
                     alt=''
                     width={50}
                     height={50}
                     className=''
                 />
                 <h4 className='font-semibold text-[1.3rem] my-4'>All Kind of Food</h4>
                 <p className='text-[14px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequuntur non assumenda, excepturi nam quae.</p>
             </div>
             </div>
             </div>
    </section>
  )
}

export default Corevalues