import React from 'react'
import ExternalLayout from '@/app/(components)/External-Layout'

const Login = () => {
  return (
    <div>
        <ExternalLayout>
            <div className='flex justify-center items-center h-[60vh]'>
        <div className='w-[25%] p-4'>
        <h3 className='mb-6 text-[1.8rem] font-[500]'>Admin Dashboard</h3>
        <form action="">
            <input type="text" placeholder='username' className='w-[100%] py-2 px-4 outline-blue-600 block border mb-6'/>
            <input type="password" placeholder='password' className='w-[100%] py-2 px-4 outline-blue-600 block border mb-6'/>
            <button className='w-[100%] py-[10px] bg-green-800 text-white font-[700]'>Sign In</button>
        </form>
        </div>
        </div>
      </ExternalLayout>
    </div>
  )
}

export default Login