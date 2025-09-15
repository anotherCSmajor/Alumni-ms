import Card from '../../components/card/card'
import Profilecard from "../../components/profilecard/profilecard";
import React, { useState, Suspense, lazy, useCallback, memo } from 'react'
import MovieIcon from '@mui/icons-material/Movie';
import DescriptionIcon from '@mui/icons-material/Description';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Post from "../../components/post/post";
import PageWrapper from '../../components/PageWrapper';

// Lazy load modal components
const Modal = lazy(() => import('../../components/modal/modal'));
const Addmodal = lazy(() => import('../../components/addModal/addmodal'));

const Feeds = memo(() => {
  const [addPostModal, setAddPostModal] = useState(false)

  const handleOpenPostModal = useCallback(() => {
    setAddPostModal(prev => !prev)
  }, [])

  return (
    <PageWrapper className='min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 px-2 sm:px-4 xl:px-16 pt-8 pb-8'>
      <div className='max-w-6xl mx-auto flex gap-6'>

        {/* left side */}
        <div className='w-[22%] sm:w-[24%] hidden sm:block'>
          <div className='sticky top-6'>
            <Card className='shadow-md border-0 bg-white/80 backdrop-blur-sm rounded-2xl p-4'>
              <Profilecard />
            </Card>
          </div>
        </div>

        {/* central feed */}
        <div className='w-full sm:w-[52%] flex-1 flex flex-col gap-6'>

          {/* Post Creation Card */}
          <Card className='shadow-md border-0 bg-white/90 backdrop-blur-sm rounded-2xl hover:shadow-lg transition-shadow duration-300'>
            <div className='flex gap-3 items-center p-4'>
              <img 
                src="https://images.pexels.com/photos/25724429/pexels-photo-25724429.jpeg" 
                alt="Profile" 
                className='rounded-full w-12 h-12 border-2 border-white shadow-md cursor-pointer hover:scale-105 transition-transform duration-200 object-cover' 
                loading="lazy"
              />
              <div 
                onClick={() => setAddPostModal(true)} 
                className='w-full border border-gray-200 py-3 px-4 rounded-full cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 text-gray-600 hover:text-gray-800 font-medium'
              >
                Start a post
              </div>
            </div>
            
            <div className='w-full flex px-4 pb-4'>
              <div 
                onClick={() => setAddPostModal(true)}  
                className='flex gap-2 p-3 cursor-pointer justify-center rounded-xl w-[33%] hover:bg-green-50 hover:text-green-600 transition-all duration-200 group'
              >
                <MovieIcon sx={{ color: 'currentColor' }} className='group-hover:scale-110 transition-transform duration-200' />
                <span className='font-medium'>Video</span>
              </div>

              <div 
                onClick={() => setAddPostModal(true)}  
                className='flex gap-2 p-3 cursor-pointer justify-center rounded-xl w-[33%] hover:bg-red-50 hover:text-red-600 transition-all duration-200 group'
              >
                <AddPhotoAlternateIcon sx={{ color: 'currentColor' }} className='group-hover:scale-110 transition-transform duration-200' />
                <span className='font-medium'>Photo</span>
              </div>

              <div 
                onClick={() => setAddPostModal(true)}  
                className='flex gap-2 p-3 cursor-pointer justify-center rounded-xl w-[33%] hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group'
              >
                <DescriptionIcon sx={{ color: 'currentColor' }} className='group-hover:scale-110 transition-transform duration-200' />
                <span className='font-medium'>Article</span>
              </div>
            </div>
          </Card>

          {/* Posts Feed */}
          <div className='flex flex-col gap-6'>
            <Post />
            <Post />
            <Post />
          </div>
        </div>

        {/* right side */}
        <div className='w-[26%] hidden md:block'>
          <div className='sticky top-6'>
            <Card className='shadow-md border-0 bg-gradient-to-br from-amber-50 to-orange-50 backdrop-blur-sm rounded-2xl p-6'>
              <div className='text-2xl font-bold text-gray-800 mb-2'>Events</div>
              <div className='text-gray-600 mb-6 text-sm'>Latest News in the campus</div>
              
              <div className='space-y-4'>
                <div className='p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-colors duration-200 cursor-pointer group'>
                  <div className='text-sm font-medium text-gray-800 group-hover:text-gray-900 mb-1'>
                    See what are the alumni planning new
                  </div>
                  <div className='text-xs text-gray-500'>2h ago</div>
                </div>
                
                <div className='p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-colors duration-200 cursor-pointer group'>
                  <div className='text-sm font-medium text-gray-800 group-hover:text-gray-900 mb-1'>
                    Dates of freshers to be announced
                  </div>
                  <div className='text-xs text-gray-500'>2h ago</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Modal */}
      {addPostModal && (
        <Suspense fallback={<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-20"><div className="bg-white rounded-xl p-8">Loading...</div></div>}>
          <Modal closeModal={handleOpenPostModal} title={' '}>
            <Addmodal />
          </Modal>
        </Suspense>
      )}
    </PageWrapper>
  )
})

Feeds.displayName = 'Feeds'

export default Feeds
