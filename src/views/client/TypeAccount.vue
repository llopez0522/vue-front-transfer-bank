<template>
  <div>
    <card-account :data-source="typeAccu" />
  </div>
</template>

<script>
import {http} from '@/api/api'
import { mapGetters } from 'vuex'
import CardAccount from '@/components/CardAccount'
export default {
  name: 'TypeAccount',
  components: {CardAccount},
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      typeAccu: 'typeAccount/typeAccount2',
    })
  },
  beforeMount() {
    this._listTypeAccount()
  },
  methods: {
    _listTypeAccount() {
      http('get', 'type-account/all2').then(response => {
        if (response.error === 1) {
          this.$store.dispatch('typeAccount/GET_TYPE_ACCOUNT_2', response.data)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
