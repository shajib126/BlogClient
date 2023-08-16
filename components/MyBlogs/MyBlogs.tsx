import React, { useState } from "react";
import Image from "next/image";
interface Blogs {
  title: String;
  description: String;
  image: string;
  tags: string[];
}
interface ChildComponentProps {
  data: Blogs[];
}

const MyBlogs: React.FC<ChildComponentProps> = ({ data }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      {data.map((dataItem, i) => (
        <div className="border-2 w-[45%] p-2 md:w-[20%] mb-2" key={i}>
          <h1>{dataItem.title}</h1>
          <img className="w-[100%] mb-3" src={dataItem.image} alt="" />
          <p>
            {
               dataItem.description.substring(0, 100)}{" "}
            <span onClick={() => setReadMore(true)}>Read more</span>
          </p>
          <div className="flex gap-2 mt-2">
            {dataItem.tags.map((tag, i) => (
              <button className="bg-rose-100 px-2 text-gray-500" key={i}>
                {tag}
              </button>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default MyBlogs;
