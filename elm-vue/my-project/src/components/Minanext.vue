<template>
<div class="box">
<van-row style="background-color: #fff;">
  <van-col span="8" style="border-right:0.5px solid #ccc">
    <p class="p1"><van-icon color="red" size=26px name="bill" /></p>
    <p>红包</p>
   </van-col>
  <van-col span="8">
    <p class="p1"><van-icon color="green" size=26px name="gold-coin" /></p>
    <p>金币</p>
  </van-col>
</van-row>
<van-cell title="我的地址" icon="location" class="address" is-link />
<van-cell title="金币商城" icon="bag" class="shop" is-link />
<van-cell title="分享拿20元现金" icon="point-gift" class="money" is-link  />
<van-cell title="我的客服" icon="service" class="customer" is-link />
<van-cell title="下载饿了么APP" icon="smile" is-link  />
<van-cell title="规则中心" icon="column" is-link  />
<div class="profile-2dyk_">
<a href="" @click="singout">退出登录</a></div>
</div>
</template>

<script>
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);

import { Row, Col } from 'vant';
Vue.use(Row).use(Col);
import { Icon } from 'vant';
Vue.use(Icon);
import {removeCookie,getcookie} from '../assets/comm.js';
export default {
   data() {
      return{
         usename: ''
      }
   },
   methods: {
      singout() {
        this.usename=getcookie('name');
         if(this.usename) {
            removeCookie('name', '', -1);
         }

      }
   }
}
</script>
<style>
.van-col {
    float: left;
    box-sizing: border-box;
    min-height: 1px;
    width:50%;
    text-align: center;
    height:80px;
}
.p1{
        margin-top: 13px;
}
.profile-2dyk_ {
    text-align: center;
    font-size: .4rem;
    line-height: 36px
}
.profile-2dyk_ a{
    color: #4da6f0;
}
.van-cell {
   background-color: #fff;
}
.address{
   margin-top: 13px;
}
.shop{
   margin-top: 13px;
}
.customer{
    margin-top: 13px;
}
.address .van-icon {
    color: blue;
}
.shop .van-icon-bag{
   color: green;
}
.money .van-icon-point-gift{
   color:red;
}
.van-icon{
   color:blue;
}

</style>
