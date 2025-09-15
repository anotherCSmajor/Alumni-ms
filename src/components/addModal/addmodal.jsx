import React, { memo, useCallback, useState } from 'react'
import ImageIcon from '@mui/icons-material/Image';

const Addmodal = memo(() => {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = useCallback((e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(URL.createObjectURL(file))
    }
  }, [])

  const handlePost = useCallback(() => {
    // Handle post logic here
    console.log('Posting...')
  }, [])

  return (
    <div className='space-y-4'>
      <div className='flex gap-4 items-center'>
        <div className='relative'>
          <img 
            src="/collegefrontpage.jpg" 
            className='w-15 h-15 rounded-full object-cover' 
            alt="Profile" 
            loading="lazy"
          />
        </div>
        <div className='text-2xl'>Saad</div>
      </div>
      <div>
        <textarea 
          cols={50} 
          rows={5} 
          className='my-3 outline-0 text-xl p-2 w-full resize-none' 
          placeholder='what do you wanna talk about' 
        />
      </div>
      {selectedFile && (
        <div>
          <img 
            src={selectedFile} 
            className='w-20 h-20 rounded-2xl object-cover' 
            alt="Selected" 
          />
        </div>
      )}
      <div className='flex justify-between items-center'>
        <div className='my-6'>
          <label className='cursor-pointer hover:bg-gray-100 rounded-full p-2' htmlFor="inputFile">
            <ImageIcon/>
          </label>
          <input 
            type="file" 
            className='hidden' 
            id='inputFile'
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
        <button 
          onClick={handlePost}
          className='bg-blue-950 text-white py-1 h-fit px-3 cursor-pointer rounded-2xl hover:bg-blue-900 transition-colors'
        >
          Post
        </button>
      </div>
    </div>
  )
})

Addmodal.displayName = 'Addmodal'

export default Addmodal
