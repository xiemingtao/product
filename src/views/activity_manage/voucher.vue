<template>
  <div class="voucher">
    <div class="voucher_btn">
      <Button type="info" @click.native="$router.push({name: 'add_voucher'})">添加兑换券</Button>
    </div>
    <div class="voucher_list">
      <Table
      ref="table"
      :columns="columns"
      :data="data5"
      ></Table>
    </div>,
    <Modal v-model="modal3" width="350px">
      <p>
        <span class="modal_label">兑换券卡号: skadjjaskd</span>
      </p>
      <p>
        <span class="modal_label">兑换券密码: 1245sfsdf</span>
      </p>
    </Modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          title: '兑换券名称',
          align: 'center',
          key: 'voucher_name'
        },
        {
          title: '兑换券号码',
          align: 'center',
          key: 'num'
        },
        {
          title: '商品',
          align: 'center',
          key: 'porduct'
        },
        {
          title: '操作',
          wdith: '100px',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'info',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.viewVoucher(params)
                  }
                }
              }, '查看'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                style: {
                  marginLeft: '10px'
                },
                on: {
                  click: () => {}
                }
              }, '删除')
            ])
          }
        }
      ],
      data5: [
        {
          voucher_name: '兑换券',
          porduct: '苏格兰软糖',
          num: 2
        },
        {
          voucher_name: '兑换券',
          porduct: '苏格兰软糖',
          num: 24
        }
      ],
      value: '',
      modal3: false
    }
  },
  methods: {
    show (params, index) {
      console.log(params, index)
    },
    exportData () {
      this.$refs.table.exportCsv({
        filename: '兑换券'
      })
    },
    viewVoucher (params) {
      this.modal3 = true
    }
  }
}
</script>

<style lang='scss' scoped>
.voucher {
  width: 100%;
  height: 100%;
  .voucher_btn {
    height: 80px;
    line-height: 80px;
    font-size: 20px;
  }
}
.modal_label {
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  margin-right: 10px;
}
</style>
