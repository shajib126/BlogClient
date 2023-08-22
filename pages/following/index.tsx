import IsAuthenticated from '@/Utils/isAuthenticated'
import Layout from '@/layouts/Layout'
import { useRouter } from 'next/router'
import React from 'react'

const Following = () => {
  const navigate = useRouter()
  const following = Array(navigate.query.following)
 console.log(following);
 
  
  
  return (
    <Layout>
      <IsAuthenticated>
        <div>
          {following.map((f)=> <h1>{f}</h1>)}
        </div>
      </IsAuthenticated>
    </Layout>
  )
}

export default Following