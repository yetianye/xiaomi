<template>
	<div class='content_slide book' ref='box'>
		<h3>{{contents.title}}</h3>
		<div class='detail'>
			<ul ref='dom'>
				<li v-for='(item,index) in contents.list' ><a href="#">
					<h2>{{item.title}}</h2>
					<p>{{item.desc}}</p>
					<span></span>
					<img :src="item.imgUrl" alt="">
				</a></li>
			</ul>
		</div>
		<div class='leftBtn' @click='evtright'><i class='fa fa-chevron-left fa-2x'></i></div>
		<div class='rightBtn' @click='evtleft'><i class='fa fa-chevron-right fa-2x'></i></div>
		<ul class='dot'>
			<li v-for='(item,index) in contents.list' :class='{currLi:index===currIndex}'>
				<a href="#"></a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'goods_content_slide',
		data(){
			return {
				currLi:0,
				currIndex:0
			}
		},
		props:['contents'],
		methods:{
			evtleft(){
				const dom = this.$refs.dom;
				if(Math.abs(this.currLi)<dom.offsetWidth-250){
					this.currIndex++;
					this.currLi-=250
					dom.style.transform='translateX('+this.currLi+'px)'
				}
			},
			evtright(){
				const dom = this.$refs.dom;
				if(this.currLi<0){
					this.currIndex--;
					this.currLi+=250
					dom.style.transform='translateX('+this.currLi+'px)'
				}
			}
		},
		mounted(){
			const box = this.$refs.box;
			box.classList.add(this.contents.type)
		}

	}
</script>
<style scoped lang='less'>
@orange:#ffac13;
@green:#83c44e;
@red:#e53935;
@blue:#2196f3;

.content_slide{
	height: 100%;
	width: 100%;
	position: relative;
	transition: all ease-in .3s;

	.detail{
		display: block;
		height: 350px;
		width: 250px;
		margin: 0 auto;
		overflow: hidden;
		>ul{
			width: 400%;
			height: 100%;
			transition: all ease .5s;
			background-color: #fff;
			>li{
				float: left;
				height: 350px;
				width: 250px;
				h2{
					font-size: 22px;
					text-align: center;
				}
				p{
					color: #ccc;
					text-align: center;
					padding: 30px;
				}
				img{
					display: block;
					height: 150px;
					width: 220px;
					margin: 0 auto;
				}
			}
		}
	}
	.leftBtn,.rightBtn{
		position: absolute;
		height: 40px;
		width: 25px;
		color: #fff;
		background-color: rgba(0,0,0,.3);
		top: 50%;
		text-align: center;
		line-height: 50px;
		cursor: pointer;
		transition: all ease-in .2s;
		opacity: 0;
	}
	.rightBtn{
		right: 0;
	}
	&:hover .leftBtn,&:hover .rightBtn{
		opacity: 1;
	}
	
	.dot{
		position: absolute;
		bottom: 40px;
		width: 130px;
		height: 10px;
		left: 50%;
		margin-left: -60px;
		li{
			float: left;
			box-sizing: border-box;
			height: 8px;
			width: 8px;
			margin-right: 20px;
			border-radius: 50%;
			/* border: 3px solid @orange;	 */
			background-color: #ccc;
			vertical-align:;
			transition: all .5s;
			border-width: 0;
			border-color:rgba(0,0,0,0) ;
		}
		.currLi{
			height: 11px;
			width: 11px;
			background-color: #fff;
			border: 2px solid @orange;	
		}
	}
}

.book{
	border-top: 1px solid @orange;
	>h3{
		text-align: center;
		margin: 20px auto;
		font-size: 16px;
		color: @orange;
	}
}

.app{
	border-top: 1px solid @green;
	>h3{
		text-align: center;
		margin: 20px auto;
		font-size: 16px;
		color: @green;
	}
}

.theme{
	border-top: 1px solid @red;
	>h3{
		text-align: center;
		margin: 20px auto;
		font-size: 16px;
		color: @red;
	}
}

.game{
	border-top: 1px solid @blue;
	>h3{
		text-align: center;
		margin: 20px auto;
		font-size: 16px;
		color: @blue;
	}
}
</style>