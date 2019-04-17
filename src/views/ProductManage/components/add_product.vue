<template>
  <div class="add_product">
    <div class="product_name">
      <span class="product_label">商品名称:</span>
      <Input v-model="product_name" placeholder="Enter something..." style="width: 300px"/>
    </div>
    <div class="product_name">
      <span class="product_label">商品介绍:</span>
      <Input v-model="product_introduce" placeholder="Enter something..." style="width: 300px"/>
    </div>
    <div class="product_classification">
      <span class="product_label">商品分类:</span>
      <Select v-model="model1" style="width:200px">
        <Option
          v-for="item in classification_list"
          :value="item.value"
          :key="item.value"
        >{{ item.value }}</Option>
      </Select>
    </div>
    <!-- 商品规格选项 -->
    <div class="spec">
      <span class="product_label">商品规格</span>
      <div class="tan_spec">
        <Button @click="specDefault" :class="[isSpecs ? 'active' :'']">默认标准规格</Button>
        <Button @click="specs" :class="[isSpec ? 'active' :'']">多规格支持</Button>
        <Button type="primary" size="small" @click="addSpec" v-show="isSpec" class="add_spec">添加</Button>
      </div>
      <div class="spec_title">
        <div class="spec_name">规格名</div>
        <div class="spec_value">规格值</div>
      </div>
      <div class="spec_list">
        <ul class="clearfix" v-for="( item, index) in spec_list" :key="item.id">
          <li class="name">
            <Select v-model="item.spec_name" style="width:100px" @on-change="specChange">
              <Option v-for="item in cityList" :value="item.label" :key="item.label" :label="item.value"></Option>
            </Select>
          </li>
          <li class="value">
            <Input
              v-model="item.spec_value"
              placeholder="Enter something..."
              style="width: 80%"
              @on-change="specValue"
            />
          </li>
          <li class="remove">
            <Button
              type="primary"
              shape="circle"
              icon="ios-remove"
              size="small"
              @click="spec_remove(item.id)"
              v-show="index!==0"
            ></Button>
          </li>
        </ul>
        <!-- <Button type="info" @click="addSku"  class="sku_btn">生成sku</Button> -->
      </div>
    </div>
    <!-- 商品库存 -->
    <div class="product_stock">
      <span class="product_label">SKU</span>
      <div class="spec_title">
        <div class="stock_name">规格</div>
        <div class="stock_value">库存</div>
        <div class="stock_price">价格</div>
        <div class="stock_img">图片</div>
      </div>
      <div class="stock_list">
        <ul class="clearfix" v-for="(item) in sku_list" :key="item.id">
          <li>{{item.sku_name}}</li>
          <li>
            <Input v-model="item.sku_stock" placeholder="Enter something..." style="width: 80%"/>
          </li>
          <li>
            <Input v-model="item.sku_price" placeholder="Enter something..." style="width: 80%"/>
          </li>
          <li @click="getid(item.id)">
            <Upload
              v-show="item.sku_img ? false : true"
              ref="upload"
              :show-upload-list="false"
              :format="['jpg','jpeg','png']"
              action="//jsonplaceholder.typicode.com/posts/"
              :on-progress="onProgress"
              :before-upload="beforeUpload"
              style="display: inline-block;width:40px;"
            >
              <div
                style="width: 40px;height:40px;line-height: 40px; border:1px dashed #ccc;border-radius: 4px;cursor: pointer;"
              >
                <Icon type="ios-camera" size="20"></Icon>
              </div>
            </Upload>
            <div class="sku_img" v-show="item.sku_img ? true : false">
              <img :src="item.sku_img" alt>
              <Icon type="ios-close-circle" class="upload_icon" size="20" @click="RemoveImg(item.id)"/>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 商品标签 -->
    <div class="product_tag">
      <span class="tag_title">属性标签</span>
      <Input v-model="tag_text" placeholder="属性标签" style="width: 300px" @on-enter="enter(tag_text)" />
      <div class="tag_content">
        <Tag
         v-for="item in tag_list"
         :key="item"
         closable
         :name="item"
         @on-close="close"
          >{{item}}</Tag>
      </div>
    </div>
    <!-- 商品类型 -->
    <div class="product_type">
      <span class="type_title">商品类型</span>
    </div>
    <!-- 是否上架 -->
    <div class="product_ground">
      <span class="ground_title">是否上架</span>
      <Select v-model="isGround" style="width:100px">
        <Option value="yes">是</Option>
        <Option value="no">否</Option>
      </Select>
    </div>
    <!-- 首页照片 -->
    <div class="home_img">
      <span class="img_title">首页照片</span>
      <div class="img_content">
       <Upload
          ref="upload"
          :show-upload-list="false"
          :format="['jpg','jpeg','png']"
          :max-size="2048"
          :before-upload="homeUplaod"
          type="drag"
          action="//jsonplaceholder.typicode.com/posts/"
          style="display: inline-block;width:58px;">
          <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="md-add" size="20"></Icon>
          </div>
        </Upload>
        <img :src="home_img" class="img">
      </div>
    </div>
    <!-- 图片画廊 -->
    <div class="img_list">
      <span class="img_list_title">图片画廊</span>
      <div class="img_list_content">
        <div class="demo-upload-list" v-for="item in uploadList" :key="item.name">
          <template >
            <img :src="item.url">
            <div class="demo-upload-list-cover">
              <Icon type="ios-eye-outline" @click.native="handleView(item.url)"></Icon>
              <Icon type="ios-trash-outline" @click.native="handleRemove(item.name)"></Icon>
            </div>
          </template>
        </div>
      <Upload
        ref="upload"
        :show-upload-list="false"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/"
        style="display: inline-block;width:58px;">
        <div style="width: 58px;height:58px;line-height: 58px;">
          <Icon type="md-add" size="20"></Icon>
        </div>
      </Upload>
        <Modal title="View Image" v-model="visible">
            <img :src="imgName" v-if="visible" style="width: 100px;">
        </Modal>
      </div>
    </div>
    <!-- 商品参数 -->
    <div class="product_parameter">
      <span class="parameter_title">商品参数</span>
      <div class="parameter_content">
        <div class="address">
          <span class="label">生产地:</span>
          <Input v-model="address_value" placeholder="生产地" style="width: 300px" />
        </div>
        <div class="licence">
          <span class="label">许可证编号:</span>
          <Input v-model="licence_value" placeholder="许可证编号" style="width: 300px" />
        </div>
        <div class="prime">
          <span class="label">保质期:</span>
          <Input v-model="prime_value" placeholder="保质期" style="width: 300px" />
        </div>
        <div class="weight">
          <span class="label">重量:</span>
          <Input v-model="weight_value" placeholder="重量" style="width: 300px" />
        </div>
      </div>
    </div>
    <!-- 商品详情 -->
    <div class="product_details">
      <span class="details_title">商品详情</span>
      <div class="details_content">
        <div ref="editor" style="text-align:left"></div>
      </div>
    </div>
    <div class="submit">
      <Button type="info">添加商品</Button>
    </div>
  </div>
