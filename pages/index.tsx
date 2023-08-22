import Layout from "@/layouts/Layout";
import data from "../data.json";
import Image from "next/image";
import Button from "@/Utils/Button";
import { useState } from "react";
import Comment from "@/components/Comment/Comment";

export default function Home() {
  const [openComment,setOpenComment] = useState(false)

  return (
    <Layout>
      <div className="card w-[60%] mx-auto mt-4  bg-base-100 shadow-xl">
        {data.map((blog, i) => (
          <div key={i} className="card-body border-b-2">
            <h2 className="card-title">{blog.title}</h2>
            <div className="w-[100%] flex justify-end">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1m6 0v3H6V2M5 5h8m-8 5h8m-8 4h8"
                />
              </svg>
            </div>
            <figure>
              <Image
                className="w-full h-[500px]"
                width={500}
                height={0}
                src={blog.image}
                alt={blog.title}
              />
            </figure>
            <div>
              <svg
                onClick={()=>setOpenComment(true)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>

            </div>

            <div>
              {
                openComment && <Comment setOpenComment={setOpenComment} />
              }
              
            </div>
            <div className="flex">
              <p>
                <span className="font-bold ">Author:</span>{" "}
                <span className="text-rose-300 "> Abu zubaer</span>
              </p>
              <div className="flex gap-2 ">
                {blog.tags.map((tag, i) => (
                  <button
                    className="bg-rose-400 px-2 text-white rounded-sm shadow-lg "
                    key={i}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <p>
              {blog.description.substring(0, 400)}{" "}
              <button className="text text-green-200">Read more</button>{" "}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
