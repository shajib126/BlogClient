import React from 'react'

import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="navbar bg-rose-100 shadow-md">
  <div className="flex-1">
    <Link href="/" className="btn btn-ghost normal-case text-xl">My Blog</Link>
  </div>
  <div className="flex-none">
    
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://avatars.githubusercontent.com/u/31980836?v=4?s=400" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          
          <Link href="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
         
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar