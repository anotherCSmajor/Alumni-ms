import React, { memo } from 'react'

const Card = memo(({ children, padding, className = '' }) => {
  return (
    <div className={`w-full h-full flex flex-col border border-gray-300 rounded-md ${padding ? 'p-5' : 'p-0'} ${className}`}>
      {children}
    </div>
  )
})

Card.displayName = 'Card'

export default Card
