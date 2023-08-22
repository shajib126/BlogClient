import Button from "@/Utils/Button";
import React from "react";
interface InputModelProps{
  stateSet?:any;
  inputText:string;
  
}

const InputModel = ({stateSet,inputText}:InputModelProps) => {
   const create = () =>{
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
