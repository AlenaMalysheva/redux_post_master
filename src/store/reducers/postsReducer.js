import { posts_data } from "../../data/posts";

const defaultState = posts_data;

const CHANGE_LIKE = 'CHANGE_LIKE';
const DELETE_POST = 'DELETE_POST';
const ADD_POST = 'ADD_POST';

export const changeLike = payload => ({ type: CHANGE_LIKE, payload })
export const deletePost = payload => ({ type: DELETE_POST, payload })
export const addPost = payload => ({ type: ADD_POST, payload })

export const postsReducer = (state = defaultState, action) => {
  if (action.type === CHANGE_LIKE){
    const target_post = state.find(el => el.id === action.payload);
    target_post.like = !target_post.like
    return [...state]
  } else if(action.type === DELETE_POST) {
    return state.filter(el => el.id !== action.payload)
  } else if(action.type === ADD_POST) {
    return [...state, {
      id: Date.now(),
      like: false,
      comments: [],
      ...action.payload
    }]
  } else {
    return state
  }
}