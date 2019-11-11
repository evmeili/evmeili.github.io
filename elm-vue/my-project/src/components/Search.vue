<template>
<div>
  <van-icon name="location-o" />
  <van-search  background="blue"
   v-model="value" placeholder="请输入搜索关键词" 
   show-action shape="round" 
   @search="onSearch"
  >
    <div slot="action" @click="onSearch">搜索</div>
  </van-search>
</div>

</template>
<script>
import Vue from "vue";
import { Search,Icon } from "vant";
Vue.use(Search).use(Icon);
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    //搜索
    onSearch() {
      this.$store.dispatch('setAuthor', {
        value:this.value
      })
      window.console.log(this.value)
    }
  }
};
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
.van-search .van-cell {
    flex: 1;
    padding: 5px 15px 5px 23px;
    background-color: transparent;
}

.van-icon-location-o{
    position: absolute;
    font-size: 20px;
    top: 18px;
    left: 18px;
    color: blue;
}

</style>
