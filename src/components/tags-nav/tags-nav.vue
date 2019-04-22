<template>
  <div class="tags-nav">
    <div class="close-con">
      <Dropdown transfer @on-click="handleTagsOption" style="margin-top:7px;">
        <Button size="small" type="text">
          <Icon :size="18" type="ios-close-circle-outline" />
        </Button>
        <DropdownMenu slot="list">
          <DropdownItem name="close-all">关闭所有</DropdownItem>
          <DropdownItem name="close-others">关闭其他</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <ul v-show="visible" :style="{left: contextMenuLeft + 'px', top: contextMenuTop + 'px'}" class="contextmenu">
      <li v-for="(item, key) of menuList" @click="handleTagsOption(key)" :key="key">{{item}}</li>
    </ul>
    <div class="btn-con left-btn">
      <Button type="text" @click="handleScroll(240)">
        <Icon :size="18" type="ios-arrow-back" />
      </Button>
    </div>
    <div class="btn-con right-btn">
      <Button type="text" @click="handleScroll(-240)">
        <Icon :size="18" type="ios-arrow-forward" />
      </Button>
    </div>
    <div class="scroll-outer" ref="scrollOuter" @DOMMouseScroll="handlescroll" @mousewheel="handlescroll">
      <div ref="scrollBody" class="scroll-body" :style="{left: tagBodyLeft + 'px'}">
        <transition-group name="taglist-moving-animation">
          <Tag
            type="dot"
            v-for="(item, index) in navList"
            ref="refsTag"
            :key="item.name"
            :name="item.name"
            @on-close="closeRouter"
            @click.native="tabPage(item, $event)"
            :closable="index === 0 ? false : true"
            :color="isColor(item) ? 'primary' : 'default'"
          >{{item.title}}</Tag>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
// import { showTitle, routeEqual } from '@/libs/util'
// import beforeClose from '@/router/before-close'
export default {
  name: 'TagsNav',
  props: {
    value: Object,
    list: {
      type: Array,
      default () {
        return []
      }
    },
    navList: {
      type: Array,
      default () {
        return []
      },
      required: true
    }
  },
  data () {
    return {
      tagBodyLeft: 0,
      rightOffset: 40,
      outerPadding: 4,
      contextMenuLeft: 0,
      contextMenuTop: 0,
      visible: false,
      menuList: {
        others: '关闭其他',
        all: '关闭所有'
      },
      routerList: this.navList
    }
  },
  methods: {
    handlescroll (e) {
      var type = e.type
      let delta = 0
      if (type === 'DOMMouseScroll' || type === 'mousewheel') {
        delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40
      }
      this.handleScroll(delta)
    },
    // 横向导航栏偏移方向函数
    handleScroll (offset) {
      const outerWidth = this.$refs.scrollOuter.offsetWidth
      const bodyWidth = this.$refs.scrollBody.offsetWidth
      if (offset > 0) {
        this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
      } else {
        if (outerWidth < bodyWidth) {
          if (this.tagBodyLeft < -(bodyWidth - outerWidth)) {
            this.tagBodyLeft = this.tagBodyLeft
          } else {
            this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
          }
        } else {
          this.tagBodyLeft = 0
        }
      }
    },
    // 关闭方法调用
    handleTagsOption (type) {
      if (type.includes('all')) {
        // 关闭所有，除了home
        this.$store.commit('clearAllRouter')
        this.$router.push({
          name: 'home'
        })
      } else if (type.includes('others')) {
        // 关闭除当前页和home页的其他页
        this.$store.commit('clearOutherRouter', this.$route.name)
      }
    },
    // 当前标签页永远在可视区域内
    moveToView (tag) {
      const outerWidth = this.$refs.scrollOuter.offsetWidth
      const bodyWidth = this.$refs.scrollBody.offsetWidth
      if (bodyWidth < outerWidth) {
        this.tagBodyLeft = 0
      } else if (tag.offsetLeft < -this.tagBodyLeft) {
        // 标签在可视区域左侧
        this.tagBodyLeft = -tag.offsetLeft + this.outerPadding
      } else if (tag.offsetLeft > -this.tagBodyLeft && tag.offsetLeft + tag.offsetWidth < -this.tagBodyLeft + outerWidth) {
        // 标签在可视区域
        this.tagBodyLeft = Math.min(0, outerWidth - tag.offsetWidth - tag.offsetLeft - this.outerPadding)
      } else {
        // 标签在可视区域右侧
        this.tagBodyLeft = -(tag.offsetLeft - (outerWidth - this.outerPadding - tag.offsetWidth))
      }
    },
    // 获取标签元素
    getTagElementByName (route) {
      this.$nextTick(() => {
        let index = this.$refs.refsTag.findIndex(item => item.name === route.name)
        this.moveToView(this.$refs.refsTag[index].$el)
      })
    },
    // 未知函数
    contextMenu (item, e) {
      console.log(item)
      if (item.name === this.$config.homeName) {
        return
      }
      this.visible = true
      const offsetLeft = this.$el.getBoundingClientRect().left
      this.contextMenuLeft = e.clientX - offsetLeft + 10
      this.contextMenuTop = e.clientY - 64
    },
    // 关闭按钮显示
    closeMenu () {
      this.visible = false
    },
    // 判断颜色
    isColor (item) {
      return this.$route.name === item.name
    },
    // 跳转页面
    tabPage (item, event) {
      this.$router.push({
        name: item.name
      })
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
    }
  },
  watch: {
    // 监听路由
    '$route' (to) {
      this.getTagElementByName(to)
    },
    visible (value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getTagElementByName(this.$route)
    })
  }
}
</script>
<style lang="scss">
@import './tags-nav.scss';
</style>
