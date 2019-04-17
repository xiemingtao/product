<template>
  <div class="order">
    <div class="order_header" ref="div">
      <Button @click="print">打印</Button>
      <Button @click="targetDelivery">发货</Button>
      <Button>退款</Button>
      <Button @click="targetDetails">详情</Button>
      <Button>打单</Button>
    </div>
    <Table border ref="selection" :columns="columns4" :data="data1"></Table>
    <br>
    <Page :total="100" show-elevator/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns4: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    handleSelectAll (status) {
      this.$refs.selection.selectAll(status)
    },
    targetDetails () {
      this.$router.push({
        name: 'order_details'
      })
    },
    targetDelivery () {
      this.$router.push({
        name: 'delivery'
      })
    },
    print () {
      this.printpage(this.$refs.selection.$el.innerHTML)
    },
    printpage (divHtml) {
      let newstr = divHtml
      let oldstr = document.body.innerHTML
      document.body.innerHTML = newstr
      window.print()
      document.body.innerHTML = oldstr
      return false
    }
  },
  mounted () {}
}
</script>
<style lang="scss">
.order {
  padding: 20px;
}
.order_header {
  padding-bottom: 5px;
  text-align: right;
}
</style>
