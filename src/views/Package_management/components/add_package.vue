<template>
  <div class="add_package">
    <div class="package_return">
      <Button type="info" @click.native="$router.push({name: 'package_management'})">返回</Button>
    </div>
    <div class="package_name">
      <span class="label_title">套餐名称:</span>
      <Input v-model="package_name" style="width:260px;" placeholder="套餐名称"/>
    </div>
    <div class="package_price">
      <span class="label_title">套餐售价:</span>
      <Input v-model="package_price" style="width:260px;" placeholder="套餐售价"/>
    </div>
    <div class="package_stock">
      <span class="label_title">套餐库存:</span>
      <Input v-model="package_stock" style="width:260px;" placeholder="套餐库存"/>
    </div>
     <!-- 商品列表 -->
    <div class="product_list">
      <span class="label_title">商品列表</span>
      <Select v-model="model10" multiple style="width:260px" :max-tag-count='2' @on-change="productList">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <div class="list_content">
      </div>
    </div>
    <!-- 套餐图片 -->
    <div class="package_img">
      <span class="label_title">套餐图片</span>
      <div class="package_content">
        <Upload
          ref="upload"
          :show-upload-list="false"
          :format="['jpg','jpeg','png']"
          action="//jsonplaceholder.typicode.com/posts/"
          :before-upload="beforeUpload"
          style="display: inline-block;width:60px;"
          type="drag"
        >
          <div
            style="width: 60px;height:60px;line-height: 60px;"
          >
            <Icon type="md-add" size="20"></Icon>
          </div>
        </Upload>
        <div  class="package_image">
          <img :src="package_img" alt="">
        </div>
      </div>
    </div>
    <!-- 套餐商品 -->
    <div class="package_product">
      <span class="label_title">套餐商品</span>
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
    <div class="submt">
      <Button type="info">提交</Button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      package_name: '',
      package_price: '',
      package_stock: '',
      package_img: '',
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
    beforeUpload (file) {
      const fr = new FileReader()
      fr.readAsDataURL(file)
      fr.onload = () => {
        this.package_img = fr.result
      }
    },
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

<style lang="scss" scoped>
@import './add_package.scss'
</style>
