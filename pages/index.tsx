import Layout from "@/layouts/Layout";
import data from "../data.json";
import Image from "next/image";

export default function Home() {
  console.log(data);

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
