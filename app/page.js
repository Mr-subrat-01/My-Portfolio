"use client"
import Link from 'next/link'
import React from 'react'
const page = () => {
  return (
    <>
      <nav>
        <button className='bg-yellow-200 p-4' onClick={() => {
          console.log("click");
        }
       }>Click</button>
      </nav>
    </>
  )
}

export default page
