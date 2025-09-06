import React from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
    return (
        <nav className="w-[100%] bg-gray-100 md:px [100px] px-[20px] flex justify-between py-4 box-border">
            <Link to={'/signup'} className="flex justify-between">
                <div className="flex gap-0 items-center cursor-pointer">
                    <h3 className="text-black-800 font-bold text-3xl">Alumni <br /> verse</h3>
                    <img
                        src="/aluminiverse.png"
                        alt="logo"
                        className="w-30 h-30"
                    />
                </div>

            </Link>
            <div className="flex box-border md:gap-4 gap-2 justify-end items-center">

                <Link to={'/signup'} className="md:px-4 md:py-2 box-border text-black rounded-3xl text-xl hover:bg-gray-200 cursor-pointer border-2">Join Now</Link>
                 <Link to={'/login'} className="md:px-4 md:py-2 box-border text-blue-800 rounded-3xl text-xl hover:bg-blue-200 cursor-pointer border-2 ">Log In
                </Link>
                
            </div>
        </nav>
    )
}

export default Navbar1