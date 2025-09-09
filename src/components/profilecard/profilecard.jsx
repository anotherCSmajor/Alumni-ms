
import React from 'react'
import Card from "../card/card";
const Profilecard = () => {
  return (
  <Card padding={0}>
    <div className='relative h-25 '>
        <div className='relative w-full h-22 rounded-md '>
            <img src='https://images.pexels.com/photos/575375/pexels-photo-575375.jpeg' className='rounded-t-md h-full w-full ' />
        </div>
        <div className='absolute top-14 left-6 z-10'>
            <img src="https://images.pexels.com/photos/25724429/pexels-photo-25724429.jpeg" alt="" className='rounded-full border-2 h-16 w-16 border-white cursor-pointer' />
        </div>
        
    </div>
    <div className='p-5 bg-amber-50'>
<div className='text-xl'>Saad Halim</div>
<div className='text-sm my-1'>@Microsoft software Eng</div>
<div className='text-sm my-1'>Saharsa, Bihar</div>
<div className='text-sm my-1'>CSE-DS-2024</div>
    </div>
  </Card>
  )
}

export default Profilecard
