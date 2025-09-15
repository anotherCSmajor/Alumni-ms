import React, { memo, useCallback } from 'react'
import Card from '../../components/card/card'
import EditSharpIcon from '@mui/icons-material/EditSharp';
import Post from '../../components/post/post';
import PageWrapper from '../../components/PageWrapper';

const Profile = memo(() => {
    const handleEdit = useCallback(() => {
        // Handle edit logic
        console.log('Edit clicked')
    }, [])

    return (
        <PageWrapper className='px-5 xl:px-50 py-5 mt-5 flex flex-col gap-5 w-full pt-8 bg-gray-100'>
            <div className='flex justify-between '>
                {/* left side main section */}
                <div className='w-full md:w-[70%] '>

                    <div>
                        <Card padding={0}>
                            <div className='w-full h-fit '>
                                <div className='relative w-full h-[200px]'>
                                    <button
                                        onClick={handleEdit}
                                        className='absolute cursor-pointer top-3 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3 bg-white hover:bg-gray-100 transition-colors'
                                    >
                                        <EditSharpIcon />
                                    </button>
                                    <img
                                        className='w-full h-[200px] rounded-tr-lg rounded-tl-lg object-cover'
                                        src="https://images.unsplash.com/photo-1689961645318-366c374f6b05?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Cover"
                                        loading="lazy"
                                    />
                                    <div className='absolute top-24 left-6 z-10'>
                                        <img
                                            className='rounded-full border-2 border-white cursor-pointer w-35 h-35 object-cover'
                                            src="https://images.pexels.com/photos/25724429/pexels-photo-25724429.jpeg"
                                            alt="Profile"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className='mt-10 relative px-8 py-2'>
                                    <button
                                        onClick={handleEdit}
                                        className='absolute cursor-pointer top-3 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3 bg-white hover:bg-gray-100 transition-colors'
                                    >
                                        <EditSharpIcon />
                                    </button>

                                    <div className='w-full'>
                                        <div className='text-2xl'>user 1</div>
                                        <div className='text-gray-700'>a software Engineer</div>
                                        <div className='text-sm text-gray-500'>Saharsa,Bihar</div>
                                        <div className='text-md text-blue-800 '>2 connection</div>

                                        <div className='md:flex w-full justify-between '>
                                            <div className='my-5 flex gap-5'>
                                                {/* Open To */}
                                                <div className='my-5 flex gap-5'>
                                                    {/* Open To (Green) */}
                                                    <div className='cursor-pointer px-6 py-2 rounded-xl font-semibold
                                                                  bg-green-500/20 backdrop-blur-md border border-green-300/50
                                                                  text-green-700 shadow-sm hover:bg-green-500/30 
                                                                  hover:shadow-lg hover:scale-105 transition-all duration-300'>
                                                        Open to
                                                    </div>

                                                    {/* Share (Blue) */}
                                                    <div className='cursor-pointer px-6 py-2 rounded-xl font-semibold
                                                             bg-blue-500/20 backdrop-blur-md border border-blue-300/50
                                                             text-blue-700 shadow-sm hover:bg-blue-500/30 
                                                             hover:shadow-lg hover:scale-105 transition-all duration-300'>
                                                        Share
                                                    </div>

                                                    {/* Login (Purple) */}
                                                    <div className='cursor-pointer px-6 py-2 rounded-xl font-semibold
                                                             bg-purple-500/20 backdrop-blur-md border border-purple-300/50
                                                             text-purple-700 shadow-sm hover:bg-purple-500/30 
                                                             hover:shadow-lg hover:scale-105 transition-all duration-300'>
                                                        Login
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='my-5 flex gap-5'>
                                                <div className='my-5 flex gap-5'>
                                                    <div className='cursor-pointer px-6 py-2 rounded-xl font-semibold
                                                             bg-purple-500/20 backdrop-blur-md border border-purple-300/50
                                                             text-purple-700 shadow-sm hover:bg-purple-500/30 
                                                             hover:shadow-lg hover:scale-105 transition-all duration-300'>
                                                        Message
                                                    </div>

                                                <div className='cursor-pointer px-6 py-2 rounded-xl font-semibold 
                  bg-white/20 backdrop-blur-md border border-white/30 
                  text-gray-800 shadow-sm hover:bg-white/30 
                  hover:shadow-lg hover:scale-105 transition-all duration-300'>
                                                    Remove
                                                </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <div>
                            <Card padding={1}>
                                <div className="relative">
                                    {/* Floating Edit Button */}
                                    <button
                                        onClick={handleEdit}
                                        className="absolute top-3 right-3 z-20 w-10 h-10 flex justify-center items-center rounded-full bg-amber-500 text-white shadow-md hover:bg-amber-600 transition-colors cursor-pointer"
                                    >
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
        </PageWrapper>
    )
})

Profile.displayName = 'Profile'

export default Profile
