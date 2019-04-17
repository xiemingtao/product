<template>
  <div class="voucher">
    <div class="voucher_title">
      <span>兑换券名称:</span>
      <span>
       <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
      </span>
    </div>
    <div class="voucher_list">
      <Table
      ref="table"
      :columns="columns"
      :data="data5"
      ></Table>
    </div>
    <div class="voucher_num">
      <div class="num">
        <span>兑换券生成数量</span>
      </div>
      <div class="number">
        40000
      </div>
      <Button type="primary" size="large" @click="exportData()"><Icon type="ios-download-outline"></Icon>导出数据</Button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center',
            renderHeader: (h,params) => {
              return h('div', [

              ])
            }
          },
          {
            title: "商品名称",
            key: "porduct"
          },
          {
            title: "数量",
            key: "num"
          }
        ],
        data5: [
					{
						porduct: "苏格兰软糖",
						num: 2,
					},
					{
						porduct: "苏格兰软糖",
						num: 24
					},
					{
						porduct: "苏格兰软糖",
						num: 24
					},
					{
						porduct: "苏格兰软糖",
						num: 24
					},
					{
						porduct: "苏格兰软糖",
						num: 24
					}
        ],
        value: ''
      }
    },
    methods:{
      show (params,index) {
        console.log(params,index)
      },
      exportData () {
        this.$refs.table.exportCsv({
          filename: '兑换券',
        })
      }
    }
  }
</script>

<style lang='scss'>
.voucher {
  width: 100%;
  height: 100%;
  padding: 10px 10px 10px 40px;
  .voucher_title {
    height: 80px;
    line-height: 80px;
    font-size: 20px;
  }
  .voucher_num {
    height: 80px;
    line-height: 80px;
    font-size: 20px;
    .number {
      text-indent: 20px;
    }
  }
}
</style>
