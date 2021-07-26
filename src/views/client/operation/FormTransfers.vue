<template>
  <div>
    <el-row :gutter="12">
      <el-form :model="ruleForm" :ref="$options.name" size="small">
        <div style="padding-bottom: 3rem;">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-radio-group v-model="ownAccount" @change="onChangeType">
              <el-radio-button label="Cuentas_Propias" name="">Cuentas Propias</el-radio-button>
              <!--                  <el-radio-button label="Cuantas a Tercero"></el-radio-button>-->
              <!--                  <el-radio-button label="Cuentas Inscritas"></el-radio-button>-->
            </el-radio-group>
          </el-col>
        </div>

        <el-col :xs="24" :sm="24" :md="24" :lg="4" :xl="4" v-if="ownAccount">
          <el-form-item
            label="Banco"
            prop="bank_id"
            :rules="[{ required: true, message: 'Banco requerido', trigger: 'change' }]">
            <el-select
              v-model="ruleForm.bank_id"
              placeholder="Banco"
              style="width: 100%"
            >
              <el-option
                v-for="item in bank"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <!-- <el-col :xs="24" :sm="24" :md="24" :lg="4" :xl="4" v-if="ownAccount">
          <el-form-item
            label="Tipo de cuenta"
            prop="type_account_id"
            :rules="[{ required: true, message: 'Tipo de cuenta requerido', trigger: 'change' }]">
            <el-select
              v-model="ruleForm.type_account_id"
              placeholder="Tipo cuenta"
              style="width: 100%"
              @change="onChangeTypeAccount"
            >
              <el-option
                v-for="item in typeAccount"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col> -->

        <el-col :xs="24" :sm="24" :md="24" :lg="4" :xl="4" v-if="ownAccount">
          <el-form-item
            label="Cuenta origen"
            prop="account_origin"
            :rules="[{ required: true, message: 'Cuenta orige requerido', trigger: 'change' }]"
          >
            <el-select
              v-model="ruleForm.account_origin"
              placeholder="Cuenta"
              style="width: 100%"
            >
              <el-option
                v-for="item in account"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6" v-if="ownAccount">
          <el-form-item
            label="Cuenta destino"
            prop="account_destiny"
            :rules="[{ required: true, message: 'Cuenta destino requerido', trigger: 'change' }]"
          >
            <el-select
              v-model="ruleForm.account_destiny"
              placeholder="Cuenta"
              style="width: 100%"
            >
              <el-option
                v-for="item in account"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6" v-if="ownAccount">
          <el-form-item
            label="Monto"
            prop="amount"
            :rules="[{ required: true, message: 'Monto requerido', trigger: 'change' }]"
          >
            <el-input v-model="ruleForm.amount" />
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>

<script>
import {http} from '@/api/api'
import { mapGetters } from 'vuex'

export default {
  name: 'FormTransfers',
  props: {
    ownAccount: String,
    bank: {
      default() {
        return []
      },
      type: Array
    },
    typeAccount: {
      default() {
        return []
      },
      type: Array
    }
  },
  computed: {
    ...mapGetters({
      account: 'account/account',
      type_account_id: 'typeAccount/typeAccountId',
    })
  },
  data() {
    return {
      ruleForm: {
        bank_id: '',
        type_account_id: '',
        account_origin: '',
        account_destiny: '',
        amount: 0,
      },
    }
  },
  methods: {
    _account(type) {
      http('get', `account/${type}/${this.type_account_id}`).then(response => {
        if (response.error === 1) {
          this.$store.dispatch('account/GET_ACCOUNT', response.data)
        } else {
          this.ruleForm.account_id = ''
          this.$store.dispatch('account/GET_ACCOUNT', [])
        }
      })
    },
    onChangeType(value) {
      console.log(value)
      this._account(value)
    },
    onChangeTypeAccount(value) {
      console.log(value)
    },
  }
}
</script>

<style scoped>

</style>
