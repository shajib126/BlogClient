import Button from "@/Utils/Button";
import { useStore } from "@/store/store";
import React from "react";

interface InputModelProps{
  stateSet?:any;
  inputText:string;
  data:string
  
}

const InputModel = ({stateSet,inputText,data}:InputModelProps) => {
  const {createTag} = useStore((state)=>state)
   const create = () =>{
     
      createTag({tag:data})
      stateSet(false)
   }
    
  return (
    
      <form className="flex gap-4 w-[80%] mx-auto mt-4">
        <input className="border-2 w-[100%] p-2" type="text" placeholder={inputText} />
        <Button buttonFunction={create} title="create" styleClass="bg-rose-400 rounded-md px-2 font-bold text-white" />
      </form>
    
  );
};

export default InputModel;
