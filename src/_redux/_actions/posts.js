import axios from 'axios'
import { domain } from '../../config'
import * as types from '../type'

export const getPosts = () => {
    return {
        type: types.GET_POSTS,
        payload: axios.get(`${domain}/posts`)
    }
}
