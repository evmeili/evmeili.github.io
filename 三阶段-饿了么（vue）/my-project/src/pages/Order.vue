<template>

  <div v-show="gallery.status">

    <van-checkbox-group class="card-goods" v-model="checkedGoods" ref="checkboxGroup">

      <van-checkbox

        class="card-goods__item"

        v-for="(item,index) in gallery.data" 

        :key="index"

        :name="item.name"

      >

        <van-card

          :title="item.name"


          :num="item.num"

          :price="item.price"

          :thumb="item.img"

        />
         <van-stepper v-model="item.num"  @change= "change(item.name,item.num)"/>
          <van-icon color="red" name="delete" @click = "deletes(item.name)" />

      </van-checkbox>

    </van-checkbox-group>
    <div class="footer_car">
    <van-submit-bar

      :price="totalPrice"

      :disabled="!checkedGoods.length"

      :button-text="submitBarText"

      @submit="onSubmit"

    />
   
    <van-checkbox v-model="jisuan" class="quan" @click = "zong(jisuan)"></van-checkbox>
    <div class="del">
      删除
    </div>
    </div>
    

  </div>

</template>



<script>
import Vue from 'vue';
import {getcookie} from '../assets/comm.js';
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast, Stepper,Icon } from 'vant';
Vue.use(Stepper).use(Icon);



export default {

  components: {

    [Card.name]: Card,

    [Checkbox.name]: Checkbox,

    [SubmitBar.name]: SubmitBar,

    [CheckboxGroup.name]: CheckboxGroup

  },



  data() {

    return {
      checked: false,
      value: 1,

      checkedGoods: [],
      username: ''
    
      
    };

  },



  computed: {

    submitBarText() {
      const count = this.checkedGoods.length;
      
      return '结算' + (count ? `(${count})` : '');
      
    },
    totalPrice() {
      return  (this.gallery.data.reduce((total, item) => total + (this.checkedGoods.indexOf(item.name) !== -1 ? item.price*1*item.num : 0), 0))*100;
    },
    gallery() {
      return this.$store.getters.getUser
    },
    jisuan() {
      let checked=false
      if(this.checked){
         this.$refs.checkboxGroup.toggleAll(true)
      } else if(this.checkedGoods.length!=this.$store.getters.getUser.data.length) {
        checked = false
        
      } else if(this.checkedGoods.length==this.$store.getters.getUser.data.length) {
        checked = true
        
      }
      return checked
    },


  },



  methods: {
    
    onSubmit() {
      Toast('点击结算');
    },
    change(item,num) {
       this.username = getcookie('name')
      this.$axios.get("http://localhost:3000/addto", {
          params: {
             shopname: item,
             num: num,
             username: this.username
          }
      });

    },
    deletes(name) {
      this.username = getcookie('name')
      this.res = confirm('您确定删除吗？');
      if(this.res){
        this.$axios.get("http://localhost:3000/delete", {
            params: {
               shopname: name,
               username: this.username
            }
        });
      }

    },

    alldelet() {
      this.username = getcookie('name')
      this.res = confirm('您确定删除吗？');
      if(this.res){
        this.$axios.get("http://localhost:3000/alldelete", {
            params: {
               username: this.username
            }
        });
      }

    },
    zong(jisuan) {
      
      this.$refs.checkboxGroup.toggleAll(!jisuan);
    }


  }

};

</script>



<style lang="less">
    .card-goods {
      
        padding: 10px 0;
     

        background-color: #fff;



        &__item {
        
            position: relative;

            background-color: #fafafa;



        .van-checkbox__label {

            width: 100%;

            height: auto; // temp

            padding: 0 10px 0 15px;

            box-sizing: border-box;

        }
   



        .van-checkbox__icon {

            top: 50%;

            left: 10px;

            z-index: 1;

            position: absolute;

            margin-top: -10px;

        }
        .van-stepper{
          position: absolute;
          top: 69px;
          left: 214px;
        }
        .van-icon-delete{
        font-size: 20px;
        position: absolute;
        top: 69px;
        left: 321px;
      }



        .van-card__price {

          color: #f44;

        }
      }

    }

    .footer_car{
        width: 100%;
        position: fixed;
         bottom: 49px;
         left: 0;
         z-index:3;
    
        .van-submit-bar {
         
         position: relative;
         background-color: #fff;
         user-select: none;
            
            .van-button__text {
                color: #fff;
            }
        }
        .quan{
            position: absolute;
            top: 20px;
            left: 20px;
            z-index: 102;
        }
        .del{
            position: absolute;
            top: 20px;
            left: 60px;
            z-index: 102;
        }
    }


    

</style>