import React from 'react'

const Card = (props) => {
  return (
    <div className={`'w-full h-full flex flex-col border-1 border-gray-300 rounded-md' ${props.padding?'p-5':'p-0'}`}>
      {props.children}
    </div>
  )
}

export default Card
