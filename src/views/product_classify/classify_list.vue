<template>
  <div class="classify_list">
    <Button type="info" @click.native="$router.push({name: 'product_classify'})">添加分类</Button>
    <div class="classify_table">
      <Table :columns="classify_config" :data="classify_data"></Table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      classify_config: [
        {
          title: '分类名称',
          align: 'center',
          key: 'name'
        },
        {
          title: '分类图片',
          key: 'img',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  'src': params.row.img
                },
                style: {
                  height: '40px',
                  verticalAlign: 'middle'
                }
              })
            ])
          }
        },
        {
          title: '操作',
          width: '100px',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {}
              }, '编辑')
            ])
          }
        }
      ],
      classify_data: [
        {
          name: '蔬菜类',
          img: 'http://pic31.nipic.com/20130804/7487939_090818211000_2.jpg',
          content: '白菜,萝卜,青菜'
        },
        {
          name: '蔬菜类',
          img: 'http://pic31.nipic.com/20130804/7487939_090818211000_2.jpg',
          content: '白菜,萝卜,青菜'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss">
  .classify_list {
    width: 100%;
    height: 100%;
    .classify_table {
      margin-top: 20px;
    }
  }
</style>
