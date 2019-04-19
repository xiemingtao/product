<template>
  <div class="holiday_list">
    <Button type="info" @click.native="$router.push({name: 'add_package'})">添加</Button>
    <div class="holiday_table">
      <Table :columns="holiday_config" :data="holiday_data"></Table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      holiday_config: [
        {
          title: '套餐名称',
          align: 'center',
          key: 'name'
        },
        {
          title: '套餐商品',
          key: 'product',
          align: 'center'
        },
        {
          title: '套餐售价',
          key: 'price',
          align: 'center'
        },
        {
          title: '套餐库存',
          key: 'stock',
          align: 'center'
        },
        {
          title: '套餐图片',
          key: 'date',
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
      holiday_data: [
        {
          name: '国庆节',
          date: '2019-10-01',
          product: '白菜,萝卜,青菜',
          price: '59.9',
          stock: '100',
          img: 'http://pic31.nipic.com/20130804/7487939_090818211000_2.jpg'
        },
        {
          name: '劳动节',
          date: '2019-05-01',
          product: '白菜,萝卜,青菜',
          price: '109.9',
          stock: '1000',
          img: 'http://pic31.nipic.com/20130804/7487939_090818211000_2.jpg'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss">
  .holiday_list {
    padding: 20px;
    .holiday_table {
      margin-top: 20px;
    }
  }
</style>
