import Navbar from '@/components/User/Navbar'
import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Navbar/>
        <main>{children}</main>
        <footer>Footer</footer>
    </div>
  )
}

export default Layout