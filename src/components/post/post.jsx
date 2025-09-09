import Card from '../../components/card/card'
import React from 'react'
import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
const Post = () => {
    const [seeMore, setSeeMore] = useState(false);
    const [comment, setComment] = useState(false);
    const handleSendComment = (e) => {
        e.preventDefault()
    }
    const desc = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rem consectetur labore maxime, quod illum? Hic quas minus vel sapiente veniam explicabo vero consectetur illo minima officiis sed, eaque aliquam.`
    return (
        <div>
            <Card padding={0}>
                <div className='flex gap-3 p-4'>
                    <div className='w-12 h-12 rounded-4xl'>
                        <img src="/collegefrontpage.jpg" alt="" className='rounded-4xl w-12 h-12 border-2 border-white cursor-pointer ' />
                    </div>
                    <div>
                        <div className='text-lg font-semibold '>SCE saharsa</div>
                        <div className='text-xs text-gray-500 '>Administration</div>
                    </div>
                </div>
                <div className='text-md p-4 my-3 whitespace-pre-line flex-grow '>
                    {seeMore ? desc : `${desc.slice(0, 50)}...`} <span onClick={() => setSeeMore(prev => !prev)} className='cursor-pointer text-gray-500 '>
                        {seeMore ? "see less" : 'see more'}
                    </span>
                </div>
                <div className='w-[100%] h-[300px]'>
                    <img className='w-full h-full' src="https://images.pexels.com/photos/26757586/pexels-photo-26757586.jpeg" alt="" />
                </div>
                <div className='my-2 p-4 flex justify-between items-center '>
                    <div className='flex gap-1 items-center '>
                        <ThumbUpIcon sx={{ color: "blue", fontSize: 12 }} /><div>Likes</div>
                    </div>
                    <div className='flex gap-1 items-center '>
                        <div>2 Comments</div>
                    </div>

                </div>
                <div className='flex p-1'>
                    <div className='w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-200'>
                        <ThumbUpIcon sx={{ fontSize: '22', color: 'blue' }} /><span>Likes</span>
                    </div>
                    <div onClick={()=>setComment(true)} className='w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-200'>
                        <CommentIcon sx={{ fontSize: '22', }} /><span>comment</span>
                    </div>
                    <div className='w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-200'>
                        <ShareIcon sx={{ fontSize: '22', }} /><span>Share</span>
                    </div>
                </div>
                 {/*  comment section */}
                 {
                    comment && <div>
                      <div className='p-4 w-full'>
                        <div className='flex gap-2 items-center'><img src="/collegefrontpage.jpg" alt="" className='rounded-full w-12 h-12 border-2 border-white cursor-pointer' />
                            <form action="" onSubmit={handleSendComment} className='w-full flex gap-2'>
                                <input type="text" placeholder='Add a comment...' className='w-full border-1 py-3 rounded-3xl hover:bg-gray-200' />
                                <button type='submit' className='cursor:pointer bg-blue-800 text-white rounded-3xl py-1 px-3'>send</button>
                            </form>
                        </div>
                     </div>

                     <div className='w-full p-4'>
                        <div className='my-4 '>
                            <div className='flex gap-3'>
                                <img src="/collegefrontpage.jpg" alt="" className='rounded-full w-10 h-10 border-2 border-white cursor-pointer' />
                                <div className='cursor-pointer'>
                                    <div className='text-md'>dummy user</div>
                                    <div className='text-sm text-gray-500'>@amaxon Sde2</div>
                                </div>
                            </div>
                            <div className='px-11 my-2 '>hi it's beatifulll</div>
                        </div>

                    </div>


                </div>
                 }
            </Card>
        </div>
    )
}

export default Post
