import React from 'react'
import Image from 'next/image'

const FormPage = () => {
  return (
    <div>
         <div className='bg-cover bg-center h-[40vh] w-[100%] bg-gray-700 flex justify-center items-center bg-blend-overlay mb-12' style={{ backgroundImage: 
         "url('https://res.cloudinary.com/ilove2support/image/upload/v1704916628/10498711_4492606_bzr28g.jpg')" }}>
            <h3 className='text-white text-[2.5rem] drop-shadow-sm font-[700]'>Contact Us</h3>
        </div>
        <div className='w-[80%]  mx-auto'>
            <h3 className='text-center text-[3rem]'>We would <span className='text-[rgb(232,9,2)]'></span> love to hear from you</h3>
        <p className='text-center'>Do you have questions or feedback? Reach out to us at <a href="#" className='underline text-[rgb(232,9,2)]'>contact@pizzon.com</a></p>
        <div className='flex justify-between mt-24 items-center'>
            <div className='relative w-[55%] bg-[rgba(212,210,210,0.4)] self-baseline py-8 px-4 rounded-md'>
               <h3 className='text-[2rem] font-[700] mb-4'>Where to <span className='text-[rgb(232,9,2)]'> find</span> us: </h3> 
               <p className='font-[700]'>Pizzon HQ</p>
               <p className='w-[50%] mt-8'>456, Victoria Island Avenue, Block C, Plot 789, Lekki Phase 2, Surulere District, Ikeja, Lagos, Nigeria</p>
               <Image 
               src="https://res.cloudinary.com/ilove2support/image/upload/v1700498568/on-time-delivery_a0hhtw.png"
               alt=''
               width={150}
               height={150} 
               className='absolute top-12 right-10'/>
               <p></p>
            </div>
            <div className='w-[40%]'>
                <h3 className='text-[2rem] font-[700]'>Send us a <span className='capitalize text-[rgb(232,9,2)]'>message</span></h3>
            <form action="" className='w-[100%] p-6'>
                <input type="text" placeholder='Name' className='block border p-2 rounded-sm w-[100%] mb-4'/>
                <input type="text" placeholder='Email address' className='block border p-2 rounded-sm w-[100%] mb-4'/>
                <input type="text" placeholder='Subject' className='block border p-2 rounded-sm w-[100%] mb-4'/>
                <textarea placeholder='Your message' className='block border p-2 rounded-sm w-[100%] mb-4 h-[15vh]'/>
                <button className='bg-[#FFB200] uppercase px-8 py-4 text-white rounded-md font-bold mb-4 lg:mb-0'>Send message</button>
            </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default FormPage