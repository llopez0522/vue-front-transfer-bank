<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import moment from 'moment'
export default {
  name: 'App',
  // beforeMount() {
  //   let currentDate = moment().format()
  //   let expirationDate = moment.unix(this.$store.state.auth.expires_in).format()
  //   if (moment(currentDate).isAfter(expirationDate)) {
  //     this.$store.commit('auth/SET_REMOVE_TOKEN')
  //     this.$store.commit('auth/SET_EXPIRES_IN', 0)
  //     this.$router.push({path: '/login'})
  //   }
  // }
}
</script>

<style lang="stylus">
  *
    margin 0
    padding 0
  body
    background-color: #ecf0f5;
</style>
