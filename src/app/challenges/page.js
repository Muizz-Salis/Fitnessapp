import Challenges from '@/components/Challenges'
import Navbar from '@/components/Navbar'
import Receipenavbar from '@/components/Receipenavbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Receipenavbar/>
        <Challenges/>
    </div>
  )
}

export default page