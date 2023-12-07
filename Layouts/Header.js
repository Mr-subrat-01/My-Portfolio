"use client"
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <>
      <div className='top-bar bg-indigo-500 bg-opacity-30 flex mt-2 mx-3  p-3 text-white justify-between rounded-md '>
        <Link  href={"/"}>Logo</Link>
        <div>
          <Link className='p-2' href={"/"}>Projects</Link>
          <Link className='p-2' href={"/"}>Skills</Link>
          <Link className='p-2' href={"/"}>Contact</Link>
        </div>
      </div>
      </>
  )
}

export default Header
