<template>
  <div class="delivery">
    <Button @click="$router.push({name: 'order_list'})" type="info">返回</Button>
    <div class="delivery_number">运单号</div>
    <div class="logistics">物流商</div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss">
.delivery {
  width: 100%;
  height: 100%;
  padding: 30px;
  .delivery_number,.logistics {
    height: 50px;
    line-height: 50px;
    font-size: 20px;
  }
}
</style>
