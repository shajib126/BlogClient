import React from 'react'
interface CommentProps{
    setOpenComment:any
}

const Comment = ({setOpenComment}:CommentProps) => {
    const close = ()=>{
        setOpenComment(false)
    }
  return (
    <div>Comment <span onClick={close}> x</span></div>
  )
}

export default Comment