import React, { useState, memo, useCallback } from 'react'
import './Navbar2.css'
import HomeIcon from '@mui/icons-material/HomeOutlined';
import GroupIcon from '@mui/icons-material/PeopleAltOutlined';
import WorkIcon from '@mui/icons-material/WorkOutline';
import MessageIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import { useLocation, Link } from "react-router-dom";
import { useNavbar } from '../../contexts/NavbarContext';

const Navbar2 = memo(() => {
    const [dropdown, setDropDown] = useState(false)
    const location = useLocation();
    const { isOpen, isMobile, closeNavbar } = useNavbar();

    const handleMobileClose = useCallback(() => {
        if (isMobile) closeNavbar()
    }, [isMobile, closeNavbar])

    const toggleDropdown = useCallback(() => {
        setDropDown(prev => !prev)
    }, [])

    const linkClasses = (path) =>
        `flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200
        ${location.pathname === path
            ? "bg-gray-100 font-semibold text-black"
            : "text-gray-600 hover:bg-gray-50 hover:text-black"
        }`

    return (
        <>
            {/* Mobile Overlay */}
            {isMobile && isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={closeNavbar}
                />
            )}
            
            {/* Navbar */}
            <div className={`
                bg-white fixed left-0 top-0 h-full flex flex-col py-6 px-4 z-50
                transition-transform duration-300 ease-in-out
                ${isOpen ? 'w-64' : 'w-0 -translate-x-full'}
                ${isMobile ? 'shadow-xl' : 'shadow-md'}
                overflow-hidden
            `}>

                {/* Logo + Search */}
                <div className="flex flex-col gap-6">
                    <Link to={'/feed'} onClick={handleMobileClose}>
                        <img 
                            className="w-24 h-24 object-contain mx-auto" 
                            src={'/aluminiverse.png'} 
                            alt="logo" 
                            loading="eager"
                        />
                    </Link>

                    <div className="relative">
                        <input
                            type="text"
                            className="searchInput w-full bg-gray-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                            placeholder="Search"
                        />
                        {dropdown && (
                            <div className="absolute w-full left-0 bg-white shadow-md rounded-xl mt-2">
                                <div className="flex border-b gap-2 items-center cursor-pointer p-2 hover:bg-gray-50">
                                    <img 
                                        className="w-10 h-10 rounded-full object-cover" 
                                        src="./aluminiverse.png" 
                                        alt="User" 
                                        loading="lazy"
                                    />
                                    <div className="text-sm">Saad</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-2 mt-6">

                    <Link to={'/feed'} className={linkClasses('/feed')} onClick={handleMobileClose}>
                        <HomeIcon fontSize="small" />
                        <span>Home</span>
                    </Link>

                    <Link to={'/connection'} className={linkClasses('/connection')} onClick={handleMobileClose}>
                        <GroupIcon fontSize="small" />
                        <span>Friends</span>
                    </Link>

                    <Link to={'/work'} className={linkClasses('/work')} onClick={handleMobileClose}>
                        <WorkIcon fontSize="small" />
                        <span>Work</span>
                    </Link>

                    <Link to={'/messages'} className={linkClasses('/messages')} onClick={handleMobileClose}>
                        <MessageIcon fontSize="small" />
                        <span>Messages</span>
                    </Link>

                    <Link to={'/notifications'} className={linkClasses('/notifications')} onClick={handleMobileClose}>
                        <div className="relative flex items-center gap-3">
                            <NotificationsIcon fontSize="small" />
                            <span>Notifications</span>
                            <span className="absolute -right-2 -top-2 px-1.5 py-0.5 text-[10px] rounded-full bg-red-600 text-white">
                                1
                            </span>
                        </div>
                    </Link>

                    {/* Profile pinned to bottom */}
                    <Link to={`/profile/idofuser`} className={`${linkClasses('/profile/idofuser')} mt-auto`} onClick={handleMobileClose}>
                        <img 
                            src="/collegefrontpage.jpg" 
                            alt="Profile" 
                            className="w-8 h-8 rounded-full object-cover" 
                            loading="lazy"
                        />
                        <span>Me</span>
                    </Link>
                </div>
            </div>
        </>
    )
})

Navbar2.displayName = 'Navbar2'

export default Navbar2
