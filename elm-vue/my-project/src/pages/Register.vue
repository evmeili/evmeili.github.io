<template>
<div class="register_go">
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
      @blur="yanreg"
      
      />
      <span v-show="istoreg">用户名不合法</span>
    <van-field
      v-model="password"
      type="password"
      label="密码"
      placeholder="请输入密码"
      required
      @blur="mimareg"
      
     />
     <span v-show="nametoreg">密码不合法</span>
     </van-cell-group>
    </div>
    <section class="MessageLogin-15xD9">
      新用户登录即自动注册，并表示已同意
      <a href="">《用户服务协议》</a>
      和
      <a href="">《隐私权政策》</a></section>
    <button class="SubmitButton-register" @click="regist">
      注册
    </button>
    <span v-show="toname">用户名已存在</span>
    
    <a href="javascript:;" class="MessageLogin-31EIr">关于我们</a>
</div>

</div>
</template>
<script>
import qs from 'Qs';
export default {
    data() {
        return {
            username: "",
            password: "",
            istoreg: false,
            nametoreg: false,
            regdata: [],
            toname: false
        }
    },
    methods: {
        yanreg() {
                 let regto = /^1[3-9]\d{9}$/;
                 let isreg = regto.test(this.username)
                 if(isreg) {
                    this.istoreg = false;
                    this.regdata.push(1);
                } else {
                 this.istoreg = true;
                 window.console.log(1)
                }
            },
           
        mimareg() {
            let regmi = /^\S{5,8}$/;
            let mima = regmi.test(this.password)
            if(mima) {
                this.regdata.push(2);
                this.nametoreg = false;
            }else {
                this.nametoreg = true;
                window.console.log(2)
            }
        },
        //注册
        regist() {
            if(this.regdata.length==2) {
                    this.$axios.post("http://localhost:3000/regist",qs.stringify({
                    name: this.username,
                    password:this.password
                })).then(({data}) => {
                    if(data.length ==0 ) {
                         this.$router.push({
                            name: "login"
                        })
                    } else {
                        this.toname=true;
                    }
                   
                })
            } else {
                 window.console.log(9999);
            }

            

        }
    },
    
}

</script>
<style>
.register_go{
    padding:40px 60px 87px 60px;
}
.SubmitButton-register {
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
</style>