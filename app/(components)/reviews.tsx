import React from 'react'
import Image from 'next/image'
interface reviewProps{
    review:{
        id: number;
    imageUrl: string;
    name: string;
    reviewText: string;
    }[]
  }

const Reviews = (props : reviewProps) => {
  return (
    <section className=' relative pt-28'>
        <Image 
            src="https://res.cloudinary.com/ilove2support/image/upload/v1700498568/leaf_inibkf.png"
            alt=''
            width={120}
            height={120}
            className='absolute top-0 left-0'
         />
        <p className='uppercase text-[#C2414B] font-bold'>Customer&apos;s Feedback</p>
        <h2 className='lg:text-[3rem] text-[2.5rem] font-bold'>Clients&apos; Testimonials</h2>
        <div className='flex flex-col lg:flex-row justify-between mt-24 mb-16 w-[95%] mx-auto'>
            {props.review?.map(info => (
                 <div className='lg:w-[22%] w-[90%] flex flex-col items-center text-center shadow-sm shadow-gray-600 p-6 rounded-lg mb-6 lg:mb-0 mx-auto' key={info.id}>
                 <Image 
                     src={info.imageUrl}
                     alt=''
                     width={100}
                     height={100}
                     className='rounded-full'
                 />
                 <h4 className='font-semibold text-[1.3rem] my-4'>{info.name}</h4>
                 <p className='text-[14px] '>{info.reviewText}</p>
             </div>
            ))}
        </div>
    </section>
  )
}

export default Reviews