import React from 'react'
import { Link } from "react-router-dom";
import Googlelogincomp from "../../components/googlelogin/googlelogincomp.jsx";


const Login = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center px-2 sm:px-4 pt-24 pb-8'>
       <div className='w-full max-w-md'>
            <div className='text-4xl font-bold text-center text-gray-800 mb-8'>Meet your Alma and connect</div>
            <div className='bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-8 border border-gray-100'>
                <div className='text-3xl font-bold text-gray-800 mb-8 text-center'>Sign In</div>
                
                <div className='mb-6'>
                    <Googlelogincomp/>
                </div>
                
                <div className='flex items-center gap-4 mb-6'>
                    <div className='border-b border-gray-300 w-full'></div>
                    <span className='text-gray-500 font-medium'>or</span>
                    <div className='border-b border-gray-300 w-full'></div>
                </div>
                
                <div className='space-y-6'>
                    <div>
                        <label htmlFor="email" className='block text-sm font-semibold text-gray-700 mb-2'>Email</label>
                        <input 
                            type="text" 
                            className='w-full text-lg border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200' 
                            placeholder='Enter your email' 
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className='block text-sm font-semibold text-gray-700 mb-2'>Password</label>
                        <input 
                            type="password" 
                            className='w-full text-lg border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200' 
                            placeholder='Enter your password' 
                        />
                    </div>

                    <div className='w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl text-center text-lg font-semibold cursor-pointer transition-all duration-200 hover:scale-105 shadow-lg'>
                        Login
                    </div>
                </div>
            </div>
            <div className='mt-6 text-center text-gray-600'>
                New member? <Link className='text-blue-600 hover:text-blue-800 cursor-pointer font-semibold transition-colors duration-200' to={'/signup'}>Sign up now</Link>
            </div>
        </div>
    </div>
  )
}

export default Login
