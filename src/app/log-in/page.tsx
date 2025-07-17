'use client'

import LoginForm from '@/components/custom_components/LogIn'
import React from 'react'

const LogIn = () => {
  return (
    <div className='flex justify-center items-center h-screen px-4 bg-black backdrop-blur-sm'>
        <LoginForm />
    </div>
  )
}

export default LogIn