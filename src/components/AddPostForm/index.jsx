import React from 'react';
import { addPost } from '../../store/reducers/postsReducer';
import { useDispatch} from 'react-redux';
import s from './index.module.css'

export default function AddPostForm() {

    const dispatch = useDispatch();

 

    const submit = (event) => {
        event.preventDefault();
        const { title, text } = event.target;
        dispatch(addPost({
            title: title.value,
            text: text.value
        }))
        title.value = '';
        text.value = '';
    }

  return (
    <form onSubmit={submit} className={s.post_form}>
        <input type="text" placeholder='Title' name='title'/>
        <input type="text" placeholder='Your text' name='text'/>
        <button>Add post</button>
    </form>
  )
}
