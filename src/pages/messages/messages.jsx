import React from 'react'
import Card from '../../components/card/card'
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import Conversation from '../../components/conversation/conversation';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import ImageSharpIcon from '@mui/icons-material/ImageSharp';
const Messages = () => {
    return (
        <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-50'>
            <div className='w-full justify-between flex pt-5  bg-amber-50 '>
                {/* left side below */}
                <div className='w-full md:w-[70%] '>
                    <Card padding={0}>
                        <div className='border-b-1 border-gray-300 px-5 py-5 font-semibold text-lg '>
                            Message
                        </div>

                        <div className='border-b-1 border-gray-300 px-5 py-2 '>
                            <div className='py-1 px-3 cursor-pointer hover:bg-green-600 bg-green-900 font-semibold flex gap-2 w-fit rounded-2xl text-white'>Focused<FormatListBulletedSharpIcon /></div>
                        </div>
                        {/* div for chats */}
                        <div className='w-full md:flex '>
                            <div className='h-[590px] overflow-auto w-full md:w-[40%] border-r-1 border-gray-400'>
                                {/* for each chat */}
                                <Conversation />


                            </div>
                            <div className='w-full md:w-[60%] border-gray-400 '>
                                <div className='border-gray-300 py-2p px-4 border-b-2 flex justify-between items-center '>



                                    <div>
                                        <p className='text-sm font-semibold '>user1 </p>
                                        <p className='text-sm text-gray-400 '>hi this is user 1 </p>
                                    </div>
                                    <div><MoreHorizSharpIcon /></div>
                                </div>
                                <div className='h-[360px] w-full overflow-auto border-b-1 border-gray-300 '>
                                    <div className=' w-full border-b-1 border-gray-300 gap-3 p-4 '>
                                        <img className='rounded-full cursor-pointer w-16 h-15 ' src="https://images.pexels.com/photos/25724429/pexels-photo-25724429.jpeg" alt="" />

                                        <div className='my-2'>
                                            <div className='text-md'>user 1</div>
                                            <div className=' text-sm text-gray-500 '>THis is user 1</div>

                                        </div>
                                    </div>
                                    <div className='w-full'>
                                        {/* for eaxh mesg */}
                                        <div className='flex w-full cursor-pointer border-gray-300 gap-3 p-4 '>
                                            <div className='shrink-0'>
                                                <img className='w-8 h-8 rounded-full cursor-pointer ' src="https://images.pexels.com/photos/25724429/pexels-photo-25724429.jpeg" alt="" />
                                            </div>
                                            <div className='mb-2 w-full'>
                                                <div className='text-md '>user1 </div>
                                                <div className='text-sm mt-6 hover:bg-gray-200 '>Ths is text messages</div>
                                                <div className='my-2'><img className='w-[240px] h-[180px] rounded-md ' src="https://images.pexels.com/photos/14595313/pexels-photo-14595313.jpeg" alt="" /></div>
                                            </div>
                                        </div>


                                        <div className='flex w-full cursor-pointer border-gray-300 gap-3 p-4 '>
                                            <div className='shrink-0'>
                                                <img className='w-8 h-8 rounded-full cursor-pointer ' src="https://images.pexels.com/photos/25724429/pexels-photo-25724429.jpeg" alt="" />
                                            </div>
                                            <div className='mb-2 w-full'>
                                                <div className='text-md '>user1 </div>
                                                <div className='text-sm mt-6 hover:bg-gray-200 '>Ths is text messages</div>
                                                <div className='my-2'><img className='w-[240px] h-[180px] rounded-md ' src="https://images.pexels.com/photos/14595313/pexels-photo-14595313.jpeg" alt="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* space for message typing */}
                                <div className='p-2 w-full border-b-1 border-gray-200'>
                                    <textarea rows={4} className='bg-gray-200 outline-0 rounded-xl text-sm w-full p-3' placeholder='Write a message cutie😁❤️' id=""></textarea>
                                </div>
                                <div className='p-3 flex justify-between '>
                                    <div>
                                    <label htmlFor="messageImage" className='cursor-pointer '><ImageSharpIcon/></label>
                                    <input type="file" id='messageImage' className='hidden' />
                                     </div>
                                     <div className='px-3 py-1 cursor-pointer rounded-2xl border-red-100 bg-blue-950 text-white'>
send
                                     </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

        </div>
    )
}

export default Messages
