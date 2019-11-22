import {createStore, combineReducers, applyMiddleware} from 'redux'
import {logger, promise} from './middleware'

import posts from './_reducers/posts'

const reducers = combineReducers({
    posts
})

const store = createStore(
    reducers,
    applyMiddleware(promise)
)

export default store