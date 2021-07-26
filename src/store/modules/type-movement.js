/* eslint-disable no-console */
const state = {
  value: '',
  name: '',
  typeMovement: []
}

const mutations = {
  SET_TYPE_MOVEMENT (state, data) {
    state.typeMovement = data
  },
  SET_VALUE (state, data) {
    state.value = data
  },
  SET_NAME (state, data) {
    state.name = data
  },

}

const actions = {
  GET_TYPE_MOVEMENT ({ commit }, data) {
    commit('SET_TYPE_MOVEMENT', data)
  },
  GET_VALUE ({ commit }, data) {
    commit('SET_VALUE', data)
  },
  GET_NAME ({ commit }, data) {
    commit('SET_NAME', data)
  }
}

const getters = {
  typeMovement: state => {
    return state.typeMovement
  },
  value: state => {
    return state.value
  },
  name: state => {
    return state.name
  }
}

export default { namespaced: true, state, mutations, actions, getters }
