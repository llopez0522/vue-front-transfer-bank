import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'

import auth from './modules/auth'
import typeMovement from './modules/type-movement'
import typeAccount from './modules/type-account'
import account from './modules/account'
import bank from './modules/bank'

const ls = new SecureLS({
  isCompression: true,
  encodingType: 'aes',
  encryptionSecret: 'h4TSGaudRq9uhhKc'
});

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    typeMovement,
    typeAccount,
    account,
    bank,
  },
  plugins: [createPersistedState({
    key: '_data_',
    paths: [
      'auth.token',
      'auth.expires_in',
      'auth.userInfo',
      'typeMovement.typeMovement',
      'typeAccount.typeAccount',
      'typeAccount.type_account_id',
      'account.account',
      'bank.bank',
    ],
    storage: {
      getItem: key => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: key => ls.remove(key)
    }
  })]
})
