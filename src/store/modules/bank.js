/* eslint-disable no-console */
const state = {
  banks: []
}

const mutations = {
  SET_BANK (state, data) {
    state.banks = data
  },
}

const actions = {
  GET_BANK ({ commit }, data) {
    commit('SET_BANK', data)
  },
}

const getters = {
  banks: state => {
    return state.banks
  },
}

export default { namespaced: true, state, mutations, actions, getters }
