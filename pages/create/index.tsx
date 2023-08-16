import IsAuthenticated from "@/Utils/isAuthenticated";
import Nav from "@/components/Profile/Nav";
import Layout from "@/layouts/Layout";
import React, { useState } from "react";


const index = () => {
  const [blog,setBlog] = useState<String>("")
  const [blogs,setBlogs] = useState<String>("")
  const [category,setCategory] = useState<String>("")

  const categories = ["Category","category1","category2"]
  const tags = ["Tag","tag1","tag2"]
  const submitPost = ()=>{
    setBlogs(blog)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setBlog(e?.target?.value);
    
  }
  const handleOption = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setCategory(e.target.value);
    
  }
  console.log(blogs);
  
  return (
    <Layout>
      <IsAuthenticated>
        <div className="md:flex mt-4 w-[90%] mx-auto">
          <Nav />
          <div className="h-screen">
            <h1 className="text-center text-xl font-bold mb-10">Create Blog</h1>
            <div className="flex gap-3">
                <input type="text" />
                <input type="file" />
                <img src="" alt="Image" />
            </div>
            <div className="ml-[30%] mt-8 border-2 w-[80%] p-1 flex align-middle justify-between">
            <select name="" id="" onChange={(e)=>handleOption(e)}>
              {categories.map((category,i)=>(
                  

                  <option key={i} value={category}>{category}</option>
                 
               
              ))}
               </select>
              <button className="bg-rose-400 p-1 rounded-md text-white">Create Category</button>
            </div>
            <div className="ml-[30%] mt-8 border-2 w-[80%] p-1 flex align-middle justify-between">
              <select name="" id="">
                {tags.map((tag,i)=>(
                  <option key={i} value={tag}>{tag}</option>
                ))}
              </select>
              <button className="bg-rose-400 p-1 rounded-md text-white">Create Tag</button>
            </div>
            <div className="mx-auto w-[100%]">
            <textarea onChange={(e)=>handleChange(e)} className="border-2 w-[80%]  h-[400px] mt-4 mx-auto  md:ml-[30%] ml-[20%] ">
              {blog}
            </textarea>
              <button onClick={submitPost} className="w-[40%] bg-rose-400 mx-[30%] p-1 text-white font-bold rounded-md"> Post</button>
            </div>
          </div>
        </div>
      </IsAuthenticated>
    </Layout>
  );
};

export default index;
