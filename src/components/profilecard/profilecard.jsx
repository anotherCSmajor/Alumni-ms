import React, { memo } from 'react'
import Card from "../card/card";

const Profilecard = memo(() => {
  return (
    <Card padding={0}>
      {/* Cover Section */}
      <div className="relative h-28">
        <img
          src="https://images.unsplash.com/photo-1689961645318-366c374f6b05?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Cover background"
          className="rounded-t-2xl h-full w-full object-cover"
          loading="lazy"
        />

        {/* Profile Picture */}
        <div className="absolute -bottom-8 left-6 z-10">
          <img
            src="https://images.pexels.com/photos/25724429/pexels-photo-25724429.jpeg"
            alt="Profile"
            className="rounded-full border-4 border-white/60 shadow-lg h-20 w-20 
                       cursor-pointer object-cover backdrop-blur-md 
                       hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="pt-12 pb-6 px-6 bg-white/30 backdrop-blur-xl 
                      border-t border-white/40 rounded-b-2xl shadow-sm">
        <div className="text-lg font-semibold text-gray-900">Saad Halim</div>
        <div className="text-sm text-gray-600">@Microsoft Software Eng</div>
        <div className="text-sm text-gray-500 mt-1">Saharsa, Bihar</div>
        <div className="text-xs text-gray-400 mt-1 tracking-wide">
          CSE-DS-2024
        </div>
      </div>
    </Card>
  )
})

Profilecard.displayName = 'Profilecard'

export default Profilecard
