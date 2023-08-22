import React from 'react'

interface ButtonProps{
    buttonFunction:()=>void;
    title:string;
    styleClass:string;
}

const Button = ({buttonFunction,title,styleClass}:ButtonProps) => {
  return (
    <button onClick={buttonFunction} className={`${styleClass}`}>
        {title}
    </button>
  )
}

export default Button