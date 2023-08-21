import React from "react";

interface categoryProps{
    setCategoryOpen:boolean
}

const InputModel = ({setCategoryOpen}:categoryProps) => {
    const createCategory = ()=>{
        setCategoryOpen(false)
    }
    
  return (
    
      <form className="flex gap-4 w-[80%] mx-auto mt-4">
        <input className="border-2 w-[100%] p-2" type="text" placeholder="category" />
        <button onClick={createCategory}  className="text-l rounded-md font-bold border-2 px-2 bg-rose-400 text-white cursor-pointer">Create</button>
      </form>
    
  );
};

export default InputModel;
