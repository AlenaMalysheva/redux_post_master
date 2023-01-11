import React from 'react'
import AddCommentForm from '../AddCommentForm'
import Comment from '../Comment'

export default function CommentsContainer({comments,post_id}) { // comments получили через пропсы из post,а в post из data

  return (
    <div>
     
     {
      comments.map(el => <Comment key={el.id} {...el}/>)
     }
      <AddCommentForm post_id={post_id}/>
    </div>
  )
}