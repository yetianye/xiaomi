<template>
	<ul class='list'>
		<li v-if='index!=7' v-for='(item,index) in goods'><a href="#">
			<span class='discount'>{{item.discount}}</span>	
			<img :src="item.imgUrl" alt="">
			<h3>{{item.title}}</h3>
			<p>{{item.desc}}</p>
			<p>{{item.price}}元</p>
			<div class='comment' v-show='item.reviewStatus'>
				<p>{{item.reviewDesc}}</p>
				<p>来自于{{item.reviewAuthor}}</p>
			</div>
		</a></li>
		<li v-if='index==7' v-for='(item,index) in goods' class='more'>
			<div class='more_top'>
				<a href="#">
					<div>
						<h3>{{item.title}}</h3>
						<p>{{item.price}}元</p>
					</div>
					<div>
						<img :src="item.imgUrl" alt="">
					</div>
				</a>
			</div>
			<div class='more_bot'>
				<a :href="item.moreUrl">
					<div>
						<h3>浏览更多</h3>
						<p>{{item.type}}</p>
					</div>
					<div>
						<i class='fa fa-arrow-circle-right fa-5x icon-arrow'></i>
					</div>
				</a>
			</div>
		</li>
	</ul>
</template>
<script>
	export default{
		name:'list',
		data(){
			return {
				
			}
		},
		props:['goods']
	}
</script>
<style scoped lang='less'>
@font-coler:#b0b0b0;
@light-gray:#e0e0e0;
@orange:#ff6700;
@green:#83c44e;
.list{
	display: flex;
	flex-flow: wrap row;
	/* align-items: center; */
	/* justify-content: space-between; */
	li{
		background-color: #fff;
		height: 300px;
		width: 227px;
		margin: 0 0 14px 14px;
		transition: all ease-in 0.3s;
		position: relative;
		>a{
			img{
				display: block;
				margin: 20px auto;
				/* margin: 20px 40px 0 40px; */
				width: 140px;
				height: 140px;
			}
			.discount{
			display: block;
			width: 40px;
			color: #fff;
			text-align: center;
			background-color: @green;
			position: absolute;
			top: 0;
			left: 50%;
			margin-left: -20px;
			}
			h3{
				font-size: 14px;
				font-weight: 600;
				text-align: center;
			}
			p{
				text-align: center;
				margin-top:20px ;
			}
			P:nth-of-type(1){
				color: #ccc;
			}
			P:nth-of-type(2){
				font-size: 14px;
				color: @orange;
			}
		}
		
		&:hover{
			box-shadow: -8px 9px 8px #ccc;
		}
		&:hover .comment{
			opacity: 1;
			height: 100px;
		}

		.comment{
			opacity: 0;
			transition: all ease .3s;
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 0;
			background-color: @orange;
			box-sizing: border-box;
			padding: 20px;
			overflow:hidden ;
			p{
				overflow: hidden;
				color: #fff!important;
				margin: auto;
				margin-bottom: 15px;
			}
		}
	}

	.more{
		background-color: #eee;
		display: flex;
		flex-flow: nowrap column;
		justify-content:space-between ;
		.more_top,.more_bot{
			height: 142px;
			background-color: #fff;
			transition: all ease .3s;
			&:hover{
				box-shadow: -8px 9px 8px #ccc;
			}
		}
		.more_top,.more_bot{
			a{
				display: flex;
				div{
					flex: 1;
				}
				div:nth-of-type(1){
					h3{
						text-align: center;
						margin:0 auto;
						margin-top: 40px;
						width: 80px;
						font-weight: 600;
						font-size: 14px;
						/* 辅助属性 */
						overflow:hidden;     
			            white-space: nowrap;
			            /* 单行文字溢出 */
			            text-overflow: ellipsis;
					}
					p{
						color: @orange;
						text-align: center;
						margin-top: 20px;
					}
				}
				div:nth-of-type(2){
					margin:30px auto;
					img{
						height: 80px;
						width: 80px;
						display: block;
						margin:0 auto;
					}
				}
			}
		}
		.more_bot{
			div:nth-of-type(2){
				text-align: center;
				line-height: 130px;
				color: @orange;
			}
		}
		&:hover{
			box-shadow: none;
		}
	}
}
</style>