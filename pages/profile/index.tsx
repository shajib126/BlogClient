import Login from '@/components/User/Login'
import React from 'react'

const index = () => {
  const token = false
  if(!token){
    return <Login/>
  }
  return (
    <div>Profile</div>
  )
}

export default index