<template>
  <Menu :active-name="this.$route.name"  @on-select="onchange" >
    <MenuItem :name="item.name" :to="item.path" v-for="item in menuList" :key="item.title">{{item.title}}</MenuItem>
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
  },
  mounted () {},
  computed: {
    menuList () {
      return this.$store.state.menuList
    }
  }
}
</script>
<style lang="scss">
</style>
