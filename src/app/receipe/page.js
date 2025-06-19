import Footer from '@/components/Footer'
import Recipe from '@/components/Receipe'
import Receipefooter from '@/components/Receipefooter'
import Receipenavbar from '@/components/Receipenavbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Receipenavbar />
      <Recipe/>
      <Receipefooter/>
    </div>
  )
}

export default page