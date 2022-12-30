import React from 'react'
import AddPostForm from '../AddPostForm'
import { useSelector } from 'react-redux'
import Post from '../Post'

export default function PostsContainer() {

const state = useSelector(state => state.posts)

  return (
    <div>
        <AddPostForm />
        <div>
            {
                state.map(el => <Post {...el} key={el.id}/>)
            }
        </div>
    </div>
  )
}
