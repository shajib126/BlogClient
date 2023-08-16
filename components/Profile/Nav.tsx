import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className="flex gap-4 text-rose-500 mb-4 md:flex-col md:w-[15%]  md:text-black  md:px-2 md:mt-4  md:bg-gray-100">
    <Link className='md:mb-4 md:border-b-2 md:hover:text-rose-300' href="/general">General</Link>
    <Link className='md:mb-4 md:border-b-2 md:hover:text-rose-300' href="/create">Create Blog</Link>
    <Link className='md:mb-4 md:border-b-2 md:hover:text-rose-300' href="/followers">Followers</Link>
    <Link className='md:mb-4 md:border-b-2 md:hover:text-rose-300' href="/following">Following</Link>
    <Link className='md:mb-4 md:border-b-2 md:hover:text-rose-300' href="/saved">Saved Blog</Link>
  </nav>
  )
}

export default Nav