</template>

<script>
import E from 'wangeditor'
export default {
  /* eslint-disable */
  data () {
    return {
      address_value: '',
      licence_value: '',
      prime_value: '',
      weight_value: '',
      details: '',
      product_name: '苏格兰软糖',
      cityList: [
        {
          value: '颜色',
          label: 'color'
        },
        {
          value: '尺寸',
          label: 'size'
        },
        {
          value: '口味',
          label: 'flavor  '
        }
      ],
      classification_list: [
        {
          value: '肉类'
        },
        {
          value: '蔬菜类'
        },
        {
          value: '有机类'
        }
      ],
      model1: '',
      sku_list: [],
      spec_list: [
        {
          id: 1,
          spec_name: '',
          spec_value: ''
        }
      ],
      stock_result: '',
      skus: [],
      isSpec: false,
      isSpecs: true,
      product_introduce: '这是一个糖果',
      isGround: '是',
      defaultList: [
        {
          'name': 'a42bdcc1178e62b4694c830f028db5c0',
          'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
        },
        {
          'name': 'bc7521e033abdd1e92222d733590f104',
          'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
        }
      ],
      imgName: '',
      visible: false,
      uploadList: [],
      editor: null,
      value: '',
      tag_text: '',
      tag_list: [],
      home_img: ''
    }
  },
  methods: {
    specChange (val) {
      this.addSku()
    },
    specValue (value) {
      this.addSku()
    },
    addSpec () {
      let id = this.spec_list[this.spec_list.length - 1].id + 1
      this.spec_list.push({
        id: id,
        spec_name: '',
        spec_value: ''
      })
    },
    spec_remove (id) {
      let index = this.spec_list.findIndex(item => item.id === id)
      this.spec_list.splice(index, 1)
      this.addSku()
    },
    onProgress (response, file, fileList) {},
    beforeUpload (file) {
      const fr = new FileReader()
      fr.readAsDataURL(file)
      fr.onload = () => {
        this.stock_result.sku_img = fr.result
      }
    },
    getid (id) {
      this.stock_result = this.sku_list.find(item => item.id === id)
    },
    RemoveImg (id) {
      this.stock_result = this.sku_list.find(item => item.id === id)
      this.stock_result.sku_img = ''
    },
    // 数组去重并将val值相加
    filterList (arr) {
      let newfood = []
      let temp = {}
      for (let i in arr) {
        let key = arr[i].spec_name
        if (temp[key]) {
          temp[key].spec_name = temp[key].spec_name
          temp[key].spec_value = temp[key].spec_value + ',' + arr[i].spec_value
        } else {
          temp[key] = {}
          temp[key].spec_name = arr[i].spec_name
          temp[key].spec_value = arr[i].spec_value
        }
      }
      for (var k in temp) {
        newfood.push(temp[k])
      }
      return newfood
    },
    // 生成sku列表
    skuList (array) {
      if (array.length < 2) return array[0] || []
      return [].reduce.call(array, (col, set) => {
        var res = []
        col.forEach((c) => {
          set.forEach((s) => {
            var t = [].concat(Array.isArray(c) ? c : [c])
            t.push(s)
            res.push(t)
          })
        })
        return res
      })
    },
    // 仅仅数组去重
    listFilter (arr) {
      let obj = {}
      let array = arr.reduce((cur, next) => {
        obj[next.sku_name] ? '' : obj[next.sku_name] = true && cur.push(next)
        return cur
      }, [])
      return array
    },
    addSku () {
      this.sku_list.splice(0)
      // 过滤掉没有规格值的数据
      let isSpecList = this.spec_list.filter(item => item.spec_name)
      // 然后对过滤后的数组进行数组去重并value相加
      let sku_list_new = this.filterList(isSpecList)
      // 将新数据生成sku数组因为生成函数需要加入数组模式,所以需要处理一下数据
      let arr = []
      // arr是生成sku函数的形参,是一个数组的形式
      sku_list_new.forEach(item => {
        arr.push(Array.from(new Set(item.spec_value.split(',').filter(item => item))))
      })
      // 将数组中空数组过滤掉
      arr = arr.filter(item => item.length)
      // 调用函数生成sku
      this.skus = this.skuList(arr)
      this.skus.forEach(item => {
        if (this.sku_list.length === 0) {
          this.sku_list.push({
            id: 1,
            sku_name: typeof item === 'string' ? item : item.join(','),
            sku_stock: '',
            sku_price: '',
            sku_img: ''
          })
        } else {
          let id = this.sku_list[this.sku_list.length - 1].id + 1
          this.sku_list.push({
            id: id,
            sku_name: typeof item === 'string' ? item : item.join(','),
            sku_stock: '',
            sku_price: '',
            sku_img: ''
          })
        }
      })
    },
    specs () {
      this.isSpec = true
      this.isSpecs = false
    },
    specDefault () {
      this.isSpec = false
      this.isSpecs = true
      this.sku_list.splice(0)
      this.spec_list = [{
        id: 1,
        spec_name: '',
        spec_value: ''
      }]
    },
    handleView (name) {
      this.imgName = name
      this.visible = true
    },
    handleRemove (file) {
      this.uploadList.splice(this.uploadList.indexOf(file), 1)
    },
    handleFormatError (file) {
      this.$Notice.warning({
        title: 'The file format is incorrect',
        desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
      })
    },
    handleMaxSize (file) {
      this.$Notice.warning({
        title: 'Exceeding file size limit',
        desc: 'File  ' + file.name + ' is too large, no more than 2M.'
      })
    },
    handleBeforeUpload (file) {
      console.log(file)
      const fr = new FileReader()
      fr.readAsDataURL(file)
      fr.onload = () => {
        this.uploadList.push({
          name: file.name,
          url: fr.result
        })
      }
      console.log(this.uploadList)
    },
    enter (val) {
      this.tag_list.push(val)
      this.tag_text = ''
    },
    close (event, name) {
      this.tag_list.splice(this.tag_list.indexOf(name),1)
    },
    homeUplaod (file) {
      const fr = new FileReader()
      fr.readAsDataURL(file)
      fr.onload = () => {
        this.home_img = fr.result
      }
    }
  },
  mounted () {
    this.editor = new E(this.$refs.editor)
      this.editor.customConfig.onchange = (html) => { // 获取内容
        this.details = html
      }
      this.editor.customConfig.showLinkImg = true
      this.editor.create();
      this.editor.txt.html(this.details)
  }
}
</script>

<style lang="scss">
@import './add_product.scss'
</style>
