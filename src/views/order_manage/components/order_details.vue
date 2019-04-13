<template>
  <div class="details">
    <div class="Consignee_info clearfix">
      <span class="person">收货人: 张三</span>
      <span class="tell">收货电话: 12345678910</span>
      <span class="ardess">收货地址: 上海市</span>
    </div>
    <div class="order_products">

    </div>
    <div class="order_info">
      <div class="status">
        <span>订单状态</span>
        <span class="value">已发货</span>
      </div>
      <div class="number">
        <span>订单编号</span>
        <span class="value">20190411120000</span>
      </div>
      <div class="pre_date">
        <span>下单时间</span>
        <span class="value">2019-04-11 12:00:00</span>
      </div>
      <div class="payment_date">
        <span>支付时间</span>
        <span class="value">2019-04-11 12:00:00</span>
      </div>
      <div class="refund_date">
        <span>退款时间</span>
        <span class="value">2019-04-11 12:00:00</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
  .details {
    width: 100%;
    height: 100%;
    padding: 20px;
    .Consignee_info {
      span {
        float: left;
        font-size: 16px;
        height: 50px;
        line-height: 50px;
      }
      .person,.tell {
        width: 50%;
      }
    }
    .order_info {
      span {
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        &.value {
          margin-left: 40px;
        }
      }
    }
  }
</style>
