import Login from '@/components/User/Login'
import { useStore } from '@/store/store'
import React,{useEffect} from 'react'

const IsAuthenticated = ({children}:{children:React.ReactElement}) => {
   const {me,user} = useStore((state)=>state)
    useEffect(()=>{
        me()
        
      
    },[])
   
    console.log(user);
    
    if(!user.name){
        return <Login/>

    }else
   {
        return (
            <>
                {children}
            </>
        )
    }
  
}

export default IsAuthenticated