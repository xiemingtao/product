<template>
  <div class="main_home">
    <div class="sider">
      <Menu></Menu>
    </div>
    <div class="main_content">
      <div class="main_header">{{router_name}}</div>
      <div class="nav_list">
        <Nav></Nav>
      </div>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/menu.vue'
import Nav from '@/components/nav.vue'
export default {
  components: { Menu, Nav },
  data () {
    return {}
  },
  mounted () {
    this.$store.commit('getRouterName', this.$route.name)
  },
  computed: {
    router_name () {
      return this.$store.getters.getRouterName
    }
  },
  watch: {
    $route (to, from) {
      this.$store.commit('getRouterName', to.name)
      this.$store.commit('setNavRouter', to.name)
    }
  }
}
</script>

<style lang="scss">
  .main_home {
    width: 100%;
    height: 100%;
    .main_header {
      width: 100%;
      height: 60px;
      line-height: 60px;
      font-size: 18px;
      border-bottom: 1px solid #ccc;
      text-align: center;
    }
    .sider {
      width: 240px;
      height: 100%;
      float: left;
      .ivu-menu {
        height: 100%;
      }
    }
    .main_content {
      margin-left: 240px;
      height: 100%;
      .content {
        overflow: auto;
        height: calc( 100% - 60px);
      }
      .nav_list {
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        overflow-x: auto;
        border-bottom: 1px solid #ccc;
      }
    }
  }
</style>
