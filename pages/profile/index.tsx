import IsAuthenticated from "@/Utils/isAuthenticated";
import Nav from "@/components/Profile/Nav";
import Login from "@/components/User/Login";
import Layout from "@/layouts/Layout";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <IsAuthenticated>
      <Layout>
        <div className=" md:flex p-1 w-[90%] mx-auto mt-4 md:w-[90%] md:mt-4 md:mx-auto   md:p-2 md:gap-10 border-2 shadow-md rounded-md">
          <Nav />

          <div className="flex gap-4 flex-wrap  md:block   md:p-2 w-[35%] md:h-[500px] rounded-md">
            <img
              className="border-rose-300 border-4 shadow-md rounded-md md:w-[200px]"
              src="https://avatars.githubusercontent.com/u/31980836?v=4?s=400"
              alt="Avatar"
            />
            <div className="mt-4 flex gap-5 w-full md:block">
              <div className="flex gap-2">
              <h1>Abu zubaer</h1>
              <h1>facebook.com</h1>
              </div>
              <div className="flex gap-2">
                <h1> shajib@gmail.com</h1>
                <h1> @zubaerr80</h1>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button className="bg-rose-100 px-2 text-gray-500">followers 15k</button>
              <button className="bg-rose-100 px-2 text-gray-500">following 15k</button>
            </div>
            <div>
              <h1 className="text-xl text-black-200 mt-4 font-bold">Categories</h1>
              <div className="flex gap-4 md:block">
                <button className="bg-rose-200 px-2 rounded-md text-gray-500 md:m-2">Category1</button>
                <button className="bg-rose-200 px-2 rounded-md text-gray-500 md:m-2">Category2</button>
                <button className="bg-rose-200 px-2 rounded-md text-gray-500 md:m-2">Category3</button>
              </div>
            </div>
          </div>
          <div className="md:w-[40%] mt-4  h-full md:bg-gray-100 p-2 rounded-md">
            <h1 className="text-xl text-black-200 mb-2 font-bold">About Me</h1>
            <p className="text-gray-500">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but
            </p>
            <div className="mt-4">
              <h1 className="text-xl text-black-200 font-bold">My Tags</h1>
              <div className="flex gap-4">
              <button className="bg-rose-200 px-2 mt-2 rounded-md text-gray-500">tag2</button>
              <button className="bg-rose-200 px-2 mt-2 rounded-md text-gray-500">tag1</button>
              <button className="bg-rose-200 px-2 mt-2 rounded-md text-gray-500">tag3</button>
              </div>
            </div>
          </div>

          
        </div>
        <div className="w-[90%] rounded-md p-1 bg-gray-100 mx-auto mt-4 h-screen">
          My Blogs:

        </div>
      </Layout>
    </IsAuthenticated>
  );
};

export default index;
