/* eslint-disable no-console */
const state = {
  account: []
}

const mutations = {
  SET_ACCOUNT (state, data) {
    state.account = data
  },
}

const actions = {
  GET_ACCOUNT ({ commit }, data) {
    commit('SET_ACCOUNT', data)
  },
}

const getters = {
  account: state => {
    return state.account
  },
}

export default { namespaced: true, state, mutations, actions, getters }
