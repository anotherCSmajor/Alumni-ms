import Card from '../../components/card/card'
import React, { memo, useState, useCallback } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

const Post = memo(() => {
  const [seeMore, setSeeMore] = useState(false);
  const [comment, setComment] = useState(false);

  const handleSendComment = useCallback((e) => {
    e.preventDefault()
  }, [])

  const toggleSeeMore = useCallback(() => {
    setSeeMore(prev => !prev)
  }, [])

  const toggleComment = useCallback(() => {
    setComment(prev => !prev)
  }, [])

  const desc = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rem consectetur labore maxime, quod illum? Hic quas minus vel sapiente veniam explicabo vero consectetur illo minima officiis sed, eaque aliquam.`
  
  return (
    <div>
      <Card padding={0} className="rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
        
        {/* Header */}
        <div className='flex gap-3 p-4 items-center'>
          <img 
            src="/collegefrontpage.jpg" 
            alt="profile" 
            className='rounded-full w-12 h-12 border border-white shadow-sm cursor-pointer' 
          />
          <div>
            <div className='text-lg font-semibold text-gray-900'>SCE Saharsa</div>
            <div className='text-xs text-gray-500'>Administration</div>
          </div>
        </div>

        {/* Description */}
        <div className='text-sm text-gray-700 px-4 pb-3 whitespace-pre-line leading-relaxed'>
          {seeMore ? desc : `${desc.slice(0, 80)}...`} 
          <span 
            onClick={toggleSeeMore} 
            className='cursor-pointer text-blue-600 hover:underline ml-1'
          >
            {seeMore ? "see less" : 'see more'}
          </span>
        </div>

        {/* Image */}
        <div className='w-full h-[280px] overflow-hidden rounded-2xl px-4 shadow-md'>
          <img 
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' 
            src="https://images.pexels.com/photos/26757586/pexels-photo-26757586.jpeg" 
            alt="Post content" 
            loading="lazy"
          />
        </div>

        {/* Stats */}
        <div className='flex justify-between items-center px-4 py-2 text-sm text-gray-600'>
          <div className='flex gap-1 items-center'>
            <ThumbUpIcon sx={{ color: "blue", fontSize: 16 }} />
            <span>120 Likes</span>
          </div>
          <span>2 Comments</span>
        </div>

        {/* Actions */}
        <div className='flex px-4 pb-3 gap-2'>
          {[
            { icon: <ThumbUpIcon sx={{ fontSize: 20, color: 'blue' }} />, label: "Like" },
            { icon: <CommentIcon sx={{ fontSize: 20 }} />, label: "Comment", action: toggleComment },
            { icon: <ShareIcon sx={{ fontSize: 20 }} />, label: "Share" }
          ].map((btn, i) => (
            <div 
              key={i} 
              onClick={btn.action} 
              className='flex-1 flex justify-center items-center gap-2 py-2 rounded-xl 
                        bg-white/30 backdrop-blur-md border border-white/20 text-gray-800 
                        cursor-pointer hover:bg-white/40 hover:shadow-md transition-all duration-300'
            >
              {btn.icon}<span>{btn.label}</span>
            </div>
          ))}
        </div>

        {/* Comment Section */}
        {comment && (
          <div className='p-4 border-t border-white/20'>
            {/* Input */}
            <div className='flex gap-2 items-center mb-4'>
              <img 
                src="/collegefrontpage.jpg" 
                alt="Profile" 
                className='rounded-full w-10 h-10 border border-white shadow-sm' 
                loading="lazy" 
              />
              <form onSubmit={handleSendComment} className='w-full flex gap-2'>
                <input 
                  type="text" 
                  placeholder='Add a comment...' 
                  className='w-full px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/30 
                             focus:outline-none focus:ring-2 focus:ring-blue-400'
                />
                <button 
                  type='submit' 
                  className='px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300'
                >
                  Send
                </button>
              </form>
            </div>

            {/* Dummy Comment */}
            <div className='flex gap-3'>
              <img 
                src="/collegefrontpage.jpg" 
                alt="User" 
                className='rounded-full w-10 h-10 border border-white' 
                loading="lazy" 
              />
              <div>
                <div className='text-sm font-semibold text-gray-900'>Dummy User</div>
                <div className='text-xs text-gray-500'>@amaxon Sde2</div>
                <div className='mt-1 text-gray-700 bg-white/30 rounded-xl px-3 py-2 backdrop-blur-md'>
                  hi it's beatifulll
                </div>
              </div>
            </div>
          </div>
        )}

      </Card>
    </div>
  )
})

Post.displayName = 'Post'
export default Post

