<template>
  <div class="product_holiday">
    <div class="class_return">
      <Button type="info" @click.native="$router.push({name: 'holiday'})">返回</Button>
    </div>
    <!-- 节日名称 -->
    <div class="holiday_name">
      <span class="title_label">节日名称</span>
      <Input v-model="holiday_name" placeholder="Enter something..." style="width: 300px"/>
    </div>
    <!-- 节日时间 -->
    <div class="holiday_date">
      <span class="title_label">节日时间</span>
      <DatePicker type="daterange" placeholder="节日时间" style="width: 300px" @on-change="dateChange"></DatePicker>
    </div>
    <!-- 商品列表 -->
    <div class="product_list">
      <span class="title_label">商品列表</span>
      <Select v-model="model10" multiple style="width:260px" :max-tag-count='2' @on-change="productList" filterable>
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <div class="list_content">
      </div>
    </div>
    <!-- 商品 -->
    <div class="product">
      <span class="title_label">节日商品</span>
      <div class="product_content">
        <ul>
          <li v-for="item in products" :key="item">
            <span class="product_text">{{item}}</span>
          </li>
        </ul>
      </div>
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
      holiday_name: '',
      holiday_img: '',
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
        this.holiday_img = fr.result
      }
    },
    productList (value) {
      this.products = [...value]
    },
    removeList (item) {
      console.log(item)
      this.products.splice(this.products.indexOf(item), 1)
    },
    dateChange (data, index) {
      console.log(data, index)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './add_holiday.scss'
</style>
