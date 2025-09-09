import React from 'react'
import {Link  } from "react-router-dom";
import Googlelogincomp from "../../components/googlelogin/googlelogincomp.jsx";
const landigpage = () => {
  return (
    <div className='my-4 py-[50px] md:pl-[120px] px-5 md:flex justify-between'>
        <div className='md:w-[40%]'>
            <div className='text-4xl mx-auto text-grey-500'>Welcome to your uni community </div>
            <div className='my-3 flex mx-auto mt-[20px] bg-white gap-2 rounded-3xl w-[70%] text-black cursor-pointer'><Googlelogincomp/></div>
         
            <Link to={'/login'} className='flex mx-auto mt-[20px] py-2 px-2 bg-white gap-2 rounded-3xl items-center w-[70%] justify-center text-black hover:bg-gray-200 border-2 cursor-pointer'>signin with email</Link>
            <div className='ms-auto mb-4 text-sm w-[70%] mt-6'><span className='text-blue-800 cursor-pointer'> Terms & conditions </span></div>
            <Link to={'/signUp'} className='mx-auto text-center mb-4 text-lg w-[70%] mt-4 '>New here? <span className='text-blue-800 cursor-pointer' >join now</span></Link>

        </div>
        <div className='md:w-[50%] h-120 '>
            <img src="/collegefrontpage.jpg" alt="college image" className='w-[90%] h-[100%] rounded-full '/>
        </div>
      
    </div>
  )
}

export default landigpage
