<template>
	<div class='top_nav clearfix'>
		<div class='container top_container'>
			<div class='top_left'>
				<a href="#" class='mi_logo'></a>
				<a href="#" class='mi_award'></a>
			</div>
			<ul class='top_center'>
				<li v-for='(item,index) in navs' 
				@mouseenter='mouseenter(item.type)'
				@mouseleave='mouseout()'><a href="#">{{item.name}}</a></li>
			</ul>
			<div class='top_search'>
				<input type="text" name="search" class='search_input' @focus='evtFocus' @blur='evtBlur' ref='ipt'>
				<label for="search" class='search_btn' ref='ipt_btn'></label>
				<transition name='fadeIn'>
					<div class='hot_word' ref='hot_word' v-if='isHotword==true'>
						<a href="#" v-for='item in hotWord'>{{item}}</a>
					</div>
				</transition>
				<div class='search_hot' v-if='isHotword==false'>
					<ul>
						<li v-for='item in search_hotword'><a href="#">
							<span>{{item.name}}</span>
							<span>共约有{{item.count}}件</span>
						</a></li>
					</ul>
				</div>
			</div>
		</div>
		<transition name='fade'>
			<div class='nav_content_box'
			@mouseenter='mouseenter()'
			@mouseleave='mouseout()'	 
			v-if='isContent==true'>
				<ul class='nav_content container'>
					<li v-for='item in current_detail' class=''>
						<a href="#">
							<img :src="item.imgUrl" alt="">
						</a>
						<span>{{item.name}}</span>
						<span>{{item.price}}</span>
					</li>
				</ul>
			</div>
		</transition>
	</div>
</template>
<script>

