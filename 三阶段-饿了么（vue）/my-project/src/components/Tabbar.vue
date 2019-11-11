<template>
<van-tabbar
  v-model="active"
  active-color="#07c160"
  inactive-color="#000"
>
  <van-tabbar-item to="/main/home" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item to="/main/find" icon="search">发现</van-tabbar-item>
  <van-tabbar-item to="/main/order" icon="orders-o" @click="findname">订单</van-tabbar-item>
  <van-tabbar-item to="/main/mine" icon="manager-o">我的</van-tabbar-item>
</van-tabbar>
</template>
<script>
import Vue from 'vue';
import { Icon } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem).use(Icon);
import {getcookie} from '../assets/comm.js';
export default {
    data() {
      return {
        active: 0,
        num:'',
      }
    },
    methods: {
      findname() {
        this.num = getcookie('name')
        if(this.num) {
          this.$axios.get("http://localhost:3000/orderuser", {
            params: {
              usrname: this.num
            }
          }).then(({ data}) => {
            window.console.log(data)
            if(data.length!=0) {
              this.$store.dispatch("setUser",{
                status: true,
                data
              });
            
            }
          })
        } 
      }
    }
}
</script>