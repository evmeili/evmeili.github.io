<template>
    <div>
        <div class="f_box" v-for="(a,index) in listTu" :key="index">
          <div>
            <img class="f_img" v-bind:src="a.img" alt="">
          </div>
          <div class="f_name">
            <p v-text="a.name"></p>
          </div>
        </div>
        <van-tabs v-model="activeName">
            <div class="recommend-1M-lc">
                <div>
                    <p class="recommend-1kbzU">商家推荐</p>
                    <div class="recommend-38t08">
                        <div class="recommend-1U7u5" v-for="(g,index) in listTu" :key="index" :id="g._id">
                            <div class="recommend-3EB-z" v-for="(item,index) in g.smallimg" :key="index">
                                <img v-bind:src="item" alt="" class="recommend-16ZqP">
                                <div>
                                    <p class="food-card-1ppXR">饿了么超值套餐ST</p>
                                    <p class="food-card-3O1zm">
                                            月售7 好评率100%
                                    </p>
                                    <div class="food-card-2h4ZL">
                                        <p class="food-card-wVKdM" style="color: rgb(255, 83, 57);">
                                        <small>¥</small>
                                        <small v-text="g.price"></small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <van-tab title="点餐" name="a">
                <ul class="ul_d">
                    <li class="li_d" @click="pages(0)">热门商品</li>
                    <li class="li_d" @click="pages(1)">商家推荐</li>
                    <li class="li_d" @click="pages(2)">新品上线</li>
                </ul>
                <div  v-for="(g,index) in listTu" :key="index" :id="g._id" >
                    <div v-for="(item,index) in g.smallimg" :key="index" class="d_card">
                    <van-card class="card"
                          :price="g.price"
                          :desc="g.send"  
                          :title="g.name"
                          :thumb="item"
                          @click="showGallery(item,g.name,g.price)"
                    />
                     <div class="i_box" @click="addcar">
                     <van-icon name="plus" />
                     </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="评价" name="b">评价2</van-tab>
            <van-tab title="商家" name="c">内容 3</van-tab>
        </van-tabs>
        <van-popup
          v-model="gallery.status"
          closeable
          position="bottom"
          :style="{ height: '93%' }"
          get-container=".bottomNav-cartfooter_1Xb8t_0"
        >
        <div class="galley">
            <div>
                <img class="d_img" v-bind:src="gallery.img" alt="">
            </div>
            <div class="d_name">
                <p v-text="gallery.name"></p>
                <p style="color: red;" v-text="`￥${gallery.price}`"></p>
                <div class="i_box">
                    <van-icon name="plus" />
                </div>
            </div>
           
        </div>
        </van-popup>
        <div>
            <Detailfoot/>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Tab, Tabs, Card,Popup,Icon,Swipe, SwipeItem } from 'vant';
Vue.use(Tab).use(Tabs).use(Card).use(Popup).use(Icon).use(Swipe).use(SwipeItem);
import Detailfoot from '../components/DetailFoot.vue';
import {getcookie} from '../assets/comm.js';
export default {
    data() {
        return {
        listTu: [],
        detailId: '',
        activeName: 'a',
        show: '',
        username: ''
        }

    },
    components: {
        Detailfoot
       
    },
    created() {
        //解路由传过来的商品名字
        this.detailId = this.$route.params.name;
        window.console.log(this.detailId);
    },
    mounted () {
        //加载列表页
        this.loadData();
    },
    methods: {
        loadData() {
            this.$axios.get("http://localhost:3000/detail", {
                params: {
                    name: this.detailId
                }
            }).then(({ data }) => {
                this.listTu= this.listTu.concat(data);
            }); 
        },
        //楼层跳跃
        pages(num){
            let dong = document.querySelector('.van-tabs__content')
            if(num==0){
                dong.scrollTo(0,0);
            } else if(num==1) {
                dong.scrollTo(0,50);
            }else if(num==2) {
                dong.scrollTo(0,500);
            }
        },
        //显示画廊
        showGallery(img,name,price) {
            this.$store.dispatch("setGallery", {
                status: true,
                img,
                name,
                price
            });
        },
        //加入购物车
        addcar() {
            this.username = getcookie('name')
            if(this.username) {
                this.$axios.get("http://localhost:3000/addcar", {
                    params: {
                        usrname: this.username,
                        name: this.detailId
                    }
                }).then(({ data }) => {
                    window.console.log(data)
                })
            }
        }

    },
    computed: {
        gallery() {
            return this.$store.getters.getGallery;
        }
    }
    

};
</script>
<style>
.recommend-1M-lc {
    padding-top: 4.266667vw;
    background-color: #fff;
}
.recommend-1kbzU {
    padding-left: 4.266667vw;
    color: #333;
    font-size: .426667rem;
    font-weight: 700;
    margin-bottom: 2.666667vw;
}
.recommend-38t08 {
    overflow-x: scroll;
    display: flex;
    margin-bottom: 15px;
}
.recommend-1U7u5 {
    display: flex;
}
.recommend-3EB-z {
    flex: none;
    width: 32vw;
    margin-right: 2.666667vw;
}
.recommend-3EB-z:first-child {
    margin-left: 4.266667vw;
}
.recommend-16ZqP {
    display: block;
    width: 32vw;
    height: 32vw;
    border-top-left-radius: .8vw;
    border-top-right-radius: .08rem;
}
.food-card-1ppXR {
    color: #333;
    font-size: .373333rem;
    margin: 1.866667vw 0 .933333vw;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.food-card-3O1zm {
    color: #999;
    font-size: .266667rem;
    margin-bottom: 1.866667vw;
    min-height: 1em;
}
.food-card-2h4ZL {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: .266667vw;
}
.food-card-wVKdM {
    font-size: .48rem;
    color: #ff5339;
}
.f_box{
    width: 100%;
}
.f_img{
    width:100%;
    height: 120px;
}
.f_name {
    text-align: center;
    font-size: 26px;
}
.van-tabs__content{
    width: 100%;
    height:340px;
    margin-bottom:59px;
    overflow: auto;
}

.van-tab__pane, .van-tab__pane-wrapper {
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    display: flex;
}
.ul_d{
    height: 100%;
    z-index: 1;
}
.li_d{
    width: 45px;
    font-size: 11px;
    border: none;
    background: #f5f5f5;
}
.van-button__text{
    color: red;
}
.van-popup{
    margin-bottom: 69px;
}
.van-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0);
}
.galley{
    margin-top: 40%;
  
}
.d_img{
    width: 100%;
    height: 74vw;
}
.d_name{
    text-align: center;
    font-size: 16px;
    position: relative;
}
.i_box{
    width: 17px;
    background-color: rgb(35, 149, 255);
    position: absolute;
    left: 234px;
    top: 62px;
    z-index: 3;
    border-radius: 50%;
}
.d_card{
    position: relative;
}
.van-icon-plus{
    color: white;
}
.van-popup__close-icon--top-right {
    top: 33px;
    right: 16px;
}
</style>