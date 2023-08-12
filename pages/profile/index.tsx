import Login from '@/components/User/Login'
import Layout from '@/layouts/Layout'
import React from 'react'

const index = () => {
  const token = false
  if(!token){
    return (<Layout><Login/></Layout>)
  }
  return (
    <div>Profile</div>
  )
}

export default index