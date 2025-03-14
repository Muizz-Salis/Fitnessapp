import Receipenavbar from '@/components/Receipenavbar'
import React from 'react'
import Reviews from '@/components/Reviews'

const page = () => {
  return (
    <div>
        <Receipenavbar/>
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] h-px bg-gradient-to-r from-orange-500/20 via-orange-500 to-orange-500/20 shadow-[0_0_5px_0_rgba(255,138,0,0.3)]" />
        <Reviews />
    </div>
  )
}

export default page