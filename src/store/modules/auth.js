/* eslint-disable no-console */
const state = {
  token: '',
  expires_in: 0,
  userInfo: {}
}

const mutations = {
  SET_TOKEN (state, token) {
    state.token = token
  },
  SET_REMOVE_TOKEN (state) {
    state.token = ''
  },
  SET_EXPIRES_IN (state, expire) {
    state.expires_in = expire
  },
  SET_USER_INFO (state, data) {
    state.userInfo = data
  }
}

const actions = {
  GET_TOKEN ({ commit }, token) {
    commit('SET_TOKEN', token)
  },
  GET_EXPIRES_IN ({ commit }, expire) {
    commit('SET_EXPIRES_IN', expire)
  },
  GET_USER_INFO ({ commit }, data) {
    commit('SET_USER_INFO', data)
  }
}

const getters = {
  token: state => {
    return state.token
  },
  expire: state => {
    return state.expires_in
  },
  info: state => {
    return state.userInfo
  }
}

export default { namespaced: true, state, mutations, actions, getters }
