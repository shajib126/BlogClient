import React from "react";
interface Props {
    categories:string[]
} 

const Category:React.FC<Props> = ({categories}) => {
    console.log(categories);
    
  return (
    <>
      <h1 className="text-xl text-gray-500 mt-4 font-bold border-dotted border-b-2 border-gray-300 p-1 mb-4">
        Categories
      </h1>
      <div className="flex gap-4 md:block">
        {categories.map((category,i)=>(
             <button key={i} className="bg-rose-100 px-2 rounded-md text-gray-500 md:m-2">
                {category}
             </button>
        ))}
       
      </div>
    </>
  );
};

export default Category;
