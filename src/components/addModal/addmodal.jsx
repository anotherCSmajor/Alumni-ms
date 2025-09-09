import React from 'react'
import ImageIcon from '@mui/icons-material/Image';

const Addmodal = () => {
  return (
    <div className=''>
      <div className='flex gap-4 items-center'>
        <div className='relative '>
            <img src="/collegefrontpage.jpg" className='w-15 h-15 rounded-full' alt="" />
        </div>
        <div className='text-2xl'>Saad</div>
      </div>
      <div>
        <textarea cols={50} rows={5} className='my-3 outline-0 text-xl p-2 ' placeholder='what do you wanna talk about ' name="" id=""></textarea>
      </div>
      <div>
        <img src="/collegefrontpage.jpg" className='w-20 h-20 rounded-2xl' alt="" />
      </div>
      <div className='flex justify-between items-center '>
        <div className='my-6'>
          <label className=' cursor-pointer ' htmlFor="inputFile"><ImageIcon/></label>
          <input type="file"  className='hidden cursor-pointer' id='inputFile'/>
        </div>
        <div className='bg-blue-950 text-white py-1 h-fit px-3 cursor-pointer rounded-2xl '>Post</div>
      </div>
    </div>
  )
}

export default Addmodal
