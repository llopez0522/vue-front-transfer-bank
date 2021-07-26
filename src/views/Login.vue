<template>
  <div class="login">
    <el-card>
      <h2 class="text-center">Inicio de Sesión</h2>
      <el-form
        class="login-form"
        :model="ruleForm"
        :ref="$options.name"
      >
        <el-form-item
          prop="document"
          :rules="[{ required: true, message: 'Usuario requerido', trigger: 'blur' }]"
        >
          <el-input
            v-model="ruleForm.document"
            placeholder="usuario"
            prefix-icon="fa fa-user"
          />
        </el-form-item>
        <el-form-item
          prop="password"
          :rules="[{ required: true, message: 'Contraseña requerido', trigger: 'blur' }]"
        >
          <el-input
            v-model="ruleForm.password"
            placeholder="Contraseña"
            type="password"
            prefix-icon="fa fa-lock"
          ></el-input>
        </el-form-item>
        <el-button
            :loading="loading"
            class="login-button"
            type="primary"
            block
            @click="auth"
          >INGRESAR</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { http } from '../api/api.js'
export default {
  name: 'Login',
  data() {
    return {
      ruleForm: {
        document: '',
        password: ''
      },
      loading: false,
    }
  },
  methods: {
    auth() {
      this.$refs[this.$options.name].validate((valid) => {
        if (valid) {
          this.loading = true
          http('post', 'auth/login', JSON.stringify(this.ruleForm)).then(response => {
            if (response.error === 1) {
              this.$store.dispatch('auth/GET_TOKEN', response.access_token)
              this.$store.dispatch('auth/GET_EXPIRES_IN', response.expires_in)
              this.$router.push({ path: '/' })
              this.loading = false
            }
          }).catch((err) => {
            this.loading = false
            const { data } = err.response
            if (data.error === 0) {
              this.$alert(data.message, 'Title', {
                confirmButtonText: 'OK'
              })
            }
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .login {
    //flex: 1;
    //display: flex;
    //justify-content: center;
    //align-items: center;
    position absolute
    top 50%
    left 50%
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }

  .login-button {
    width: 100%;
  }
  .login-form {
    width: 290px;
  }
  .forgot-password {
    margin-top: 10px;
  }
  .el-button--primary
    background: rgb(0, 124, 137)
    border-color: rgb(0, 124, 137)
    &:hover,
    &.active,
    &:focus
      background: lighten(rgb(0, 124, 137), 7)
      border-color: lighten(rgb(0, 124, 137), 7)
  .login .el-input__inner:hover
    border-color: rgb(0, 124, 137)
  .login .el-input__prefix
    background: rgb(238, 237, 234);
    left: 0;
    height: calc(100% - 2px);
    left: 1px;
    top: 1px;
    border-radius: 3px;
    .el-input__icon
      width: 30px;
  .login .el-input input {
    padding-left: 35px;
  }
  .login .el-card {
    padding-top: 0;
    padding-bottom: 30px;
  }
  h2 {
    font-family: "Open Sans";
    letter-spacing: 1px;
    font-family: Roboto, sans-serif;
    padding-bottom: 20px;
  }
  a {
    color: rgb(0, 124, 137)
    text-decoration: none;
    &:hover,
    &:active,
    &:focus {
      color: lighten(rgb(0, 124, 137), 7);
    }
  }
  .login .el-card {
    width: 340px;
    display: flex;
    justify-content: center;
  }
</style>
