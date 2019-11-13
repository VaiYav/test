import * as types from '../types'
import { fetchData } from '@/api'
import { objectWithoutProperties } from '@/utils'

const app = {
  namespaced: true,
  state: {
    users: [],
    pagination: {
      page: 1,
      per_page: 10,
      total: 100,
      total_pages: 1
    },
    loader: false
  },
  getters: {
    data: state => type => state[type],
    pagination: state => state.pagination,
    loader: state => state.loader
  },
  actions: {
    toggleLoader: ({ commit }, payload) => {
      commit(types.TOGGLE_LOADER, payload)
    },
    setPagination({ commit }, payload) {
      commit(types.SET_PAGINATION, objectWithoutProperties(payload, 'data'))
    },
    fetchData({ commit, dispatch }, payload) {
      fetchData(payload)
        .then(res => {
          commit(types.SAVE_DATA, { type: payload.query, data: res.data.data })
          dispatch('setPagination', res.data)
        })
        .finally(() => {
          dispatch('toggleLoader', false)
        })
    }
  },
  mutations: {
    [types.SAVE_DATA](state, payload) {
      state[payload.type] = payload.data
    },
    [types.TOGGLE_LOADER](state, payload) {
      state.loader = payload
    },
    [types.SET_PAGINATION](state, payload) {
      state.pagination = payload
    }
  }
}

export default app
