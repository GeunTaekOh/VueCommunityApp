import api from '@/api'
import {
  FETCH_POST_LIST,
  FETCH_POST
} from './mutations-types'

export default {
  fetchPostList ({commit}) {
    return api.get('/posts')
      .then((res) => {
        console.log('taek actions success')
        commit(FETCH_POST_LIST, res.data)
      }).catch((err) => {
        console.log('taek actions fail')
        console.log(err)
      })
  },
  fetchPost ({ commit }, postId) {
    return api.get('/posts/' + postId)
      .then(res => {
        commit(FETCH_POST, res.data)
      })
  }
}
