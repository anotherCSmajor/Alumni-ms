import React from 'react'
import {Link  } from "react-router-dom";
import Googlelogincomp from "../../components/googlelogin/googlelogincomp.jsx";
const landigpage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center px-2 sm:px-4 pt-24 pb-8'>
        <div className='max-w-6xl mx-auto'>
            <div className='bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden'>
                <div className='grid md:grid-cols-2 gap-12 items-center p-8'>
                    <div className='space-y-8'>
                        <div className='text-5xl md:text-6xl font-bold text-gray-800 leading-tight'>
                            Welcome to your 
                            <span className='text-blue-600'> uni community</span>
                        </div>
                        
                        <div className='space-y-6'>
                            <div className='flex justify-center md:justify-start'>
                                <div className='w-full max-w-sm'>
                                    <Googlelogincomp/>
                                </div>
                            </div>
                            
                            <Link 
                                to={'/login'} 
                                className='flex mx-auto md:mx-0 py-4 px-8 bg-white/90 backdrop-blur-sm gap-2 rounded-2xl items-center w-full max-w-sm justify-center text-gray-700 hover:bg-white hover:scale-105 border-2 border-gray-200 cursor-pointer transition-all duration-200 shadow-lg font-semibold'
                            >
                                Sign in with email
                            </Link>
                            
                            <div className='text-center md:text-left text-sm text-gray-600 max-w-sm mx-auto md:mx-0'>
                                <span className='text-blue-600 hover:text-blue-800 cursor-pointer font-medium transition-colors duration-200'>
                                    Terms & conditions
                                </span>
                            </div>
                            
                            <div className='text-center md:text-left text-lg max-w-sm mx-auto md:mx-0'>
                                New here? 
                                <Link to={'/signUp'} className='text-blue-600 hover:text-blue-800 cursor-pointer font-semibold transition-colors duration-200 ml-1'>
                                    Join now
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex justify-center md:justify-end'>
                        <div className='relative'>
                            <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 scale-110'></div>
                            <img 
                                src="/collegefrontpage.jpg" 
                                alt="college image" 
                                className='relative w-full max-w-lg h-auto rounded-3xl shadow-2xl object-cover hover:scale-105 transition-transform duration-300'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default landigpage
