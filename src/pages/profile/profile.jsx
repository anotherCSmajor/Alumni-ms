import React from 'react'
import Card from '../../components/card/card'
import EditSharpIcon from '@mui/icons-material/EditSharp';
import Post from '../../components/post/post';

const Profile = () => {
    return (
        <div className=' px-5 xl:px-50 py-5 mt-5 flex flex-col gap-5 w-full pt-12 bg-gray-100'>
            <div className='flex justify-between '>
                {/* left side main section */}
                <div className='w-full md:w-[70%] '>

                    <div>
                        <Card padding={0}>
                            <div className='w-full h-fit '>
                                <div className='relative w-full h-[200px] '>
                                    <div className='absolute cursor-pointer top-3 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3 bg-white '><EditSharpIcon /></div>
                                    <img className='w-full h-[200px] rounded-tr-lg rounded-tl-lg ' src="https://images.pexels.com/photos/575375/pexels-photo-575375.jpeg" alt="" />
                                    <div className='absolute object-cover top-24 left-6 z-10'> <img className='rounded-full border-2 border-white cursor-pointer w-35 h-35 ' src="https://images.pexels.com/photos/25724429/pexels-photo-25724429.jpeg" alt="" /></div>
                                </div>
                                <div className=' mt-10 relative px-8 py-2'>
                                    <div className='absolute cursor-pointer top-3 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3 bg-white '><EditSharpIcon /></div>

                                    <div className='w-full'>
                                        <div className='text-2xl'>user 1</div>
                                        <div className='text-gray-700'>a software Engineer</div>
                                        <div className='text-sm text-gray-500'>Saharsa,Bihar</div>
                                        <div className='text-md text-blue-800 '>2 connection</div>

                                        <div className='md:flex w-full justify-between '>
                                            <div className='my-5 flex gap-5 '>
                                                <div className='cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold '>open to</div>
                                                <div className='cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold '>share</div>

                                                <div className='cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold '>Login</div>

                                            </div >
                                            <div className='my-5 flex gap-5 '>
                                                <div className='cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold '>Message</div>
                                                <div className='cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold '>Remove</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <div >
                            <Card padding={1}>
                                <div className="relative">
                                    {/* Floating Edit Button */}
                                    <button className="absolute top-3 right-3 z-20 w-10 h-10 flex justify-center items-center rounded-full bg-amber-500 text-white shadow-lg hover:bg-amber-600 transition cursor-pointer">
                                        <EditSharpIcon fontSize="small" />
                                    </button>

                                    {/* Card Content */}
                                    <div className="text-xl font-semibold">About</div>
                                    <div className="text-gray-700 text-md w-[80%] mt-2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci ipsa, quo dolores nostrum hic necessitatibus quidem eveniet optio consequatur! Illum rerum quas distinctio vero esse ducimus, magnam natus quam.
                                    </div>
                                </div>
                            </Card>

                        </div>
                        <div>
                            <Card padding={1}>
                                <div className="flex justify-between items-center mb-3">
                                    <h2 className="text-lg font-semibold">Latest Posts</h2>
                                    <span className="text-sm text-blue-600 cursor-pointer hover:underline">
                                        View All
                                    </span>
                                </div>

                                {/* Horizontal scroll container */}
                                <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                                    {/* Post Tiles */}
                                    {[1, 2, 3, 4, 5, 6].map((id) => (
                                        <div
                                            key={id}
                                            className="min-w-[250px] max-w-[250px] cursor-pointer hover:scale-105 transition-transform"
                                        >
                                            <Post />
                                        </div>
                                    ))}
                                </div>
                            </Card>

                        </div>
                    </div>
                </div>
                <div className='hidden md:flex md:w-[28%] '>
                    <div className='sticky top-19 '></div>

                    <Card padding={3}>
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h2 className="text-xl font-semibold">Events</h2>
                                <p className="text-sm text-gray-500">Latest news in the campus</p>
                            </div>
                            <button className="text-sm text-blue-600 hover:underline cursor-pointer">
                                View All
                            </button>
                        </div>

                        {/* Event List */}
                        <div className="flex flex-col gap-4">
                            <div className="p-3 rounded-lg hover:bg-amber-50 transition cursor-pointer shadow-sm border border-gray-200">
                                <p className="text-md font-medium">See what the alumni are planning new</p>
                                <span className="text-xs text-gray-400">2h ago</span>
                            </div>

                            <div className="p-3 rounded-lg hover:bg-amber-50 transition cursor-pointer shadow-sm border border-gray-200">
                                <p className="text-md font-medium">Dates of freshers to be announced</p>
                                <span className="text-xs text-gray-400">2h ago</span>
                            </div>
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    )
}

export default Profile
