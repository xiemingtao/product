<template>
  <div class="holiday_list">
    <Button type="info" @click.native="$router.push({name: 'add_holiday'})">添加</Button>
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
          title: '节日名称',
          align: 'center',
          key: 'name'
        },
        {
          title: '分类商品',
          key: 'product',
          align: 'center'
        },
        {
          title: '节日日期',
          key: 'date',
          align: 'center'
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
          product: '白菜,萝卜,青菜'
        },
        {
          name: '劳动节',
          date: '2019-05-01',
          product: '白菜,萝卜,青菜'
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
