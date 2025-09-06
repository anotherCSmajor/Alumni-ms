import React from 'react'

const Footer = () => {
    return (
        <div className='w-[100%] bg-gray-200 flex justify-center'>
            <div className='md:p-3 w-[100%] flex flex-col items-center py-4'>
                <div className='flex gap-1 items-center cursor-pointer'>
                    <h3 className='text-blue-800 font-bold text-xl'> AlumniVerse</h3>
                    <img src="/aluminiverse.png" alt="logo" className='w-10 h-10 ' />
                    <div className=' text-sm'>@copyright 2025</div>
                </div>
            </div>

        </div>
    )
}

export default Footer
