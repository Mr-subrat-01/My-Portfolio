"use client"
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <div className='absolute bottom-0 w-full'>

        <div className='bottom-bar bg-indigo-500 bg-opacity-30 flex mb-2 mx-3  p-3 text-white justify-around rounded-md'>
          
            <Link className='' href={"/"}>Projects</Link>
            <Link className='' href={"/"}>Skills</Link>
            <Link className='' href={"/"}>About</Link>
            <Link className='' href={"/"}>Contact</Link>
         
        </div>
      </div>
      </>
  )
}

export default Header
