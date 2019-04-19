<template>
  <div class="home">
    <div class="data_show">
      <div class="count">
        <Count></Count>
      </div>
      <div class="echarts">
       <LineEch></LineEch>
      </div>
    </div>
    <div class="notepad">
      <div class="">
        <div class="title">待办事项</div>
        <Input v-model="textarea" type="textarea"  placeholder="添加事项" :rows="4" @on-enter="textChange"/>
        <ul class="notepad_list">
          <li v-for="item in messageList" :key="item.text">
            <span class="text">
              {{item.text}}
            </span>
            <span class="date">
              <Icon type="md-alarm" /> {{ item.date | date}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LineEch from './components/Line_ech'
import Count from './components/count'
export default {
  name: 'home',
  components: {
    LineEch,
    Count
  },
  data () {
    return {
      textarea: '',
      messageList: [
        {
          text: '王老板',
          date: new Date()
        }
      ]
    }
  },
  mounted () {},
  methods: {
    textChange (val) {
      this.messageList.push({
        text: this.textarea,
        date: new Date()
      })
      this.textarea = ''
    }
  }
}
</script>
<style lang="scss">
  .home {
    display: flex;
    height: 100%;
    .data_show {
      flex: 3;
      .count {
        height: 30%;
        ul {
          padding-top: 50px;
        }
        li {
          text-align: center;
          float: left;
          width: 33%;
          .data_count,.data_text {
            font-size: 18px;
            height: 50px;
            line-height: 50px;
          }
        }
      }
      .echarts {
        height: 70%;
        // #echart_line {
        //   width: 100%;
        //   height: 300px;
        // }
      }
    }
    .notepad {
      textarea{ resize:none;}
      flex: 2;
      padding: 0 20px;
      border-left: 1px solid #ccc;
      .title {
        text-align: center;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
      }
      .notepad_list {
        padding-top: 20px;
        li {
          height: 30px;
          line-height: 30px;
          span {
            font-size: 16px;
          }
          .date {
            float: right;
            margin-right: 10px;
          }
        }
      }
    }
  }
</style>
