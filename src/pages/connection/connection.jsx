import React, { useState } from 'react'
import Profilecard from '../../components/profilecard/profilecard'

const Connection = () => {
    const [text,setText]= useState('catch up with friends')
    const handleFriends = async()=>{
        setText("catch up with friends")
    }

    const handlePending = async()=>{
        setText('Pending request')
    }
  return (
    <div className='px-5 xl:px-50 py-9 flex flex-col gap-5 w-full mt-5 bg-gray-100'>
      <div className='py-4 px-10 border-1 border-gray-400 w-full flex justify-between my-5 text-xl bg-white rounded-xl '>
        <div>
            {text}
        </div>
        <div className='flex gap-3'>
            <button onClick={handleFriends} className={`p-1 cursor-pointer border-1 rounded-lg border-gray-300  ${text==='catch up with friends'?'bg-blue-800 text-white':''} `}>Friends</button>
            <button onClick={handlePending} className={`p-1 cursor-pointer border-1 rounded-lg border-gray-300 ${text==='Pending request'?'bg-blue-800 text-white':''} `}>Pending request </button>

        </div>
      </div>
      <div className='flex h-[80vh] w-full gap-7 flex-wrap items-start justify-center '>
            <div className='md:w-[23%] h[270px] sm:w-full '>
                <Profilecard/>
            </div>
            <div className='md:w-[23%] h[270px] sm:w-full '>
                <Profilecard/>
            </div>
            <div className='md:w-[23%] h[270px] sm:w-full '>
                <Profilecard/>
            </div>
            <div className='md:w-[23%] h[270px] sm:w-full '>
                <Profilecard/>
            </div>
      </div>
    </div>
  )
}

export default Connection
