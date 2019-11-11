<template>
<div class="login">

<div class="App-1EAON">
    <div class="App-3Q8Qb">
        <div class="LoginHeader-1jXn6">
            <img src="//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" class="LoginHeader-85WpV">
        </div>
    </div>
    <div>
     <van-cell-group>
      <van-field 
      v-model="username"
      required
      clearable
      label="用户名"
      right-icon="question-o"
      placeholder="请输入用户名"
      @blur="yanzheng"
      
      />
      <span v-show="istur">用户名不合法</span>
    <van-field
      v-model="password"
      type="password"
      label="密码"
      placeholder="请输入密码"
      required
      
     />
     <span v-show="nameistrue">wowowo</span>
     </van-cell-group>
    </div>
    <section class="MessageLogin-15xD9">
      新用户登录即自动注册，并表示已同意
      <a href="">《用户服务协议》</a>
      和
      <a href="">《隐私权政策》</a></section>
    <button class="SubmitButton-2wG4T" @click="goinser">
      登录
    </button>
    <span v-show="islogin">登录失败</span>
    <a href="javascript:;" class="MessageLogin-31EIr">关于我们</a>
</div>
</div>
</template>
<script>
import Vue from 'vue';
import { Field } from 'vant';
import qs from 'Qs';
Vue.use(Field);
import {setcookie} from '../assets/comm.js';
export default {
    data() {
        return{
            username: "",
            password: "",
            newname: '',
            user:'',
            istur:false,
            data:[],
            nameistrue: false,
            islogin: false

           
        }
    },
    methods: {
        yanzheng() {
            let reg = /^1[3-9]\d{9}$/;
            let kai = reg.test(this.username)
            if(kai){
              this.istur= false;
            }else {
                this.istur= true;
            }

        },
        goinser() {
            window.console.log(this.username);
            this.$axios.post("http://localhost:3000/login",qs.stringify({
                name: this.username,
                password:this.password
            })).then(({data}) => {
                window.console.log(data)
                if(data.length !=0 ) {
                    this.user=data[0].name
                    setcookie('name',this.user)
                    this.$router.push({
                        name: "home"
                    });
                    this.islogin= false;
                } else {
                    this.islogin= true;
                }
                
               
            });
           
            
        }
    },

}
</script>
<style>
.login{
    padding:40px 60px 87px 60px;
}
@media (max-width: 768px)
.App-1EAON {
    align-items: center;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
}
.goto{
    text-align: right;
    margin-bottom: 20px;
    color: blue;
}
.App-3Q8Qb {
    width: 300px;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
}
.LoginHeader-1jXn6 {
    text-align: center;
   
}
.LoginHeader-1jXn6 .LoginHeader-85WpV {
    height: 56px;
}
img {
    max-width: 100%;
}
.MessageLogin-iYvWA {
    margin-top: 16px;
}
.MessageLogin-FsPlX {
    position: relative;
    margin-bottom: 16px;
    height: 48px;
    width:240px;
    font-size: 14px;
    background: #fff;
}
.MessageLogin-FsPlX>input {
    width: 100%;
    height: 100%;
    left: 0;
    padding-left: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #333;
}
.CountButton-3e-kd {
    padding: 0;
    border-radius: 6px;
    color: #ccc;
    background: transparent;
    text-align: center;
    font-size: 14px;
    line-height:31px;
    position: absolute;
    left:176px;
    top: 10px;
}
button, input {
    outline: none;
    border: none;
    font-size: inherit;
    font-family: inherit;
}
.MessageLogin-15xD9 {
    margin-top: 12px;
    color: #999;
    font-size: 14px;
    line-height: 20px;
    
}
.MessageLogin-15xD9 a {
    color: #2395ff;
}


.SubmitButton-2wG4T {
    display: block;
    width: 100%;
    height: 42px;
    margin-top: 30px;
    border-radius: 4px;
    background: #4cd96f;
    color: #fff;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    line-height: 42px;
}
.MessageLogin-31EIr {
    display: block;
    margin-top: 20px;
    text-align: center;
    color: #999;
    font-size:14px;
}
</style>