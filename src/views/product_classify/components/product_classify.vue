<template>
  <div class="product_classify">
    <div class="class_return">
      <Button type="info" @click.native="$router.push({name: 'classify_list'})">返回</Button>
    </div>
    <!-- 分类名称 -->
    <div class="classify_name">
      <span class="title_label">分类名称</span>
      <Input v-model="classify_name" placeholder="Enter something..." style="width: 300px"/>
    </div>
     <!-- 商品列表 -->
    <!-- <div class="product_list">
      <span class="title_label">商品列表</span>
      <Select v-model="model10" multiple style="width:260px" :max-tag-count='2' @on-change="productList">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <div class="list_content">
      </div>
    </div> -->
    <!-- 类别图片 -->
    <div class="classify_img">
      <span class="title_label">类别图片</span>
      <div class="classify_content">
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
        <div  class="classify_image">
          <img :src="classify_img" alt="">
        </div>
      </div>
    </div>
    <!-- 商品 -->
    <!-- <div class="product">
      <span class="title_label">商品</span>
      <div class="product_content">
        <ul>
          <li v-for="item in products" :key="item">
            <span class="product_text">{{item}}</span>
          </li>
        </ul>
      </div>
    </div> -->
    <div class="submit">
      <Button type="info">提交</Button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      classify_name: '',
      classify_img: '',
      model10: ['泡泡糖', '麦芽糖', '卫龙辣条'],
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
      ],
      products: []
    }
  },
  methods: {
    beforeUpload (file) {
      const fr = new FileReader()
      fr.readAsDataURL(file)
      fr.onload = () => {
        this.classify_img = fr.result
      }
    },
    productList (value) {
      this.products = [...value]
    },
    removeList (item) {
      console.log(item)
      this.products.splice(this.products.indexOf(item), 1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './product_classify.scss'
</style>
