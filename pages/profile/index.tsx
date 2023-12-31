import IsAuthenticated from "@/Utils/isAuthenticated";
import AboutMe from "@/components/About/AboutMe";
import Category from "@/components/Category/Category";
import MyBlogs from "@/components/MyBlogs/MyBlogs";
import Nav from "@/components/Profile/Nav";
import Login from "@/components/User/Login";
import Layout from "@/layouts/Layout";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import data from '@/data.json'
import { useRouter } from "next/router";
import Button from "@/Utils/Button";
import { useStore } from "@/store/store";


const index = () => {
  const {me,user} = useStore((state)=>state)
  const following = ["name a","name b", "name c", "name c"]
  const categories = ['Category1','Category 2','Category 3']
  const aboutMe = " simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambledit to make a type specimen book. It has survived not only fivecenturies, but"

  const [isSubscribe,setIsSubscribe] = useState(false)
  const tags = ['tag1','tag2','tag3']
  const router = useRouter()
  

  const subscribe = () =>{
    setIsSubscribe(!isSubscribe)
  }
  




  return (
    <IsAuthenticated>
      <Layout>
        <div className=" md:flex p-1 w-[90%] mx-auto mt-4 md:w-[90%] md:mt-4 md:mx-auto   md:p-2 md:gap-10 border-2 shadow-md rounded-md">
          <Nav />

          <div className="flex gap-4 flex-wrap  md:block   md:p-2 w-[35%] md:h-[500px] rounded-md">
            <img
              className="border-rose-100 border-4 shadow-md rounded-lg md:w-[200px]"
              src="https://avatars.githubusercontent.com/u/31980836?v=4?s=400"
              alt="Avatar"
            />
            <div>
              <Button buttonFunction={subscribe} title={isSubscribe ?"Subscribed":"Subscribe"} styleClass={isSubscribe ? 'bg-green-400 px-1':'bg-rose-200 px-1'} />
            </div>
            <div className="mt-4 flex gap-5 w-full md:block">
              <div className="flex gap-2">
              <h1>{user?.name}</h1>
              <h1>facebook.com</h1>
              </div>
              <div className="flex gap-2">
                <h1> {user?.email}</h1>
                <h1> @zubaerr80</h1>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <Button buttonFunction={()=>router.push(`/followers?followers=${user?.followers}`)} title={`followers ${user?.followers?.length}`} styleClass="bg-rose-100 px-2 text-gray-500" />
              <Button buttonFunction={()=>router.push(`/following?following=${user?.following}`)} title={`following ${user?.following?.length}`} styleClass="bg-rose-100 px-2 text-gray-500" />
             
            </div>
            <div>
              <Category categories={categories} />
            </div>
          </div>
          <div className="md:w-[40%] mt-4  h-full md:bg-gray-100 p-2 rounded-md">
            <AboutMe aboutMe={aboutMe} tags={tags} />
          </div>

          
        </div>
        <div className="flex flex-wrap gap-2 w-[90%] rounded-md p-1 bg-gray-100 mx-auto mt-4 ">
            <MyBlogs data={data} />

        </div>
      </Layout>
    </IsAuthenticated>
  );
};

export default index;
