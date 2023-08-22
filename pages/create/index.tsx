import IsAuthenticated from "@/Utils/isAuthenticated";
import Nav from "@/components/Profile/Nav";
import Layout from "@/layouts/Layout";
import InputModel from "@/model/InputModel";
import React, { useState } from "react";

const index = () => {
  const [blog, setBlog] = useState("");
  const [blogs, setBlogs] = useState<String>("");
  const [category, setCategory] = useState<String>("");
  const [tag, setTag] = useState<String>("");
  const [image,setImage] = useState('')

  const [categoryOpen, setCategoryOPen] = useState(false);
  const [tagOpen, setTagOpen] = useState(false);

  const categories = ["Category", "category1", "category2"];
  const tags = ["Tag", "tag1", "tag2"];
  const submitPost = () => {
    console.log(blog, category, tag);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files[0]){
      const image = URL.createObjectURL(e.target.files[0])
      setImage(image)
      
      
    }
    
  };
  const handleOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };
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
              <input onChange={handleChange} type="file" />
              <img src={image} alt="Image" className="h-[100px] w-[100px]" />
            </div>
            <div className="ml-[30%] mt-8 border-2 w-[80%] p-1 flex align-middle justify-between">
              <select
                name=""
                id=""
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((category, i) => (
                  <option key={i} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <button
                onClick={() => setCategoryOPen(true)}
                className="bg-rose-400 p-1 rounded-md text-white"
              >
                Create Category
              </button>
            </div>

            <div className="ml-[30%] mt-8 border-2 w-[80%] p-1 flex align-middle justify-between">
              <select onChange={(e) => setTag(e.target.value)} name="" id="">
                {tags.map((tag, i) => (
                  <option key={i} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
              <button onClick={()=>setTagOpen(true)} className="bg-rose-400 p-1 rounded-md text-white">
                Create Tag
              </button>
            </div>
            <div className="mx-auto w-[100%]">
              <textarea
                defaultValue={blog}
                onChange={(e) => setBlog(e.target.value)}
                className="border-2 w-[80%]  h-[400px] mt-4 mx-auto  md:ml-[30%] ml-[20%] "
              />

              <button
                onClick={submitPost}
                className="w-[40%] bg-rose-400 mx-[30%] p-1 text-white font-bold rounded-md"
              >
                {" "}
                Post
              </button>
            </div>
          </div>
          {categoryOpen && (
            <div className="bg-slate-200 h-[100px] w-[400px] rounded-md shadow-md z-10 absolute right-[28%] top-[15%]">
              <InputModel stateSet={setCategoryOPen} inputText="category" />
            </div>
          )}

          {tagOpen && (
            <div className="bg-slate-200 h-[100px] w-[400px] rounded-md shadow-md z-10 absolute right-[28%] top-[25%]">
              <InputModel stateSet={setTagOpen} inputText="tag" />
            </div>
          )}
        </div>
      </IsAuthenticated>
    </Layout>
  );
};

export default index;
