import React from 'react'

const Modalform = ({ totalprices }) => {
   
  return (
    <form action="" className='w-[40%] bg-white rounded-lg p-6'>
        <h3 className='my-2 font-bold text-[1.2rem]'>You will pay ${totalprices} on delivery.</h3> 
        <label htmlFor="" className='block mb-4'>Fullname
            <input type="text" placeholder='John Doe' className='w-[100%] my-2 border border-gray-400 p-2'/>
        </label>
        <label htmlFor="" className='block mb-4'>Phone Number
            <input type="text" placeholder='+234 703 4636' className='w-[100%] my-2 border border-gray-400 p-2'/>
        </label>
        <label htmlFor="" className='block'>Address
        <textarea name="" id=""  className='w-[100%] my-2 border border-gray-400 p-2 h-[90px]' placeholder='10 John Street'/>
        </label>
        <button className='bg-[#FFB200] outline-none rounded-md px-6 py-2 font-semibold'>Order</button>
    </form>
  )
}

export default Modalform