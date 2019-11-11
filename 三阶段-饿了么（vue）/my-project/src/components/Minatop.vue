<template>
<div class="profile-3g0uv">
  <div class="index-18Ili">
    <img src="../assets/ele.png">
  </div>
  <div class="profile-xfCcC">
    <p class="profile-1_mtk" style="font-size: 20px">
      <span class="sign" @click="sign">登录/</span>
      <span class="register" @click="register">注册</span>
    </p>
    <p class="profile-1UP72">
    <span>登录后享受更多特权</span>
    </p>
  </div>
  <span class="profile-2XuMq">
  <van-icon name="arrow" />
  </span>
</div>
</template>
<script>
import Vue from 'vue';
import { Icon } from 'vant';
Vue.use(Icon);
export default{
   methods:  {
    sign() {
      this.$router.push({
        name: "login",
      })
    },
      register() {
         this.$router.push({
         name: "register",
      })
    }
  }
}
</script>
<style scoped lang="css">
.profile-3g0uv{
  background-image: linear-gradient(90deg,#0af,#0085ff);
    height:100px;
  display: flex;
  justify-content:space-around;
  align-content:center;
}
.index-18Ili{
  width: 50px;
   height: 50px;
   padding-top:25px;
}

.index-18Ili img{
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.profile-xfCcC{
  width:150px;
  height:50px;
  padding-top:25px;
}

.profile-xfCcC p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color:#fff;
}
.profile-2XuMq{
  height:10px;
  padding-top:30px;
}

</style>
