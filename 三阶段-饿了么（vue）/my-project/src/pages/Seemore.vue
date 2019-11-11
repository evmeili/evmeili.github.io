<template>
<div>
    <div class="db-credits is-fixed-ios is-nologin" realid="459511">
        <div class="db-credits-nologin-wrapper">
            <p>兑换前请先登录</p>
            <a href="###" @click ="toLogin" class="db-credits-nologin-btn">立即登录</a>
        </div>
    </div>
    <div class="kong">
    <Find/>
    </div>
    <div class="list">
        <ul>
            <van-list
              :offset="20"
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
            <li v-for="(a,index) in list_f" :key="index">
            <div class="list_up">
                <img v-bind:src="a.img" alt="">
            </div>
            <div class="down">
                <div class="down1">
                    <div v-text="a.hui"></div>
                    <span v-text="a.name"></span>
                </div>
                <div class="down2">
                    <div class="d_left" v-text="a.money"></div>
                    <div class="d_right">兑换</div>
                </div>
            </div>
            </li>
            </van-list>
        </ul>
    </div>
</div>
</template>
<script>
import Vue from 'vue';
import { List } from 'vant';
Vue.use(List);
import Find from '../components/find.vue';
export default {
    data() {
        return {
            loading: false,
            finished: false,
            list_f: []
        };
    },
    components: {
        Find
    },
    methods: {
        onLoad() {
            this.$axios.get("http://localhost:3000/list").then(({data}) => {
                this.list_f = this.list_f.concat(data);
                window.console.log(data)
                //加载状态结束
                this.loading = false;
                if(this.list_f.length >=40) {
                    this.finished = true;
                }
            });
            window.console.log("到底部了")
        },
        //跳转登录页
        toLogin() {
            this.$router.push({
                name: "login",
            });
        }

    }
};
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
.db-credits.is-nologin {
    height: 2.33333333rem;
    line-height: 2.33333333rem;
    
}
.db-credits{
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
}
.db-credits {
    background-color: #fff;
    display: flex;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    font-size: .29333333rem;
    color: #333;
}
.db-credits.is-nologin .db-credits-nologin-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    font-size: 14px;
}
 .db-credits-nologin-wrapper a {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    width: 70px;
    color: #fff;
    background: #fd5746;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border-radius: .4rem;
}
.kong{
    padding: 3.3rem 1.4rem 1.0rem 1.4rem;
    background: rgb(249, 249, 249);

}
.list{
    width: 100%;

}
ul,li{
    list-style: none;
}
.van-list{
    width: 100%;
    display: flex;
    flex-wrap:wrap;
}

li{
    width: 41%;
    padding: 8px 15px;
    border: 1px solid #f5f5f5;


}
.list_up{
    width: 130px;
    height:60px;
    margin-left: 21%;
    padding-top: 15px;
}
.list_up img{
    width: 100%;
    height:100%;
}
.down{
    margin-top: 20px;
   
}
.down1{
    width: 164px;
    font-size: 12px;
     overflow: hidden;
     white-space: nowrap;
     text-overflow: ellipsis;
}
.down1 div{
    color: white;
    float: left;
    background-color: rgb(240, 217, 141);
}
.down2{
    color:red;
     font-size: 12px;
}
.d_right{
    float:right;
    border: 1px solid red;
    border-radius: 20%;
}
</style>