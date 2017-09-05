<template>
	<div class='video'>
		<div class='container'>
			<div class='top'>
				<h3>{{title}}</h3>
				<a href='#'>查看全部
					<i class='fa fa-1x fa-chevron-circle-right'></i>
				</a>
			</div>
			<ul class='bottom'>
				<li v-for='item in videos' @click='send(item)'><a href="javascript:;">
					<div class='img_box'>
						<img :src="item.imgUrl" alt="">
						<div class='play_video'>
							<i class='fa fa-play fa-1x'></i>
						</div>
					</div>
					<p>{{item.title}}</p>
					<p>{{item.desc}}</p>
				</a></li>
			</ul>
			
		</div>
	</div>
</template>
<script>
import Events from '../store/myStore.js'

export default{
	name:'video',
	data(){
		return {
			video_state:{},
			title:'视频',
			videos: [{
				videoUrl: 'http://hd.mi.com/f/zt/hd/misc/youku.html?vid=XMTY1ODg5ODA0MA==',
				imgUrl: 'http://i3.mifile.cn/a4/73d67577-cbc7-4bd0-8678-4b1e95f4f4dc',
				title: '红米年度品牌视频',
				desc: '一亿人喜爱你，是一种责任。'
			},
			{
				videoUrl: 'http://hd.mi.com/f/zt/hd/misc/youku.html?vid=XMTY1OTg3NjQ4OA==',
				imgUrl: 'http://i3.mifile.cn/a4/f7e434fb-8ce4-4442-bf78-0d66e409dfc3',
				title: '小米笔记本Air最全介绍视频',
				desc: '带独立显卡的轻薄笔记本'
			},
			{
				videoUrl: 'http://hd.mi.com/f/zt/hd/misc/youku.html?vid=XMTY1OTg4NjY0OA==',
				imgUrl: 'http://i3.mifile.cn/a4/e2df3ad8-4147-44e1-8a54-b6bcafdc6c66',
				title: '小米笔记本Air可靠性测试视频',
				desc: '小米笔记本Air是如何炼成的？'
			},
			{
				videoUrl: 'http://hd.mi.com/f/zt/hd/misc/youku.html?vid=XMTU2NDM3NjEzMg==',
				imgUrl: 'http://i3.mifile.cn/a4/T1v3LgBTxv1RXrhCrK.jpg',
				title: '小米Max 绝美外观视频',
				desc: '6.44" 大屏黄金尺寸，看什么都震撼'
			}]
		}
	},
	methods:{
		send(data){
			data.isShow = true;
			Events.$emit('add_vedio',data);
		}
	}
}
</script>
<style scoped lang='less'>
@orange:#ff6700;
.video{
	background-color: #eee;
}
.top{
	display: flex;
	justify-content: space-between;
	padding: 50px 0 15px 0; 
	h3{
		font-size: 22px;
	}
	a{
		font-size: 16px;
		i{
			color: #ccc;
		}
		&:hover {
			color: @orange;
		}
		&:hover i{
			color: @orange;
		}
	}	
}

.bottom{
	background-color: #fff;
	height: 300px;
	width: 100%;
	display: flex;
	>li{
		flex: 1;
		margin-right: 10px;
		height: 100%;
		width: 289px;
		transition: all .4s;
		.img_box{
			height: 65%;
			background-color: red;
			position: relative;
			img{
				height: 100%;
				width: 100%;
			}
			.play_video{
				position: absolute;
				bottom: 20px;
				left: 30px;
				border: 2px solid #fff;
				width: 35px;
				height: 21px;
				line-height: 21px;
				border-radius: 10px;
				text-align: center;
				z-index: 800;
				i{
					color: #fff;
				}
			}
		}
		p{
			margin: 20px auto;
			text-align: center;
		}
		p:nth-of-type(1){
			font-size: 14px;
		}
		p:nth-of-type(2){
			font-size: 12px;
			color: #aaa;
		}
		&:hover{
			box-shadow: 8px 9px 8px #ccc;
		}
		&:hover .play_video{
			i{
				color: @orange;
			}
			border-color: @orange;
		}
	}
	>li:nth-of-type(4){
		margin-right: 0;
	}
}
</style>