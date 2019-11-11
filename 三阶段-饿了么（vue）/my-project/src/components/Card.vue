<template>
<van-list
  :offset="20"
  v-model="loading"
  :finished="finished"
  finished-text=""
  @load="onLoad"
>
<van-card class="home_list" 
  v-for="(item,index) in cardComputed"
      :key="index"
      :id="item._id"
   :price="item.price"
  :desc="item.send" 
  :title="item.name"
  :thumb="item.img"
  @click="navToDetal(item.name)"
>
  <div slot="tags">
    <van-tag plain type="danger">"标签"</van-tag>
  
  </div>
</van-card>
</van-list>
</template>
<script>
import Vue from 'vue';
import { Card, Tag, Button, List } from 'vant';
Vue.use(List);
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(List);
export default {
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            card: [],
            id:""
            
        };
    },
    computed: {
        search() {
            return this.$store.getters.getAuthor;
        },
        cardComputed() {
            if(this.search.value) {
                return this.card.filter(item => {
                    window.console.log(item);
                    if(item.name.indexOf(this.search.value) >=0) {
                        return item;
                    }
                });
            } else {
                return this.card;
            }
        }
    },
    created() {
        this.$parent.$data.test = "abc";
        window.console.log(this); 
    },
    methods: {
        onLoad() {
            this.$axios.get("http://localhost:3000/card").then(({ data }) => {
                this.card= this.card.concat(data);
                window.console.log(data)
                //加载状态结束
                this.loading = false;
                //数据全部加载完成
                if(this.card.length >= 30) {
                    this.finished = true;
                   
                }
            });
             window.console.log("到底部了")
            
        },
        //跳转列表页
        navToDetal(items) {
        this.$router.push({
            name: "detail",
            params: { name: items}
        });
        window.console.log(this);
        },
      
    }
};

</script>
<style>
.van-list{
    margin-bottom: 70px;
   
}
.home_list{
     background-color: #fff;
}
</style>
