<template>
  <Menu :active-name="this.$route.name" :open-names ="open_name" @on-open-change="onchange" >
    <MenuItem name="home" to="/home">首页</MenuItem>
    <Submenu name="product_manage">
      <template slot="title">商品管理</template>
      <MenuItem name="product_list" to="/product_list">商品列表</MenuItem>
      <MenuItem name="package_management" to="/package_management">套餐管理</MenuItem>
      <MenuItem name="product_ground" to="/product_ground">商品上架</MenuItem>
      <MenuItem name="holiday" to="/holiday">节日管理</MenuItem>
      <MenuItem name="product_classify" to="/product_classify">分类管理</MenuItem>
    </Submenu>
    <Submenu name="order">
      <template slot="title">订单管理</template>
      <MenuItem name="order_list" to="/order_list">订单列表</MenuItem>
    </Submenu>
    <Submenu name="activity_manage">
      <template slot="title">活动管理</template>
      <MenuItem name="coupon" to="/coupon">优惠券</MenuItem>
      <MenuItem name="voucher" to="/voucher">兑换券</MenuItem>
    </Submenu>
  </Menu>
</template>
<script>
export default {
  data () {
    return {
      open_name: JSON.parse(localStorage.getItem('open_name')) || []
    }
  },
  methods: {
    onchange (val) {
      localStorage.setItem('open_name', JSON.stringify(val))
    }
  }
}
</script>
<style lang="scss">
</style>
