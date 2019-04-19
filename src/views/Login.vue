<template>
    <div class="login">
      <div class="login-con">
        <div style="text-align: center;">
          <p class="title">后台管理系统</p>
          <div class="form-con">
            <Form
              ref="loginForm"
              :model="loginForm"
              :rules="ruleCustom"
              :label-width="60"
              label-position="left"
              >
                <FormItem label="用户名:" prop="name">
                  <Input v-model="loginForm.name" placeholder="请输入用户名(4-16位字母或数字)" :autofocus="true"/>
              </FormItem>
                <FormItem label="密码:" prop="password">
                  <Input v-model="loginForm.password" placeholder="请输入密码" type="password"/>
              </FormItem>
              <FormItem>
                  <Button
                    type="primary"
                    style="height: 38px;font-size: 14px;"
                    long
                    @click="handleSubmit"
                      >登 录</Button>
              </FormItem>
            </Form>
              <!--<p class="login-tip">输入任意用户名和密码即可</p>-->
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  data () {
    const username = (rule, value, callback) => {
      let reg = /^[a-zA-Z0-9]{4,16}$/
      if (value === '') {
        callback(new Error('账号不能为空'))
      } else if (!reg.test(value)) {
        callback(new Error('请输入4-16位字母或数字'))
      } else {
        callback()
      }
    }
    const password = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        name: 'admin',
        password: ''
      },
      ruleCustom: {
        password: [
          // { required: true, message: '密码不能为空', trigger: 'blur' }
          { validator: password, trigger: 'blur' }
        ],
        name: [
          // { required: true, message: '账号不能为空', trigger: 'blur' },
          { validator: username, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          if (this.loginForm.name === 'admin') {
            let date = new Date()
            date.setTime(date.getTime() + 60 * 60 * 1000)
            this.$Message.success('登陆成功')
            Cookies.set('user', this.loginForm.name, { expires: date })
            this.$router.push({
              name: 'home'
            })
          } else {
            this.$Message.error('用户名错误!')
          }
        } else {}
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login{
  width: 100%;
  height: 100%;
  background: #50c7d4;
  position: relative;
  &-con{
    position: relative;
    left: 50%;
    top: 16%;
    transform: translateX(-50%);
    width: 400px;
    .title {
      color: white;
      font-size: 24px;
    }
    .form-con{
      margin-top: 30px;
      padding: 40px 40px 10px 40px;
    }
  }
  .ivu-form-item {
    margin-bottom: 40px;
  }
}
input::-webkit-input-placeholder { /* WebKit browsers */
    color: #ddd;
    opacity: 1;
}
input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #ddd;
    opacity: 1;
}
input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #ddd;
    opacity: 1;
}
input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #ddd;
    opacity: 1;
}
</style>
