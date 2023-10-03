import axios from 'axios'
import { create } from 'zustand'

type Store = {
    bears:number,
    user:object,
    categories:[],
    tags:[]
    
}
type Action = {
    signUp:(creadential:object)=>{},
    signIn:(creadential:object)=>{},
    me:()=>{
       
    },
    createTag:(tag:object)=>{},
    allCategory:()=>{},
    allTag:()=>{}

}
export const useStore = create<Store & Action>((set) => ({
  bears: 0,
  user:{},
  categories:[],
  tags:[],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  signUp:async(creadential:object)=>{
    const user = await axios.post('http://localhost:5000/user/signUp',creadential)
    await set({user:user.data})
    
    
  },
  signIn:async(creadential:object)=>{
    console.log(creadential);
    
    try {
        const userdata = await axios.post('http://localhost:5000/user/signin',creadential)
         localStorage.setItem('token',userdata.data.token)
       alert('Signed In')
        
    } catch (error) {
        console.log(error);
        
    }
   
    
    
  },
  me:async()=>{
    
    
    try {
      const userD = await axios.get('http://localhost:5000/user/me',{
        headers:{
          token:localStorage.getItem('token')
        }
      })
        
        
       set({user:userD.data.user})
      
      
    } catch (error) {
      console.log(error);
      
    }
  
   
  
    
   
  },

  createBlog:async()=>{
    try {
      
      
    } catch (error) {
      
    }
  },
  createTag:async(tag:object)=>{
    try {
      const tagdata = await axios.post('http://localhost:5000/tag/create',tag,{
        headers:{
          token:localStorage.getItem('token')
        }
      })
    } catch (error) {
      console.log(error);
      
    }
  },
  allCategory:async()=>{
    try {
      const category = await axios.get('http://localhost:5000/category',{
        headers:{
          token:localStorage.getItem('token')
        }
      })
      set({categories:category.data.categories})
      console.log(category);
      
    } catch (error) {
      console.log(error);
      
    }
  },
  allTag:async()=>{
    try {
      const tag = await axios.get('http://localhost:5000/tag',{
        headers:{
          token:localStorage.getItem('token')
        }
      })
      set({tags:tag.data.tags})
      console.log(tag);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  
  
}))