<template>
  <div class="nav">
    <Tag
      ref="refsTag"
      type="dot"
      closable
      v-for="item in navList"
      :key="item.name"
      :name="item.name"
      :color="isColor(item) ? 'primary' : 'default'"
      @click.native="tabPage(item)"
      @on-close="closeRouter"
      >{{item.title}}</Tag>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    navList () {
      return this.$store.state.navRouter
    }
  },
  mounted () {},
  created () {},
  methods: {
    isColor (item) {
      return this.$route.name === item.name
    },
    tabPage (item) {
      this.$router.push({
        name: item.name
      })
    },
    closeRouter (event, name) {
      this.$store.commit('getTargetRouter', name)
      this.$store.commit('closeRouter', name)
      if (name === this.$route.name) {
        this.$nextTick(() => {
          this.$router.push({
           name: this.$store.state.targetRouter
          })
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav {
    height: 100%;
    line-height: 40px;
  }
</style>
