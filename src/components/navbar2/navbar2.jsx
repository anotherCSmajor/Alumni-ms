import React, { useState } from 'react'
import './Navbar2.css'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/PeopleOutline';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import { useLocation,Link } from "react-router-dom";
const Navbar2 = () => {
    const [dropdown, setDropDown] = useState(false)
    const location = useLocation();

    return (
        <div className='bg-white h-13 flex justify-between py-1 px-5 xl:px-50 fixed top-0 w-full z-1000'>
            <div className='flex gap-2 items-center '>
                <Link to={'/feed'}>
                    <img className='w-30 h-30' src={'/aluminiverse.png'} alt="logo" />
                </Link>
                <div className='relative'>

                    <input type="text" className='searchInput w-70 bg-gray-100 rounded-sm px-4 ' placeholder='search' />
                    {
                        dropdown && <div className='absolute w-88 left-0 bg-gray-200 '>
                            <div className='flex  border-b-1 gap-2 items-center cursor-pointer '>

                                <div>  <img className='w-10 h-10 rounded-full ' src="./aluminiverse.png" alt="" /></div>
                                <div>saad</div>
                            </div>



                        </div>
                    }
                </div>

            </div>
            <div className='hidden gap-10 md:flex'>
                <Link to={'/feed'} className='flex flex-col items-center cursor-pointer '>

                    <HomeIcon sx={{ color: location.pathname === '/feed' ? 'black' : 'gray' }} />
                    <div className={`text-sm ${location.pathname === '/feed' ? 'border-b-3' : ''
                        }`}>Home</div>
                </Link>
                <Link to={'/connection'} className='flex flex-col items-center cursor-pointer '>

                    <GroupIcon sx={{ color: location.pathname === '/connection' ? 'black' : 'gray' }} />
                    <div className={`text-sm ${location.pathname === '/connection' ? 'border-b-3' : ''
                        }`}>Connection</div>
                </Link>
                <Link to={'/work'} className='flex flex-col items-center cursor-pointer '>

                    <WorkIcon sx={{ color: location.pathname === '/work' ? 'black' : 'gray' }} />
                    <div className={`text-sm ${location.pathname === '/work' ? 'border-b-3' : ''
                        }`}>Work</div>
                </Link >
                <Link to={'/messages'} className='flex flex-col items-center cursor-pointer '>

                    <MessageIcon sx={{ color: location.pathname === '/messages' ? 'black' : 'gray' }} />
                    <div className={`text-sm ${location.pathname === '/messages' ? 'border-b-3' : ''
                        }`}>Messages</div>
                </Link>
                <Link to={'/notifications'} className="flex flex-col items-center cursor-pointer">
                    <div> <NotificationsIcon
                        sx={{ color: location.pathname === '/notifications' ? 'black' : 'gray' }}
                    /> <span className='p-1 rounded-full text-sm bg-red-700 text-white'>1</span></div>
                    <div
                        className={`text-sm ${location.pathname === '/notifications' ? 'border-b-3' : ''
                            }`}
                    >
                        Notification
                    </div>
                </Link>

                <Link to={`/profile/idofuser`} className='flex flex-col items-center cursor-pointer '>

                    <img src="/collegefrontpage.jpg" alt="acc pfp" className='w-5 h-8 rounded-full' />
                    <div className={`text-sm ${location.pathname === '/profile/idofuser' ? 'border-b-3' : ''
                        }`}>Me</div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar2
