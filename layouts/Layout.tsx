import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
        <h1>Header</h1>
        <main>{children}</main>
        <footer>Footer</footer>
    </>
  )
}

export default Layout