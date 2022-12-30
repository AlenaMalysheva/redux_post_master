import { posts_data } from "../../data/posts"

const defaultState = posts_data

const ADD_POST = 'ADD_POST'

//создали action на добавление поста
export const addPost = payload => ({type: ADD_POST, payload})

export const postsReducer = (state = defaultState , action) => {
    if(action.type === ADD_POST) {
        return [...state,{
            id: Date.now(),
            ...action.payload
        }]
    } else {
        return state
    }
}

