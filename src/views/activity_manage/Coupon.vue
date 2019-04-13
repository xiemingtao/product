<template>
  <div class="coupon">
    <div class="coupon_title">
      <span>优惠券名称:</span>
      <span></span>
    </div>
    <div class="coupon_type">
      <div class="type_title">
        <span>优惠券类型:</span>
      </div>
    </div>
    <div class="coupon_Img">
      <div class="img_title">
        <span>优惠券图片</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods:{

    }
  }
</script>

<style lang='scss'>
.coupon {
  width: 100%;
  height: 100%;
  padding: 10px 10px 10px 40px;
  .coupon_title {
    height: 80px;
    line-height: 80px;
    font-size: 20px;
  }
  .coupon_Img {
    height: 80px;
    line-height: 80px;
    font-size: 20px;
    .img_title {
      font-size: 20px;
    }
  }
  .coupon_type {
    .type_title {
      font-size: 20px;

    }
  }
}
</style>
