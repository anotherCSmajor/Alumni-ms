import React, { memo, useCallback } from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Modal = memo(({ title, closeModal, children }) => {
  const handleClose = useCallback(() => {
    closeModal()
  }, [closeModal])

  return (
    <div className='bg-black/50 fixed inset-0 z-20 flex justify-center items-center'>
      <div className='w-[95%] md:w-1/2 h-[500px] bg-white rounded-xl p-10 shadow-lg'>
        <div className='flex justify-between'> 
          <div className='flex gap-4 items-center'>
            <div className='text-2xl'>{title}</div>
          </div>
          <button onClick={handleClose} className='cursor-pointer hover:bg-gray-100 rounded-full p-1'>
            <CloseIcon />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
})

Modal.displayName = 'Modal'

export default Modal
