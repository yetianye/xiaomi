<template>
	<div class='recommend'>
		<div class='container'>
			<div class='recomend_top'>
				<h3>{{title}}</h3>
				<div class='btn'>
					<i class='fa fa-angle-left fa-2x' @click='evtleft'></i>
					<i class='fa fa-angle-right fa-2x' @click='evtright'></i>
				</div>
			</div>
			<div class='recomend_bot'>
				<ul ref='list'>
					<li v-for='(item,index) in recomends'><a href="#">
						<img :src="item.imgUrl" alt="">
						<h3>{{item.name}}</h3>
						<p>{{item.price}}元</p>	
						<p>{{item.favorable}}人好评</p>
					</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'recommend',
		data(){
			return {
				title:'为你推荐',
				currIndex:0,
				currList:0,
				recomends: [
					{sourceUrl: '//item.mi.com/1154300011.html', imgUrl: '//i1.mifile.cn/a1/T1.VVgBjAT1RXrhCrK.jpg?width=140&height=140', name: '小米电视主机', price: '999', favorable: '102'},
					{sourceUrl: '//item.mi.com/1153300030.html', imgUrl: '//i1.mifile.cn/a1/T1LrdvBbAT1RXrhCrK.jpg?width=140&height=140', name: '小米手环', price: '69', favorable: '11.8万'},
					{sourceUrl: '//item.mi.com/1155100006.html', imgUrl: '//i1.mifile.cn/a1/T1_tEgBmVv1RXrhCrK.jpg?width=140&height=140', name: '米兔儿童电话手表', price: '299', favorable: '7865'},
					{sourceUrl: '//item.mi.com/1154100018.html', imgUrl: '//i1.mifile.cn/a1/T1TpZ_ByYv1R4cSCrK.png?width=140&height=140', name: '小米低音炮', price: '599', favorable: '4908'},
					{sourceUrl: '//item.mi.com/1155100011.html', imgUrl: '//i1.mifile.cn/a1/T1CDbjBgAT1RXrhCrK.jpg?width=140&height=140', name: '90分旅行箱 24寸', price: '349', favorable: '1.1万'},
					{sourceUrl: '//item.mi.com/1154900069.html', imgUrl: '//i1.mifile.cn/a1/T1PyZ_Bjdv1RXrhCrK.jpg?width=140&height=140 ', name: '小米智能插座 基础版', price: '49', favorable: '8622'},
					{sourceUrl: '//item.mi.com/1162100021.html', imgUrl: '//i1.mifile.cn/a1/pms_1464071511.37197399.jpg?width=140&height=140', name: '米家 LED 智能台灯', price: '169', favorable: '4268人好评'},
					{sourceUrl: '//item.mi.com/1153700018.html', imgUrl: '//i1.mifile.cn/a1/T1Ay_gBKKv1RXrhCrK.jpg?width=140&height=140', name: '90分旅行箱 20寸', price: '299', favorable: '1.5万'},
					{sourceUrl: '//item.mi.com/1161200004.html', imgUrl: '//i1.mifile.cn/a1/T1WxYvB_xv1RXrhCrK.jpg?width=140&height=140', name: '小米活塞耳机 基础版', price: '29', favorable: '5.5万'},
					{sourceUrl: '//item.mi.com/1153300025.html', imgUrl: '//i1.mifile.cn/a1/T1tzL_BjYT1RXrhCrK.jpg?width=140&height=140', name: '学院风简约双肩包', price: '59', favorable: '1.8万'},
					{sourceUrl: '//item.mi.com/1154300036.html', imgUrl: '//i1.mifile.cn/a1/T1F5K_BjVv1RXrhCrK.jpg?width=140&height=140', name: '小米小钢炮蓝牙音箱2', price: '129', favorable: '1.2万'},
					{sourceUrl: '//item.mi.com/1162900011.html', imgUrl: '//i1.mifile.cn/a1/pms_1470793898.34754317.jpg?width=140&height=140', name: '90分金属旅行箱', price: '1799', favorable: '23'},
					{sourceUrl: '//item.mi.com/1153800044.html', imgUrl: '//i1.mifile.cn/a1/T1MDK_B_YT1RXrhCrK.jpg?width=140&height=140', name: '小米蓝牙音箱', price: '199', favorable: ' 1.9万'},
					{sourceUrl: '//item.mi.com/1161200013.html', imgUrl: '//i1.mifile.cn/a1/T1FtKgBvZv1RXrhCrK.jpg?width=140&height=140', name: '小米多功能都市休闲胸包', price: '69', favorable: '9453'},
					{sourceUrl: '//item.mi.com/1161800001.html', imgUrl: '//i1.mifile.cn/a1/T1HQA_BCd_1RXrhCrK.jpg?width=140&height=140', name: '米家iHealth血压计', price: '399', favorable: '1529'},
					{sourceUrl: '//item.mi.com/1153900041.html', imgUrl: '//i1.mifile.cn/a1/T1JJ__BbYT1RXrhCrK.jpg?width=140&height=140', name: '小米净水器滤芯', price: '59', favorable: '6640'},
					{sourceUrl: '//item.mi.com/1162800007.html', imgUrl: '//i1.mifile.cn/a1/pms_1468287589.40786199.jpg?width=140&height=140', name: '米家随身风扇', price: '19.9', favorable: '4522'},
					{sourceUrl: '//item.mi.com/1160800073.html', imgUrl: '//i1.mifile.cn/a1/T1N5KjB_dT1RXrhCrK.jpg?width=140&height=140', name: '小米家庭音响 金属版', price: '899', favorable: '0'},
					{sourceUrl: '//item.mi.com/1161000003.html', imgUrl: '//i1.mifile.cn/a1/T1LpWjB4bv1RXrhCrK.jpg?width=140&height=140', name: '小米空气净化器滤芯 经济版', price: '129', favorable: '473'},
					{sourceUrl: '//item.mi.com/1161200073.html', imgUrl: '//i1.mifile.cn/a1/T1bED_B__v1RXrhCrK.jpg?width=140&height=140', name: '小蚁摄像机储存套装（夜视+8GB）', price: ' 165.9', favorable: '0'}
				]
			}
		},
		methods:{
			evtleft(){
				const list = this.$refs.list;
				if(Math.abs(this.currList)<(list.offsetWidth/4)*2){
					this.currList -=1214;
					list.style.transform = 'translateX('+this.currList +'px)';
				}
			},
			evtright(){
				const list = this.$refs.list;
				if(this.currList<0){
					this.currList +=1214;
					list.style.transform = 'translateX('+this.currList +'px)';
				}
			}
		}
	}
