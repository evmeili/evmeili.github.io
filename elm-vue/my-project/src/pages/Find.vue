<template>
    <div class="find">
        <Topfind/>
        <div class="activity-recommend wall-16TaH"></div>
        <div class="box3">
            <div class="box3-1">
                <h2>限时好礼</h2>
                <h4>金币换豪礼</h4>
            </div>
            <div class="box3-2">
                    <div class="d-box3">
                        <div class="d3">限时优惠</div>
                        <div class="d4">
                            <img src="https://cube.elemecdn.com/e/02/d86b57a31e7a0740ab3af99bdd97cjpeg.jpeg?x-oss-process=image/format,webp" alt="">
                        </div>
                        <span class="d5">3元品质联盟红包</span>
                        <span class="d6" style="color: #fe8f73">90金币</span>
                    </div>
                    <div class="d-box3">
                        <div class="d3">特价换购</div>
                        <div class="d4">
                            <img src="https://cube.elemecdn.com/2/20/b0d0d94605fc31b9ee3ab651aa7c4jpeg.jpeg?x-oss-process=image/format,webp" alt="">
                        </div>
                        <span class="d5">数码经络按摩仪</span>
                        <span class="d6" style="color: #fe8f73">9金币</span>
                    </div>
                    <div class="d-box3">
                        <div class="d3">特价换购</div>
                        <div class="d4">
                            <img src="https://cube.elemecdn.com/f/93/a096dd082d6c42f600e460fffaa39jpeg.jpeg?x-oss-process=image/format,webp" alt="">
                        </div>
                        <span class="d5">悬浮机械手感套装</span>
                        <span class="d6" style="color: #fe8f73">9金币</span>
                    </div>
                </div>
                <van-cell value="查看更多" @click="seeMore" />
                <div class="footer"></div>
            </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);
import Topfind from '../components/find.vue'
export default {
    components: {
        Topfind
    },
    methods: {
        seeMore() {
            this.$router.push({
                name: "more"
            })
        }
    }
}
</script>
<style>
.activity-recommend{
    width:100%;
    height: 10px;
    background-color: #f5f5f5;
}
 .box3 {
  width: 100%;
  height: 80.53333vw;
  margin-top: 2.66667vw;
  position: relative;
}
.box3-1{
    text-align: center;
    font-size: 18px;
}

.box3-2 {
  height: 44.53333vw;
  margin-top: 4vw;
  display: flex;
}

 .box3 .box3-2 div {
  width: 79.3%;
  display: flex;
  flex-direction: column;
  text-align: center;
}

 .d3 {
  width: 13.06667vw;
  height: 4.66667vw;
  background-color: #000;
  font-size: 2.66667vw;
  color: #fff;
  line-height: 4.66667vw;
}

.d4 {
  width: 26.66667vw;
  height: 11.06667vw;
  margin-top: 8vw;
  margin-bottom: 10.13333vw;
}

.box3 .box3-2 div .d5,
 .box3 .box3-2 div .d6 {
  font-size: 3.2vw;
  line-height: 6.4vw;
}
.van-cell__value--alone {
    color: #999;
     font-size: .846667rem;
    text-align: center;
}
.footer{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
}

</style>