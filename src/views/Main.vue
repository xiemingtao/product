<template>
  <div class="main_home">
    <div class="sider">
      <Menu></Menu>
    </div>
    <div class="main_content">
      <div class="main_header">{{router_name}}</div>
      <div class="nav_list" ref="nav_list">
        <!-- <Nav
        :navList="navList"
        v-model="sign"
        ></Nav> -->
        <TagsNav
          :navList="navList"
        ></TagsNav>
      </div>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/menu.vue'
// import Nav from '@/components/nav.vue'
import TagsNav from '@/components/tags-nav/index.js'
export default {
  components: {
    Menu,
    // Nav,
    TagsNav
  },
  data () {
    return {
      scroll: null
      // sign: 0
    }
  },
  mounted () {
    this.$store.commit('getRouterName', this.$route.name)
    this.$store.commit('setNavRouter', this.$route.name)
    // this.sign = this.$store.state.navRouter.find(item => item.name === this.$route.name)
  },
  computed: {
    router_name () {
      return this.$store.getters.getRouterName
    },
    navList () {
      return this.$store.state.navRouter
    }
  },
  watch: {
    $route (to, from) {
      this.$store.commit('getRouterName', to.name)
      this.$store.commit('setNavRouter', to.name)
      // this.sign = this.$store.state.navRouter.find(item => item.name === to.name)
    }
  }
}
</script>

<style lang="scss">
  .main_home {
    background-color: #fff;
    width: 100%;
    height: 100%;
    .main_header {
      width: 100%;
      height: 60px;
      line-height: 60px;
      font-size: 18px;
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
      width: calc( 100% - 240px);
      .content {
        padding: 20px 40px;
        overflow: auto;
        height: calc( 100% - 100px);
      }
      .nav_list {
         padding: 0;
        height:40px;
        background:#F0F0F0;
        overflow: hidden;
      }
    }
  }
</style>
