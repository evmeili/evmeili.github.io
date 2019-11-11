<template>
<div>
<div class="bottomNav-cartfooter_1Xb8t_0" style="z-index: 11;">
    <span role="button" aria-label="购物车" attr-quantity="0" class="bottomNav-carticon_E1nII_0 bottomNav-empty_3zwfj_0">
        <van-icon color="#4c5861" info="2" name="shopping-cart" />
    </span> 
    <div role="button" aria-label="购物车有商品0件，共0元，另需配送费12元。" class="bottomNav-cartInfo_3l5zP_0">
        <p class="bottomNav-carttotal_1DJt5_0">
            <span class="bottomNav-carttotalOriginal_2tu8R_0">未选购商品</span> 
        </p> 
        <p class="bottomNav-cartdelivery_1TjrT_0">另需配送费12元</p>
    </div>
    <p role="button" class="submit-btn-submitbutton_3t114_0 submit-btn-disabled_1DLSl_0">
        <span>¥25起送</span>
    </p>
 </div>
</div>
</template>
<script>
import Vue from 'vue';
import { Icon } from 'vant';
Vue.use(Icon);
export default {

}
</script>
<style>
.bottomNav-cartfooter_1Xb8t_0 {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    padding-left: 2.106667rem;
    padding-left: 21.066667vw;
    background-color: rgba(61,61,63,.9);
    height: 1.28rem;
    height: 12.8vw;
    justify-content: space-between;
}
.bottomNav-carticon_E1nII_0 {
    position: absolute;
    left: .32rem;
    left: 3.2vw;
    bottom: .2rem;
    bottom: 2vw;
    width: 1.333333rem;
    width: 13.333333vw;
    height: 1.333333rem;
    height: 13.333333vw;
    box-sizing: border-box;
    border-radius: 100%;
    background-color: #3190e8;
    border: .133333rem solid #444;
    border: 1.333333vw solid #444;
    box-shadow: 0 -0.08rem 0.053333rem 0 rgba(0,0,0,.1);
    box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0,0,0,.1);
    will-change: transform;
}
.submit-btn-submitbutton_3t114_0 {
    height: 100%;
    width: 2.8rem;
    width: 28vw;
    background-color: #38ca73;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: .4rem;
    font-weight: 700;
    line-height: 1.28rem;
    line-height: 12.8vw;
}
.van-icon-shopping-cart{
    font-size: 25px;
    padding: 6px;
}
</style>