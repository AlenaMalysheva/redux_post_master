import { createStore , combineReducers } from 'redux';
import { postsReducer } from './reducers/postsReducer';
import { commentsReducer } from './reducers/commentsReducer'

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer
});


export const store  = createStore(rootReducer);