<template>
  <div>
    <el-container>
      <nav-bar />
    </el-container>
    <el-main>
      <div class="container">
        <router-view/>
      </div>
    </el-main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: { NavBar },
  name: 'Default',
}
</script>

<style lang="stylus" scoped>
</style>
