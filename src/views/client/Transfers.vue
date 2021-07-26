<template>
  <div>
    <type-movement :type-move="typeMove" ref="type-move"/>
    <div style="margin-top: 1rem" v-if="value !== ''">
      <form-window :title="name">
        <component
          :ref="reference"
          :own-account="selected"
          :type-account="accountType"
          :bank="banks"
          :is="currentComponent"
        />
        <template v-slot:footer>
          <el-row type="flex" justify="end">
            <el-button type="primary" @click="_onSubmit">{{ titleButton }}</el-button>
          </el-row>
        </template>
      </form-window>
    </div>
  </div>
</template>

<script>
import {http} from '@/api/api'
import { mapGetters } from 'vuex'
import TypeMovement from '@/components/TypeMovement.vue'
import FormWindow from '@/components/FormWindow'
import FormTransfers from './operation/FormTransfers'
import FormRetirement from './operation/FormRetirement'
import FormConsignment from './operation/FormConsignment'

export default {
  name: 'Transfers',
  components: { TypeMovement, FormWindow, FormTransfers, FormRetirement, FormConsignment },
  data() {
    return {
      ruleForm: {
        bank_id: '',
        type_account_id: '',
        account_origin: '',
        account_destiny: '',
        amount: 0,
      },
      selected: '',
      titleButton: '',
      currentComponent: '',
      reference: '',
    }
  },
  watch: {
    '$store.state.typeMovement.name': function() {
      switch (this.$store.state.typeMovement.name) {
        case 'Consignación':
          this.titleButton = 'Consignar'
          this.currentComponent = 'FormConsignment'
          break
        case 'Retiro':
          this.titleButton = 'Retirar'
          this.currentComponent = 'FormRetirement'
          break
        case 'Transferencia':
          this.titleButton = 'Trasferir'
          this.reference = 'transfer_'
          this.currentComponent = 'FormTransfers'
          break
      }
    }
  },
  computed: {
    ...mapGetters({
      accountType: 'typeAccount/typeAccount',
      typeMove: 'typeMovement/typeMovement',
      value: 'typeMovement/value',
      name: 'typeMovement/name',
      banks: 'bank/banks',
    })
  },
  beforeMount() {
    this._banks()
    this.typeMoveAll()
    this.typeAccount()
    if (this.$refs[this.reference] !== undefined) {
      console.log(this.$refs[this.reference].ruleForm.amount);
    }

  },
  methods: {
    _onSubmit() {
      this.$refs[this.reference].$refs[this.$refs[this.reference].$options.name].validate((valid) => {
        if (valid) {
          this.$refs[this.reference].ruleForm.type_movement_id = this.$store.getters['typeAccount/typeAccountId']
          http('post', 'movement', this.$refs[this.reference].ruleForm).then(response => {
            if (response.error === 0) {
              this.$alert(response.message, 'Aviso', {
                confirmButtonText: 'OK',
              })
            } else {
              this.$notify({
                title: '',
                message: response.message,
                type: 'success'
              })
              this.$refs[this.reference].$refs[this.$refs[this.reference].$options.name].resetFields()
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    typeMoveAll() {
      http('get', 'type-movement/all').then(response => {
        if (response.error === 1) {
          this.$store.dispatch('typeMovement/GET_TYPE_MOVEMENT', response.data)
        }
      })
    },
    _banks() {
      http('get', 'banks/all').then(response => {
        if (response.error === 1) {
          this.$store.dispatch('bank/GET_BANK', response.data)
        }
      })
    },
    typeAccount() {
      http('get', 'type-account/all').then(response => {
        if (response.error === 1) {
          this.$store.dispatch('typeAccount/GET_TYPE_ACCOUNT', response.data)
        }
      })
    },
  }
}
</script>

<style scoped>

</style>
