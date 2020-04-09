<template>
    <div class="login_cont">
        <img src="../assets/login.jpg" alt="">
        <div class="login_from">
            <div class="opacity"></div>
            <div class="form_cont">
                 <h3>随便起的名字股份有钱公司</h3>
                <el-form  :model="loginFrom" ref="loginFrom" label-width="70px" style="width:81%;margin:15px auto;">
                    <el-form-item label="用户名" prop="name" :rules="[
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ]">
                        <el-input v-model="loginFrom.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码"  prop="password" :rules="{
                        required: true, message: '请输入密码', trigger: 'blur'
                    }">
                        <el-input v-model="loginFrom.password" autocomplete="off" type="password"></el-input>
                    </el-form-item>
                </el-form>
                <el-button type="primary" style="margin-top:20px;width:100px;"  @click="onlogin('loginFrom')">登陆</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'login',
  data() {
      return {
          loginFrom: {
              name: '',
              password: ''
          }
      }
  },
  mounted() {

  },
  methods: {
      onlogin (loginFrom) {
        this.$refs[loginFrom].validate((valid) => {
          if (valid) {
            this.$router.push({path:`/home`})
          } else {
            alert('error submit!!');
            return false;
          }
        });
          
      }
  }
  
}
</script>
<style scoped>
    .login_cont{
        position: relative;
        text-align: center;
    }
    .login_cont img {
        width: 100%;
        height: 100%;
    }
    .login_from{
        position: absolute;
        left:34%;
        top:20%;
        width: 450px;
        height: 400px;
    }
    .opacity{
        position: absolute;
        left: 0;
        top: 0;
        background: #ccc;
        opacity: .7;
        width: 100%;
        height: 100%;
    }
    .form_cont{
        position: absolute;
        left:0;
        top:0;
        width: 88%;
        height: 88%;
        margin:25px;
    }
    .form_cont h3{
        font-size: 28px;
        line-height: 100px;
    }
  
</style>
<style>
  .el-input__inner{
        background: none!important;
        border:1px solid #888;
    }
</style>