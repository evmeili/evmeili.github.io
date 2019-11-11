<template>
    <van-grid :column-num="5">
        <van-grid-item v-for="(g,index) in grids" :key="index" :icon="g.img" :text="g.name" />
    </van-grid>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
import { Grid, GridItem } from 'vant';
Vue.use(Grid).use(GridItem);
export default{
    data() {
        return {
            grids: []
        }
    },
    created() {
        this.loadMpre();
    },
    methods: {
        loadMpre() {
            axios.get("http://localhost:3000/grid").then(({ data }) => {
                window.console.log(data);
                this.grids = data
            })
        }
    }

};
</script>
<style>
[class*=van-hairline]::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border: 1px solid #fff;
    -webkit-transform: scale(.5);
    transform: scale(.5);
}
</style>