export default{
	name:'top_bar',
	data(){
		return{
			isHotword:true,
			hotWord:['红米pro','小米笔记本air'],
			isContent:false,
			tids:'',//定时器
			current_detail: this.xiaomi,
			navs:[
				{name: '小米手机', type: 'xiaomi'},
				{name: '红米', type: 'red'},
				{name: '平板 · 笔记本', type: 'flats'},
				{name: '电视', type: 'tv'},
				{name: '盒子 · 影音', type: 'box'},
				{name: '路由器', type: 'router'},
				{name: '智能硬件', type: 'hardware'},
				{name: '服务', sourceUrl: '//www.mi.com/service/'},
				{name: '社区', sourceUrl: 'http://www.xiaomi.cn'}
			],
			xiaomi: [
				{name: '小米Max', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/maxdingbu!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '1299元起'},
				{name: '小米手机5', imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mi5!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '1499元起'},
				{name: '小米手机4c', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mi4c!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '1099元'}
			],
			red: [
				{name: '红米pro', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/hongmipro-320!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '1499元起'},
				{name: '红米note3', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/hongmi3s!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '899元起'},
				{name: '红米手机3S', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/note3!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '699元起'},
				{name: '红米手机3', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hongmi3!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '699元起'},
				{name: '红米手机3X', imgUrl: 'http://c1.mifile.cn/f/i/g/doodle/320-220!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '799元'}
			],
			flats: [
				{name: '小米平板2 16GB', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/hongmipro-320!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '999元'},
				{name: '小米平板2 64GB', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mipad2-64!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '1299元'},
				{name: '小米平板2 64GB Windows版', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mipad2-64-win!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '1299元'},
				{name: '小米笔记本Air 12.5', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/bijiben32012.5!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '3499元'},
				{name: '小米笔记本Air 13.3', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/bijiben320!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '4999元'}
			],
			tv: [
				{name: '小米电视3S 43英寸', imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-43!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3s/43/', price: '1499元'},
				{name: '小米电视3S 48英寸', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv3s48!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3s/48/', price: '1999元'},
				{name: '小米电视3 55英寸', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv355!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3/55/', price: '3299元起'},
				{name: '小米电视3 60英寸', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv3-60!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3/60/', price: '3499元'},
				{name: '小米电视3S 65英寸 曲面', imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-65!160x110.jpg', sourcePath: 'http://www.mi.com/mimax/', price: '8999元'},
				{name: '小米电视3 70英寸', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv70!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3/70/', price: '8999元'}
			],
			box: [
				{name: '小米盒子mini版', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hezimini.png', sourcePath: 'http://www.mi.com/hezimini/', price: '179元'},
				{name: '小米盒子3', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hezi3.png', sourcePath: 'http://www.mi.com/hezi3/', price: '249元'},
				{name: '小米盒子3 增强版', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hezi3s!160x110.jpg', sourcePath: 'http://www.mi.com/hezi3s/', price: '399元'},
				{name: '小米电视主机', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/zhuji!160x110.jpg', sourcePath: 'http://www.mi.com/tvzj/', price: '999元'},
				{name: '小米家庭音响 金属版', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/jinshuban!160x110.jpg', sourcePath: 'http://item.mi.com/1160800073.html', price: '899元'},
				{name: '小米家庭音响 标准版', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/putonban!160x110.jpg', sourcePath: 'http://item.mi.com/1160800074.html', price: '699元'}
			],
			router: [
				{name: '全新小米路由器', imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-43!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3s/43/', price: '699元起'},
				{name: '小米路由器 3', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/miwifi-3!160x110.jpg', sourcePath: 'http://www.mi.com/miwifi3/', price: '149元'},
				{name: '小米路由器 mini', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/miwifimini!160x110.jpg', sourcePath: 'http://www.mi.com/miwifimini/', price: '119元'},
				{name: '小米路由器 3C', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv3-60!160x110.jpg', sourcePath: 'http://www.mi.com/mitv3/60/', price: '99元'},
				{name: '小米路由器 青春版', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/miwifilite!160x110.jpg', sourcePath: 'http://www.mi.com/miwifilite/', price: '69元'},
				{name: '小米WiFi放大器', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/wifiExtension!160x110.jpg', sourcePath: 'http://item.mi.com/1153200003.html', price: '35元'}
			],
			hardware: [
				{name: '九号平衡车', imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/scooter!160x110.jpg', sourcePath: 'http://www.mi.com/scooter/', price: '1999元'},
				{name: '小米净水器', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/water2!160x110.jpg', sourcePath: 'http://www.mi.com/water/', price: '1299元起'},
				{name: '米家压力IH电饭煲', imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/dianfanbao!160x110.jpg', sourcePath: 'http://www.mi.com/dianfanbao/', price: '999元'},
				{name: '小米空气净化器 2', imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/air2!160x110.jpg', sourcePath: 'http://www.mi.com/air2/', price: '649元'},
				{name: '智能摄像机', imgUrl: 'http://c1.mifile.cn/f/i/g/doodle/zhinengyingjian!160x110.jpg', sourcePath: 'http://list.mi.com/accessories/tag?id=shexiangji', price: '149元起'}
			],
			search_hotword:[
				{name:'小米手环',count:3},
				{name:'小米手环',count:3},
				{name:'小米手环',count:3},
				{name:'小米手环',count:3},
				{name:'小米手环',count:3},
				{name:'小米手环',count:3},
				{name:'小米手环',count:3},
				{name:'小米手环',count:3},
				{name:'小米手环',count:3},
				{name:'小米手环',count:3},
				{name:'小米手环',count:3}
			]

		}
	},
	methods:{
		mouseenter(type){
			if(type){
				this.current_detail = this[type];
			}
			clearTimeout(this.tids)
			this.isContent = true;
		},
		mouseout(){
			let that = this;
			this.tids = setTimeout(function(){
				that.isContent=false;
			},300)
		},
		evtFocus(){
			var ipt = this.$refs.ipt;
			var btn = this.$refs.ipt_btn
			ipt.classList.add('active_ipt');
			btn.classList.add('active_ipt');
			this.isHotword = false;
		},
		evtBlur(){
			var ipt = this.$refs.ipt;
			var btn = this.$refs.ipt_btn;
			ipt.classList.remove('active_ipt');
			btn.classList.remove('active_ipt');
			this.isHotword = true;
		}
	}
}
</script>
<style scoped lang='less'>
@font-coler:#b0b0b0;
@light-gray:#e0e0e0;
@orange-color:#ff6700;
.active_ipt{
	border-color:@orange-color!important;
}
.top_container{
	position: relative;
	height: 100px;
	display: flex;
	flex-direction: row;
}

.top_left{
	height: 100%;
	position: relative;
	display: flex;
	align-items: center;
	.mi_logo{
		display: block;
		height: 50px;
		width: 50px;
		background: url('../assets/image/icon-mi.png') no-repeat;
		background-size: contain;
	}
	.mi_award{
		display: block;
		height: 80px;
		width: 180px;
		background: url('../assets/image/win.gif') no-repeat 100% 100%;
		background-size:contain;
		margin-left: 10px;
	}
}
.top_center{
	height: 100%;
	display:flex ;
	li{
		margin: auto;
		padding: 0 10px;
		a{	
			height: 100px;
			display: block;
			font-size: 16px;
			line-height: 100px;
			color: #333;
		}
		a:hover{
			color: @orange-color;
		}
	}
}
.top_search{
	height: 100%;
	display: flex;
	flex-direction: row;
	position: absolute;
	right: 0;
	.search_input{
		box-sizing: border-box;
		padding: 5px;
		margin: auto;
		height: 50px;
		width: 240px;
		border:1px solid @light-gray;
		outline: none;
	}
	.search_btn{
		box-sizing: border-box;
		margin: auto;
		height: 50px;
		width: 50px;
		border:1px solid @light-gray;
		border-left:0;
		background: url('../assets/image/icon-search.png') no-repeat center;
		background-size: 40%;
		cursor: pointer;
	}
	.search_btn:hover{
		background: url('../assets/image/icon-search-white.png') no-repeat center;
		background-size: 40%;
		background-color:@orange-color;
	}
	
	.hot_word{
		position: absolute;
		top: 50%;
		margin-top: -7px;
		right: 60px;
		a{
			display: inline-block;
			background-color: #eee;
			margin-left: 5px;
			color: #757575;
			& hover{
			background-color: @orange-color;
			color: #fff;
			}
		}
	}

	.search_hot{
		border: 1px solid @orange-color;
		border-top:none;
		width: 238px;
		position: absolute;
		top: 75px;
		background-color: #fff;
		z-index: 800;
		a{
			display: block;
			height: 30px;
			width: 100%;
			line-height: 25px;
			box-sizing: border-box;
			padding: 0 5px;
			display: flex;
			justify-content: space-between;

			span:nth-of-type(1){
				font-size: 14px;
			}
			span:nth-of-type(2){
				font-size: 13px;
				color: @font-coler;
			}
		}
	}

}
.nav_content_box{
	box-shadow: 0px 0px 3px #ccc;
	position: absolute;
	background-color: #fff;
	z-index: 700;
	width: 100%;
}
.nav_content{
	margin:0 200px;
	padding-bottom: 50px;
	display: flex;
	flex-direction: row;
	align-items: center;
	a{
		display: block;
		margin-top: 40px;
		margin-bottom: 20px;
		border-right: 1px solid #ccc;
		img{
			padding: 0 10px;
			height: 90px;
			width: 180px;
		}
	}
	span{
		display: block;	
		text-align: center;
		padding: 3px;
	}
	span:nth-of-type(2){
		color: @orange-color;
	}
}


.fade-enter-active, .fade-leave-active {
  transition: all .3s ease-in;
  height: 230px;
  /* overflow 让父元素内部 跟随变化 */
  overflow: hidden;
  opacity: 1;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  height: 0px;
  opacity: 0;
}

/* 淡进淡出 */
.fadeIn-enter-active, .fadeIn-leave-active {
  transition: all .3s ease-in;
  opacity: 1;
}
.fadeIn-enter, .fadeIn-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0;
}
</style>