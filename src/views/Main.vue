<template>
  <div class="main_home">
    <div class="main_header">头部</div>
    <div class="sider">
      <Menu></Menu>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/menu.vue'
export default {
  components: {Menu}
}
</script>

<style lang="scss">
  .main_home {
    width: 100%;
    height: 100%;
    .main_header {
      width: 100%;
      height: 80px;
      line-height: 80px;
      border-bottom: 1px solid #ccc;
      text-align: center;
    }
    .sider {
      width: 240px;
      height: calc( 100% - 80px);
      float: left;
      .ivu-menu {
        height: 100%;
      }
    }
    .content {
      overflow: hidden;
      margin-left: 240px;
      height: calc( 100% - 80px);
    }
  }
</style>
