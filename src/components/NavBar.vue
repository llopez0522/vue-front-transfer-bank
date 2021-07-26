<template>
  <el-header>
    <el-row type="flex" justify="space-between" class="align-items-center" style="height: 100%">
      <span class="text-white font-weight-bold text-uppercase">Cognox Bank</span>
        <div class="user">
          <el-dropdown trigger="click">
            <span>
              <div class="identify_user">
                <el-avatar icon="el-icon-user-solid"></el-avatar>
              </div>
            </span>
            <el-dropdown-menu slot="dropdown">
                <div class="contenedorDrown">
                  <div class="body">
                    <div class="avatarCircle text-uppercase">
                      <li class="el-icon-user-solid"></li>
                    </div>
                    <div style="margin-top: 19px; color: #004c6e; line-height: 0;">
                      {{ user.document }}
                    </div>
                    <div class="text-uppercase" style="margin-top: 21px; color: #004c6e; line-height: 0;font-size: .8em;">
                      {{ user.username }}
                    </div>
                    <div style="margin-top: 15px; color: #004c6e">
                      {{ user.email }}
                    </div>
                  </div>
                  <div @click="_onExit" class="footer"><span>SALIR</span></div>
                </div>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
    </el-row>
  </el-header>
</template>

<script>
import {http} from '@/api/api'
import { mapGetters } from 'vuex'
export default {
  name: 'NavBar',
  beforeMount() {
    this.info()
  },
  computed: {
    ...mapGetters({
      user: 'auth/info',
    })
  },
  methods: {
    info() {
      http('get', 'user/info').then(response => {
        if (response.error === 1) {
          this.$store.dispatch('auth/GET_USER_INFO', response.data)
        }
      })
    },
    _onExit(){
      this.$store.commit('auth/SET_REMOVE_TOKEN')
      window.location.href = '/login'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .el-header
    background-color #2DBDEF
    width 100%
  .identify_user {
    background: #e8f6f8 33;
    border-radius: 20px;
    padding-right: 20px;
    color: #e8f6f8;
    margin: 5px;
  }
  .identify_user .username {
    display: inline-block;
  }
  .identify_user .avatar {
    font-family: 'Fira Sans';
    color: #004c6e;
    font-weight: 500;
    background: #e8f6f8;
    text-align: center;
    width: 28px;
    line-height: 27px;
    margin: 2px;
    margin-right: 20px;
    box-sizing: border-box;
    border-radius: 50%;
    display: inline-block;
  }
  .identify_user .avatar:hover {
    color: #e8f6f8;
    background: #00b894;
  }
  .el-header .logo {
    padding-left: 20px;
  }
  .el-header .logo i.icon-open-menu {
    transition: all ease-in-out 0.2s;
    color: #00b894;
    font-size: 1.4em;
    line-height: 40px;
    margin-left: 5px;
    padding: 5px;
    box-sizing: border-box;
  }
  .el-header .logo .slogan {
    color: #e8f6f8;
    font-family: 'Fira Sans', sans-serif;
  }
  .el-header .logo .delta {
    width: 200px;
    padding-left: 5px;
    font-size: 1.4em;
    cursor: pointer;
    font-family: "Fira Sans", sans-serif;
    line-height: 40px;
    color: #e8f6f8;
    font-weight: 500;
  }
  .el-header .AppName {
    text-align: center;
    padding: 8px;
  }
  .el-header .user {
    float: right;
    cursor: pointer;
  }
  .el-header .user.btn-drawer {
    text-align: center;
    width: 36px;
    line-height: 36px;
    margin: 2px;
    margin-right: 5px;
    box-sizing: border-box;
    border-radius: 50%;
    color: #e8f6f8;
    transition: all 0.3s ease-in-out;
  }
  .el-header .user.btn-drawer:hover {
    color: #00b894;
    background: #e8f6f8;
  }
  .contenedorDrown {
    width: 250px;
  }
  .contenedorDrown .avatarCircle {
    border: 1px solid #00b894;
    color: #00b894;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    text-align: center;
    box-sizing: border-box;
    line-height: 64px;
    font-size: 2em;
    font-family: "Fira Sans";
  }
  .contenedorDrown .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  .contenedorDrown .btn {
    padding: 0.4rem 2.5rem;
    margin-left: 0;
  }
  .contenedorDrown .footer {
    background: #f9faff;
    text-align: center;
    font-family: "Fira Sans";
    color: #ef5454;
    padding: 1em;
    cursor: pointer;
  }
  .contenedorDrown .footer:hover {
    background: #dee2f5;
  }
  .title-notify-group {
    font-family: "Fira Sans";
    padding: 1em;
    width: 344px;
    border-bottom: 1px solid #e8f6f8;
    color: #196882;
  }
  .notify-group {
    max-height: 300px;
    overflow: auto;
  }
  .notify {
    padding: 20px;
    color: #196882;
    transition: 0.3s all ease;
  }
  .notify:hover {
    background: #e8f6f8;
  }
  .notify:hover .btn-delete-notify {
    visibility: visible;
  }
  .notify .title-notify {
    line-height: 2;
  }
  .notify .btn-delete-notify {
    float: right;
    color: #f56c6c;
    cursor: pointer;
    font-size: 0.8em;
    visibility: hidden;
    transition: 0.1s all ease;
  }
  .no-has-notify {
    padding: 20px;
    color: #196882;
    text-align: center;
  }
  .wrapper-drawer {
    width: 300px;
    background: #fff;
    z-index: 5000;
    position: absolute;
    right: 0px;
    height: calc(100vh - 40px);
    box-sizing: border-box;
    box-shadow: 1px 0px 3px #555;
    transition: all ease-in-out 0.3s;
  }
  .wrapper-drawer .wrapper-drawer-btn {
    padding: 6px;
  }
  .wrapper-drawer .wrapper-drawer-btn .drawer-btn {
    width: 80px;
    height: 85px;
    margin: 8px;
    border-radius: 3px;
    text-align: center;
    box-sizing: border-box;
    padding: 5px;
    transition: all ease 0.5s;
    float: left;
  }
  .wrapper-drawer .wrapper-drawer-btn .drawer-btn:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
  .wrapper-drawer .wrapper-drawer-btn .drawer-btn .drawer-icon {
    width: 100%;
    height: 50px;
  }
  .wrapper-drawer .wrapper-drawer-btn .drawer-btn .drawer-title {
    font-size: 11px;
    color: #196882;
    transition: all ease 0.5s;
    font-family: "Fira Sans";
    padding-top: 5px;
  }
</style>
