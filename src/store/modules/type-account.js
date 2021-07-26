/* eslint-disable no-console */
const state = {
  typeAccount: [],
  typeAccount_2: [],
  type_account_id: ''
}

const mutations = {
  SET_TYPE_ACCOUNT (state, data) {
    state.typeAccount = data
  },
  SET_TYPE_ACCOUNT_2 (state, data) {
    state.typeAccount_2 = data
  },
  SET_TYPE_ACCOUNT_ID (state, data) {
    state.type_account_id = data
  },
}

const actions = {
  GET_TYPE_ACCOUNT ({ commit }, data) {
    commit('SET_TYPE_ACCOUNT', data)
  },
  GET_TYPE_ACCOUNT_2 ({ commit }, data) {
    commit('SET_TYPE_ACCOUNT_2', data)
  },
  GET_TYPE_ACCOUNT_ID ({ commit }, data) {
    commit('SET_TYPE_ACCOUNT_ID', data)
  },
}

const getters = {
  typeAccount: state => {
    return state.typeAccount
  },
  typeAccount2: state => {
    return state.typeAccount_2
  },
  typeAccountId: state => {
    return state.type_account_id
  },
}

export default { namespaced: true, state, mutations, actions, getters }
