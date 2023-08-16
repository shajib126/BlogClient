import React from 'react'
interface Props{
    aboutMe:String,
    tags:String[]
}

const AboutMe:React.FC<Props> = ({aboutMe,tags}) => {
    
    
    
  return (
    <>
         <h1 className="text-xl text-gray-500 mb-2 font-bold border-dotted border-b-2 border-gray-300 p-1">About Me</h1>
            <p className="text-gray-500">
              {aboutMe}
            </p>
            <div className="mt-4">
              <h1 className="text-xl text-gray-500 font-bold border-dashed border-b-2 border-gray-300 p-1">My Tags</h1>
              <div className="flex gap-4">
                {tags.map((tag,i)=>(
                      <button key={i} className="bg-rose-100 px-2 mt-2 rounded-md text-gray-500">{tag}</button>
                ))}
            
             
              </div>
            </div>
    </>
  )
}

export default AboutMe