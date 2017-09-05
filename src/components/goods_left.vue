<template>
	<div name='goods_left' class='goods_left'>
		<div class='items' v-for='item in leftgoods'>
			<a href="javascript:;"><img :src="item.imgUrl" alt=""></a>
		</div>
	</div>
</template>
<script>
export default{
	name:'',
	data(){
		return{

		}
	},
	props:['leftgoods']
}
</script>
<style scoped lang='less'>
.goods_left{
	height: 100%;
	width: 234px;
	display: flex;
	flex-flow: nowrap column;
	.items{
		width: 234px;
		width: 100%;
		margin-bottom: 14px;
		transition: all ease .3s;
		img{
			height: 300px;
		}
		&:hover{
			box-shadow: -8px 9px 8px #ccc;
		}
	}

}
</style>