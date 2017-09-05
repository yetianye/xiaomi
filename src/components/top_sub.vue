<template>
	<div class='top_sub container'>
		<ul class='sub1'>
			<li><a href="#">
				<span class='fa fa-mobile fa-2x'></span>
				<span>选购手机</span>
			</a></li>
			<li><a href="#">
				<span class='fa fa-gift fa-2x'></span>
				<span>企业团购</span>
			</a></li>
			<li><a href="#">
				<span class='fa fa-refresh fa-2x'></span>
				<span>官翻产品</span>
			</a></li>
			<li><a href="#">
				<span class='fa fa-credit-card fa-2x'></span>
				<span>小米移动</span>
			</a></li>
			<li><a href="#">
				<span class='fa fa-recycle fa-2x'></span>
				<span>小米移动</span>
			</a></li>
			<li><a href="#">
				<span class='fa fa-credit-card-alt fa-2x'></span>
				<span>话费充值</span>
			</a></li>
		</ul>
		<ul class='sub2'>
			<li><a href="#"><img src="http://i3.mifile.cn/a4/1327d707-4f67-4c36-8ae5-3d7704c989eb" alt=""></a></li>
			<li><a href="#"><img src="http://i3.mifile.cn/a4/c202123c-4197-4666-9793-2f1e156ab23a" alt=""></a></li>
			<li><a href="#"><img src="http://i3.mifile.cn/a4/216f7f38-66ee-4c1b-8409-8d77cb64d386" alt=""></a></li>
		</ul>
	</div>

</template>
<script>
	export default{
		name:'top_sub',
		data(){
			return{

			}
		}

	}
</script>
<style scoped lang='less'>
@brown:#5f5750;
.top_sub{
	height: 170px;
	padding: 20px 0;
	display: flex;
}
.sub1{
	height:100%;
	width: 240px;
	background-color: @brown;
	display: flex;
	flex-flow: wrap row;
	li{
		width: 80px;
		height: 85px;
		box-sizing: border-box;
		padding: 10px 0;
		text-align: center;

		span{
			margin-top: 10px;
			color: #ccc;
			display: block;
		}
	}
}
.sub2{
	flex: 1;
	height:100%;
	width: auto;
	display: flex;
	flex-flow: nowrap row;
	li{
		/* flex: 1; 使元素 宽度撑满 */
		flex: 1;
		height: 100%;
		margin-left: 20px;
		img{
			height: 100%;
			width: 100%;
		}
	}
}
</style>