import React from 'react'
import s from './index.module.css'

export default function AddCommentForm() {

  return (
    <form>
      <input type='text' name='comment' placeholder='Type your comment' />
      <button>Add comment</button>
    </form>
  )
}