</script>
<style scoped lang='less'>
@orange:#ff6700;
@green:#83c44e;
.recommend{
	background-color: #eee;
}
.recomend_top{
	display: flex;
	justify-content: space-between;
	padding: 50px 0 15px 0; 
	h3{
		font-size: 22px;
	}
	.btn{
		border: 1px solid #ccc;
		height: 30px;
		width: 70px;
		display: flex;
		i{
			flex: 1;
			display: block;
			height: 100%;
			cursor: pointer;
			text-align: center;
			color: #ccc;
		}
		i:nth-of-type(1){
			border-right: 1px solid #ccc;
		}
	}
}
.recomend_bot{
	height: 300px;
	width: 100%;
	overflow: hidden;
	ul{
		transition: all ease-in .7s;
		/* calc 动态计算 宽度 */
		width: calc(243*20px);
		height: 100%;
		li{
			float: left;
			display: block;
			background-color: #fff;
			height: 300px;
			width: 229px;
			margin-right: 14px;
			transition: all ease-in 0.3s;
			position: relative;
			a{
				img{
					display: block;
					margin: 20px auto;
					/* margin: 20px 40px 0 40px; */
					width: 140px;
					height: 140px;
				}
				h3{
					text-align: center;
					font-size: 14px;
					font-weight: 600;
					margin-bottom: 10px;
				}
				p{
					text-align: center;
					font-size: 14px;
					margin-bottom: 10px;
				}
				p:nth-of-type(1){
					color: @orange;
				}

			}
		}
	}
}
</style>