<template>
  <div class="main_nav" ref="nav_list">
    <div class="nav" ref="nav">
        <Tag
        ref="refsTag"
        v-for="(item, index) in navList"
        :key="item.name"
        type="dot"
        :closable="index === 0 ? false : true"
        :name="item.name"
        :color="isColor(item) ? 'primary' : 'default'"
        @click.native="tabPage(item, $event)"
        @on-close="closeRouter"
        :fade ='false'
        >
        {{item.title}}</Tag>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    value: Object,
    navList: {
      type: Array,
      default () {
        return []
      },
      required: true
    },
    value: {
      type:Number,
      default () {
        return 0
      }
    }
  },
  model:{
    prop: 'value',
    event:'input'
  },
  data () {
    return {
      routerList: this.navList,
      key: this.value,
      initial_value: 0,
      scroll: null
    }
  },
  mounted () {
    this.$nextTick (() => {
      this.scroll = new BScroll(this.$refs.nav_list, {
        scrollX: true,
        scrollY: false,
        click: true
      })
    })
    this.$nextTick(() => {
      this.setNavWidth()
    })
  },
  created () {
  },
  methods: {
    // 判断颜色
    isColor (item) {
      return this.$route.name === item.name
    },
    // 跳转页面
    tabPage (item, event) {
      this.$router.push({
        name: item.name
      })
      // 使当前点击标签居中
      this.scroll.scrollToElement(event.target, 100, true, true)
    },
    // 关闭标签操作
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
    },
    // 设置宽度
    setNavWidth () {
      // this.$refs.refsTag.forEach((item, index) => {
      //   // console.log(item,index)
      //   this.initial_value += Math.ceil(item.offsetWidth) + 5
      // })
      this.$nextTick(() => {
        this.initial_value = this.$refs.refsTag.reduce((width, next) => {
          width += (next.$el.offsetWidth + 10)
          console.log(width)
          return width
        }, 0)
        this.$refs.nav.style.width = this.initial_value  + 'px'
        this.scroll.refresh()
      })
    }
  },
  watch: {
    routerList (val, oldVal) {
      this.$nextTick(() => {
       this.$nextTick(() => {
          this.setNavWidth()
       })
      })
    deep: true
    },
    value (val, old) {
      this.$nextTick (() => {
        this.scroll.scrollToElement(this.$refs.refsTag[val].$el, 100, true, true)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.main_nav {
  position: absolute;
  width: calc(100% - 280px);
  height: 40px;
  overflow: hidden;
}
.nav {
  position: absolute;
  height: 40px;
}
</style>
