<template>
  <el-row :gutter="2">
    <template v-for="item in dataSource">
      <el-col :xs="24" :sm="24" :md="6" :lg="8" :xl="8" :key="item.id">
        <div style="cursor: pointer;" @click="_redirect(item.id)">
          <el-card class="box-card">
            <div class="d-flex justify-content-between">
              <div class="d-flex flex-column">
                <span class="text-black font-weight-bold">Cuenta</span>
                <div style="margin-bottom: .2em;"></div>
                <span>{{ item.name }}</span>
                <div style="margin-bottom: .5em;"></div>
                <span class="text-black font-weight-bold">{{ item.number_ }}</span>
              </div>
              <div>
                <span>Saldo disponible</span>
                <div style="margin-bottom: .2em;"></div>
                <span class="text-black font-weight-bold text-left float-right">${{ round(item.value) }}</span>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </template>
  </el-row>
</template>

<script>
import {round} from "../utils/functions";

export default {
  name: 'CardAccount',
  props: {
    dataSource: {
      default() {
        return []
      },
      type: Array
    }
  },
  data() {
    return {
      round
    }
  },
  methods: {
    _redirect(id) {
      this.$router.push({path: '/transfers'})
      this.$store.dispatch('typeAccount/GET_TYPE_ACCOUNT_ID', id)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .box-card
    width 355px
  .el-card
    border-radius 10px
    box-shadow none
</style>
