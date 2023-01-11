import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux';
import { changeLike, deletePost } from '../../store/reducers/postsReducer';
import { CloseOutlined } from '@ant-design/icons'
import CommentsContainer from '../CommentsContainer';

export default function Post({ id, title, text, like , comments }) {

  const like_text = like ? 'Liked' : 'Like?';
  const like_style = [s.like_btn, like ? s.like_btn_active : ''].join(' ');

  const dispatch = useDispatch();

  return (
    <div className={s.post_item}>
      <CloseOutlined 
        className={s.cross_icon}
        onClick={() => dispatch(deletePost(id))} 
      />
      <p className={s.post_title}>{ title }</p>
      <p className={s.post_text}>{ text }</p>
      <p 
        className={like_style}
        onClick={() => dispatch(changeLike(id))}
      >
        { like_text }
      </p>
      <CommentsContainer comments={comments} post_id={id}/>
  </div>
  )
}