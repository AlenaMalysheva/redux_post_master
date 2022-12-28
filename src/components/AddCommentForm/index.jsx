import React from 'react'

export default function AddCommentForm() {
  return (
    <form>
        <input type="text" placeholder='your comment' name='comment'/>
        <button>Add comment</button>
    </form>
  )
}
