<template>
  <div class="top_contaner">
    <header class='top-bar'>
       <div class="container">
         <ul>
           <li v-for='(item,index) in navs'>
           <a :href="item.url">{{item.name}}</a>
           <span class='line' v-show='index != navs.length-1'>|</span></li>
         </ul>
         <div class='login'>
           <a>登录</a>
           <span class='line'>|</span>
           <a>注册</a>
           <div class="shop_car">
              <i class='fa fa-cart-arrow-down icon-cart'></i>
              <span>购物车</span>
              <span>（{{car_num}}）</span>
              <template >
                <div class='car_content'>
                   <span>购物车中还没有商品，赶快选购吧！</span>
                </div>
              </template>
           </div>  
         </div>
       </div>
    </header>
   
  </div>
</template>

<script>
export default {
  name: 'top_contaner',
  data () {
    return {
       navs:[
          {name:'小米商城',url:'#'},
          {name:'MIUI',url:'#'},
          {name:'米聊',url:'#'},
          {name:'游戏',url:'#'},
          {name:'多看阅读',url:'#'},
          {name:'云服务',url:'#'},
          {name:'小米网移动版',url:'#'},
          {name:'问题反馈',url:'#'},
          {name:'select Region',url:'#'}
       ],
       car_num:0,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@font-coler:#b0b0b0;
@orange-color:#ff6700;
.line{
  color:@font-coler;
  /* margin-left: 5px; */
}
.icon-cart{
  font-size: 16px;
}
.top-bar{
  width: 100%;
  height: 40px;
  background-color: #333;
  position: relative;
  z-index: 999;
  ul{
    li{
      display: block;
      float: left;
      height: 40px;
      line-height: 40px;
      margin-right: 5px;
      a{
        color:@font-coler;
        font-size: 12px;
      }
      a:hover{
         color:#fff;
      }
      
    }
  }
  .login{
    float: right;
    height: 40px;
    a{
      display: inline-block;
      height: 100%;
      color:@font-coler;
      font-size: 12px;
      line-height: 40px;
      cursor: pointer;
      margin-right:5px;
    }
    a:hover{
       color:#fff;
    }
    .shop_car{
      display: inline-block;
      height: 40px;
      width: 120px;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      color:@font-coler;
      background-color: #424242;
      position: relative;
      
      .car_content{
        height: 0px;
        width: 300px;
        position: absolute;
        right: 0;
        top: 40px;
        box-shadow: 0 0 5px #ccc;
        transition: all ease-in-out .6s;
        /* 溢出部分隐藏 */
        overflow:hidden;
        background-color: #fff;
        opacity: 0;
        span{
          display: block;
          margin: 20px auto;
          color:@font-coler;
        }
      }
    }
    .shop_car:hover{
        background-color: #fff;
        color:@orange-color;
    }
    .shop_car:hover .car_content{
       height: 100px;
       opacity: 1;
    }
  }
}

</style>
