import React from 'react'
import s from './index.module.css'
import { deleteComment } from '../../store/reducers/postsReducer'
import { useDispatch } from 'react-redux'

export default function Comment({id,comment,post_id}) {

const dispatch = useDispatch();

  return (
    <div className={s.comment_item} onClick={() => dispatch(deleteComment({
      post_id,
      comment_id: id
    })) }>
      {comment}
    </div>
  )
}