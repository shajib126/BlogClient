import Login from '@/components/User/Login'
import React from 'react'

const IsAuthenticated = ({children}:{children:React.ReactElement}) => {
    const token = true
    if(!token){
        return <Login/>
    }else{
        return (
            <>
                {children}
            </>
        )
    }
  
}

export default IsAuthenticated