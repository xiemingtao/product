<template>
  <div class="add_voucher">
    <Button @click.native="$router.push({name: 'voucher'})" type="info">返回</Button>
    <div class="voucher_title">
      <span class="label_title">兑换券名称:</span>
       <Input v-model="value" placeholder="兑换券名称" style="width: 300px" />
    </div>
    <div class="voucher_list">
      <span class="label_title">商品列表</span>
      <Select v-model="model10" multiple style="width:260px" :max-tag-count='2' @on-change="productList">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>
    <div class="voucher_product">
      <span class="label_title">兑换商品</span>
      <div class="product_content">
        <div class="content_title">
          <div class="product_title">商品</div>
          <div class="product_num">数量</div>
        </div>
        <ul>
          <li v-for="item in products" :key="item.id">
            <span class="product_text">{{item.name}}</span>
            <Input :v-model="item.price" style="width:60px;"/>
          </li>
        </ul>
      </div>
    </div>
    <div class="voucher_num">
      <span class="label_title">兑换券生成数量:</span>
      <Input v-model="voucher_num" placeholder="兑换券名称" style="width: 300px" />
    </div>
    <div class="submit">
      <Button type="info">提交</Button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      voucher_num: '',
      model10: ['泡泡糖', '麦芽糖', '卫龙辣条'],
      products: [],
      cityList: [
        {
          value: '泡泡糖',
          label: '泡泡糖'
        },
        {
          value: '麦芽糖',
          label: '麦芽糖'
        },
        {
          value: '卫龙辣条',
          label: '卫龙辣条'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ]
    }
  },
  methods: {
    productList (productlsit) {
      this.products.splice(0)
      productlsit.forEach(item => {
        this.products.push({
          name: item,
          price: ''
        })
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.add_voucher {
  width: 100%;
  height: 100%;
  padding: 10px 10px 10px 40px;
  .voucher_num {
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    margin-top: 10px;
    .number {
      text-indent: 20px;
    }
  }
  .submit {
    margin-top: 40px;
  }
}
.label_title {
  height: 80px;
  line-height: 80px;
  font-size: 20px;
  margin-right: 20px;
}
.product_content {
    li {
      height: 40px;
      line-height: 40px;
    }
    .product_text {
      width: 200px;
      text-align: center;
      display: inline-block;
    }
  }
  .content_title {
    height: 50px;
    line-height: 50px;
    .product_title {
      float: left;
      width: 200px;
      text-align: center;
    }
    .product_num {
      width: 60px;
      float: left;
      text-align: center;
    }
  }
</style>
