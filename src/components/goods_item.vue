<template>
	<ul class='list'>
		<li v-for='(item,index) in goods'><a href="#">
			<span class='discount'>{{item.discount}}</span>	
			<img :src="item.imgUrl" alt="">
			<h3>{{item.title}}</h3>
			<p>{{item.desc}}</p>
			<p>{{item.price}}元</p>
		</a></li>
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
@orange-color:#ff6700;
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
				color: @orange-color;
			}
		}
		
		&:hover{
			box-shadow: -8px 9px 8px #ccc;
		}
	}
}
</style>