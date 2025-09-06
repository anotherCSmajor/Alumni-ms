import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'

const Googlelogincomp = () => {
  const handleOnSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse)
  }

  

  return (
    <div className='w-full'>


      <GoogleLogin
        onSuccess={(credentialResponse) =>handleOnSuccess(credentialResponse)} 
          
        
        onError={() => {
          console.log('Login Failed');
        }}
      />

    </div>
  )
}

export default Googlelogincomp

