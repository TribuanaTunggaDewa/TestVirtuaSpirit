import * as types from '../type'

const initialState = {
    posts : [],
    error : false,
    isLoading: true
}

const posts = (state = initialState, action) => {
    switch(action.type){
        case `${types.GET_POSTS}_PENDING`:
            return{
                ...state,
                isLoading: true
            }
        case `${types.GET_POSTS}_FULFILLED`:
            return{
                ...state,
                posts: action.payload.data,
                isLoading: false
            }
        case `${types.GET_POSTS}_REJECTED`:
            return{
                ...state,
                error: true,
                isLoading: flase
            }
        default:
            return{
                ...state
            }
    }
}

export default posts