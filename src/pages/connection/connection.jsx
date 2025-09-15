import React, { useState, memo, useCallback } from 'react'
import Profilecard from '../../components/profilecard/profilecard'
import PageWrapper from '../../components/PageWrapper'

const Connection = memo(() => {
    const [text, setText] = useState('catch up with friends')
    
    const handleFriends = useCallback(() => {
        setText("catch up with friends")
    }, [])

    const handlePending = useCallback(() => {
        setText('Pending request')
    }, [])
    return (
        <PageWrapper className='min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 px-2 sm:px-4 xl:px-16 pt-8 pb-8'>
            <div className='max-w-6xl mx-auto'>
                <div className='bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden'>
                    <div className='p-6'>
                        <div className='py-6 px-8 border border-gray-200 w-full flex justify-between items-center text-2xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-md mb-6'>
                            <div className='font-bold text-gray-800'>
                                {text}
                            </div>
                            <div className='flex gap-4'>
                                <button
                                    onClick={handleFriends}
                                    className={`px-6 py-3 cursor-pointer border rounded-xl font-semibold transition-all duration-200 hover:scale-105 ${
                                        text === 'catch up with friends'
                                            ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                    }`}
                                >
                                    Friends
                                </button>
                                <button
                                    onClick={handlePending}
                                    className={`px-6 py-3 cursor-pointer border rounded-xl font-semibold transition-all duration-200 hover:scale-105 ${
                                        text === 'Pending request'
                                            ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                    }`}
                                >
                                    Pending Requests
                                </button>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full'>
                            <div className='w-full'>
                                <Profilecard />
                            </div>
                            <div className='w-full'>
                                <Profilecard />
                            </div>
                            <div className='w-full'>
                                <Profilecard />
                            </div>
                            <div className='w-full'>
                                <Profilecard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
})

Connection.displayName = 'Connection'

export default Connection
