import http from '../../api/http'
import { formHeaders } from '../../utils'
import * as types from '../mutation-types'

const state = {
  // 轮播项
  swipeItem: []
}

const actions = {
  fetchHomeSwipe({ commit }) {
    return (
      http.get('http://news-at.zhihu.com/api/3/news/hot')
        .then(res => {
          console.log('hahah')
          commit(types.FETCH_HOME_SWIPE, res.data)
        })
    )
  }
}


const mutations = {
  [types.FETCH_HOME_SWIPE] (state, data) {
    // 提取需要的数据
    state.swipeItem = data.recent
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
