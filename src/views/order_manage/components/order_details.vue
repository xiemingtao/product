<template>
  <div class="details">
    <Button @click="$router.push({name: 'order_list'})" type="info">返回</Button>
    <div class="Consignee_info clearfix">
      <span class="person">收货人: 张三</span>
      <span class="tell">收货电话: 12345678910</span>
      <span class="ardess">收货地址: 上海市</span>
    </div>
    <div class="order_products">
      <div class="order_products_title">订单商品</div>
      <div class="order_product_list">
        <div class="product_list_title">
          <div class="product_img"></div>
          <div class="product_name">商品名称</div>
          <div class="product_price">单价</div>
          <div class="product_number">数量</div>
          <div class="product_total">小计</div>
        </div>
        <div class="product_list">
          <ul class="clearfix">
            <li>
              <img src="@/assets/images/TB1iUpEPFXXXXcYXpXXSutbFXXX.jpg_180x180xzq90.jpg" alt="">
            </li>
            <li>苏格兰软糖</li>
            <li>40.00</li>
            <li>39</li>
            <li>4020.00</li>
          </ul>
          <ul class="clearfix">
            <li>
              <img src="@/assets/images/TB1iUpEPFXXXXcYXpXXSutbFXXX.jpg_180x180xzq90.jpg" alt="">
            </li>
            <li>苏格兰软糖</li>
            <li>40.00</li>
            <li>39</li>
            <li>4020.00</li>
          </ul>
          <div class="priduct_price_total">
            <div class="express_fee">
            <span class="cost">快递费 </span>
            <span>4020</span>
          </div>
          <div class="product_coupon">
            <span class="cost">优惠</span>
            <span>4020</span>
            <p>满100减30优惠券</p>
          </div>
          <div class="total_prcie">
            <span class="cost">合计: </span>
            <span>4020</span>
          </div>
          </div>
        </div>
      </div>
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
    .order_products {
      padding-right: 20px;
      .order_products_title {
        font-size: 16px;
        height: 50px;
        line-height: 50px;
      }
      .order_product_list {
        .product_list {
          ul {
            width: 100%;
            li {
              font-size: 16px;
              float: left;
              width: 20%;
              height: 80px;
              line-height: 80px;
              text-align: center;
              img {
                height: 100%;
              }
            }
          }
          .priduct_price_total {
            text-align: right;
            font-size: 14px;
            .express_fee, .product_coupon, .total_prcie {
              height: 50px;
              line-height: 50px;
              position: relative;
            }
            p {
              position: absolute;
              font-size: 14px;
              color: #aaa;
              height: 30px;
              right: 0;
              top: 22px;
            }
            span {
              font-size: 16px;
            }
            .cost {
              margin-right: 10px;
            }
          }
        }
      }
      .product_img,
      .product_name,
      .product_price,
      .product_number,
      .product_total {
        text-align: center;
        display: inline-block;
        width: 20%;
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
</style>
