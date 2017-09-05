<template>
	<div class='slide' >
		<transition-group name='fade' >
			<a class='item' href="#" v-for='(item,index) in banners' 
					v-show='currentPage==index'
					:key='index'
					ref="slide"><img :src="item.imgUrl" alt=""></a>
		</transition-group>
		<a class='leftslide' @click='prePlay'>
			<i class='fa fa-chevron-left fa-3x slidebtn'></i>
		</a>
		<a class='rightslide' @click='nextPlay'>
		<!-- fa-3x 调整大小 -->
			<i class='fa fa-chevron-right fa-3x slidebtn'></i>
		</a>
	</div>
</template>
<script>
	export default{
		name:'slide',
		data(){
			return{
				currentPage:0,
				clock:''
			}
		},
		props:['banners'],
		methods:{
			autoPlay(){
				const slides = this.$refs.slide;
				const that = this;
				setInterval(function(){
					that.nextPlay();
				},3000)
			},
			nextPlay(){
				if(this.currentPage<this.banners.length-1){
					this.currentPage++
				}else{
					this.currentPage=0;
				}
			},
			prePlay(){
				if(this.currentPage!=0){
					this.currentPage--
				}else{
					this.currentPage=this.banners.length-1;
				}
			}

		},
		// 用created的话，autoPlay中无法调取。
		mounted(){
			this.autoPlay();
		}

	}
</script>
<style scoped lang='less'>
.slide{
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: -1;
	.item{
		height: 100%;
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		img{
			height: 100%;
			width: 100%;
		}
	}
}
.leftslide,.rightslide{
	display: block;
	z-index: 1000;
	position: absolute;
	height: 70px;
	width: 40px;
	background-color: red;
	top: 50%;
	margin-top: -30px;
	background-color:rgba(0,0,0,0);
	cursor: pointer;
}
.leftslide:hover,.rightslide:hover{
	background-color:rgba(0,0,0,0.3);
}
.slidebtn{
	text-align: center;
	line-height: 70px;
	color: #eee;
	height: 100%;
	width: 100%;
}
.leftslide{
	left: 235px;
}
.rightslide{
	right: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease-in;
  opacity: 1;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0;
}
</style>