<template>
	<div class='video_box' v-show='isShow==true'>
		<div class='top'>
			<h3>{{this.currVideo.title}}</h3>
			<i class='fa fa-times fa-2x' @click='cancelBtn'></i>	
		</div>
		<iframe :src="currVideo.videoUrl"
				height='90%'
				width='100%'
			    frameborder="0"></iframe>
	</div>
</template>
<script>
import Events from '../store/myStore.js'
export default{
	name:'video_box',
	data(){
		return {
			currVideo:{},
			isShow:false
		}
	},
	methods:{
		videoData(data){
			this.currVideo = data;
			this.isShow = true
		},
		cancelBtn(){
			this.isShow = false;
		}
	},
	computed:{

	},
	watch:{
		videoState(news,olds){

		}
	},
	created(){
		Events.$on('add_vedio',this.videoData);
	}
}	
</script>
<style lang='less' scoped>
@orange:#ff6700;
.video_box{
	height: 600px;
	width:880px;
	background-color:#f5f5f5;
	position: fixed;
	top: 200px;
	left: 50%;
	margin-left: -440px;
	iframe{
		position: absolute;
		bottom: 0;
		left: 0;
	}
	.top{
		height: 60px;
		display: flex;
		flex-flow: nowrap row;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 15px;
		h3{
			font-size: 18px;
			line-height: 30px;
		}
		i{
			display: block;
			text-align: center;
			line-height: 28px;
			width: 30px;
			height: 30px;
			border-radius: 50%;
			color: #757575;
			transition: all ease .4s;
			cursor: pointer;
			&:hover{
				color: #fff;
				background-color: #e53935;
			}
		}


	}
	
}	
</style>