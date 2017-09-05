<template>
  <div id="app">
    <top-container></top-container>
    <top-nav></top-nav>
    <top-banner></top-banner>
    <top-sub></top-sub>
    <goods-hardware></goods-hardware>
    <goods-Hot></goods-Hot>
    <goods-around></goods-around>
    <goods-recommend></goods-recommend>
    <goods-content></goods-content>
    <sub-video></sub-video>
    <video-box></video-box>
  </div>
</template>

<script>
import topSub from './components/top_sub.vue'
import topContainer from './components/top_container.vue'
import topNav from './components/top_nav.vue'
import topBanner from './components/top_banner.vue'
import goodsHardware from './components/goods_hardware.vue'
import goodsHot from './components/goods_hot.vue'
import goodsAround from './components/goods_around.vue'
import goodsRecommend from './components/goods_recommend.vue'
import goodsContent from './components/goods_content.vue'
import video from './components/video.vue'
import videoBox from './components/video_box.vue'


export default {
  name: 'app',
  components:{
    'top-container':topContainer,
    'top-nav':topNav,
    'top-banner':topBanner,
    'top-sub':topSub,
    'goods-hardware':goodsHardware,
    'goods-Hot':goodsHot,
    'goods-around':goodsAround,
    'goods-recommend':goodsRecommend,
    'goods-content':goodsContent,
    'sub-video':video,
    'video-box':videoBox
  }
}
</script>

<style>
body{
height: 2000px;
}
#app {
  position: relative;  
}
</style>
