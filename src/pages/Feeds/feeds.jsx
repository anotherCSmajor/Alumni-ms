import Card from '../../components/card/card'
import Profilecard from "../../components/profilecard/profilecard";
import React, { useState } from 'react'
import MovieIcon from '@mui/icons-material/Movie';
import DescriptionIcon from '@mui/icons-material/Description';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Post from "../../components/post/post";
import Modal from '../../components/modal/modal';
import Addmodal from '../../components/addModal/addmodal';

const Feeds = () => {
const [addPostModal,setAddPostModal]=useState(false)

const handleOpenPostModal = ()=>{
  setAddPostModal(prev=>!prev)
}

  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
      
      {/* left side */}
      <div className='w-[21%] sm:block sm:w-[23%] hidden py-5 '>
        <div className='h-fit'>

          <Card>
            <Profilecard />
          </Card>
          {/* <div className='w-full my-5' >

        </div> */}
        </div>
      </div >
      {/* central side */}
      <div className='w-[100%] py5 sm:w-[50%]  '>

        <div>
          <Card padding={1}>
            <div className='flex gap-2 items-center '>
              <img src="https://images.pexels.com/photos/25724429/pexels-photo-25724429.jpeg" alt="" className='rounded-4xl w-13 h-13 border-2 border-white cursor-pointer' />
              <div onClick={()=>setAddPostModal(true)} className='w-full border-1 py-3 rounded-3xl cursor-pointer hover:bg-amber-50'>
                start a post
              </div> </div>
            <div className='w-full flex mt-3'>
              <div onClick={()=>setAddPostModal(true)}  className='flex gap-2 p-2 cursor-pointer justify-center rounded-full w-[33%] hover:bg-amber-50'><MovieIcon sx={{ color: 'green' }} />Video</div>



              <div onClick={()=>setAddPostModal(true)}  className='flex gap-2 p-2 cursor-pointer justify-center rounded-full w-[33%] hover:bg-amber-50'><AddPhotoAlternateIcon sx={{ colot: 'red' }} />Photo</div>



              <div onClick={()=>setAddPostModal(true)}  className='flex gap-2 p-2 cursor-pointer justify-center rounded-full w-[33%] hover:bg-amber-50'><DescriptionIcon sx={{ color: 'blue' }} />Article</div>
            </div>

          </Card>
        </div>

        <div className='border-b-1 border-gray-400 w-full my-5 ' />
        <div className='w-full flex flex-col gap-5'>
          <Post/>
          <Post/>
        </div>
      </div >
      {/* right side */}
      <div className='w-[26%] py-5 hidden md:block '>
        <div className=' bg-amber-50 '>
          <Card padding={1}>
            <div className='text-xl'>Events</div>
            <div className='text-gray-600'>Latest News in the campus </div>
            <div className='my-1 '>
              <div className='text-md'>See what are the alumni planning new</div>
              <div className='text-xs text-gray-400'>2h ago</div>
            </div>
            <div className='my-1 '>
              <div className='text-md'>dates of freshers to be announced </div>
              <div className='text-xs text-gray-400'>2h ago</div>
            </div>


          </Card>
        </div>
      </div>
      {
        addPostModal && <Modal closeModal={handleOpenPostModal} title={' '} >
      <Addmodal/>
      </Modal>
      }
    </div>
  )
}

export default Feeds
