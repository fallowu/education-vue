<template>
	<div>
		<nav class="navbar navbar-default navbar-static-top navbar-fixed-top" role="navigation">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="">教学互动系统</a>
				</div>
				<div id="navbar" class="navbar-collapse collapse">
					
					<div class="nav navbar-nav navbar-right">
						<a @click="toggleLoginModal" class="btn-login">登录</a>
					</div>
				</div><!--/.nav-collapse -->
			</div>
		</nav>
		<div class="container">
			<div class="row">
				<div class="swiper-container col-lg-12">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<img class="imgload" src="http://www.ecnu.edu.cn/_upload/article/images/16/d6/5346ae2b4b84aa193e00be53300a/e99de970-b7bc-413c-8c24-2b07347ad97a.png" alt="banner01">
						</div>
						<div class="swiper-slide">
							<img class="imgload" src="http://www.ecnu.edu.cn/_upload/article/images/8c/eb/324eabc7489791e4a6808405126f/547dff8f-a724-45ef-8a8c-a9366e4a2fc2.jpg" alt="banner02">
						</div>
					</div>
					<!-- 分页器 -->
					<div class="swiper-pagination"></div>
					<!-- 导航按钮 -->
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
			</div>
			<div class="row post-wrapper">
				<div class="col-sm-3 post-container">
					<h4>活跃排名</h4>
					<ul class="list-unstyled">
						<li>10132510101</li>
						<li>10132510101</li>
						<li>10132510101</li>
						<li>10132510101</li>
						<li>10132510101</li>
					</ul>
				</div>
				<div class="col-sm-1"></div>
				<div class="col-sm-4 post-container">
					<h4>热门资源</h4>
					<ul class="list-unstyled">
						<li>算法习题集</li>
						<li>10132510101</li>
						<li>10132510101</li>
						<li>10132510101</li>
						<li>10132510101</li>
					</ul>
				</div>
				<div class="col-sm-1"></div>
				<div class="col-sm-3 post-container">
					<h4>热点讨论</h4>
					<ul class="list-unstyled">
						<li>10132510101</li>
						<li>10132510101</li>
						<li>10132510101</li>
						<li>10132510101</li>
						<li>10132510101</li>
					</ul>
				</div>
			</div>
		</div>
		<div v-if="loginToggle" class="modal-layer"></div>
		<transition name="slide-fade">
			<div v-if="loginToggle" class="container modal-login">
				<form class="form-horizontal">
					<div class="form-group form-close">
						<span @click="toggleLoginModal" class="glyphicon glyphicon-remove"></span>
					</div>
					<div class="form-group">
						<label class="form-head col-sm-12">教学互动系统</label>
					</div>
					<div class="form-group">
						<label class="col-sm-3 control-label">学工号</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" v-model="userId" placeholder="请输入学工号">
							<span class="msg text-danger"></span>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-3 control-label">密码</label>
						<div class="col-sm-8">
							<input type="password" class="form-control" v-model="userPassword" placeholder="请输入密码">
							<span class="msg text-danger"></span>
						</div>
					</div>
					<div class="form-group form-login-btn">
						<div class="col-sm-offset-4 col-sm-8">
							<a @click="login" class="btn btn-primary">登&nbsp;&nbsp;录</a>
						</div>
					</div>
				</form>
			</div>
		</transition>

		<n-footer></n-footer>
	</div>
</template>
<style lang="sass">
	@import '../scss/common.scss';
	.swiper-container {
		padding: 0;
	}
	.imgload {
		width: 100%;
	}
	.post-wrapper {
		padding-top: 20px;
	}
	.post-container {
		border: 1px solid $gray;
		color: #333333;
		h4 {
			font-size: 16px;
			padding-bottom: 10px;
			border-bottom: 1px solid $gray;
		}
	}
	.btn-login {
		display: block;
		color: #f8f8f8;
		height: 50px;
		width: 50px;
		line-height: 50px;
	}
	.btn-login:hover {
		text-decoration: none;
		color: white;
		background-color: #3B7EB4;
		cursor: pointer;
	}
	.modal-layer {
		background-color: rgba(0,0,0,.5);
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 3;
	}
	.modal-login {
		width: 400px;
		height: 300px;
		padding: 10px 20px 40px 20px;
		@include centered(fixed);
		@include bordered(1px, 10px);
		@include shadowed(1px);
		background-color: $white;
		z-index: 4;
		
		.form-head {
			text-align: center;
			font-size: 26px;
		}
		.form-login-btn {
			margin-top: 30px;
		}
		.form-close {
			text-align: right;
			span {
				cursor: pointer;
			}
		}
	}
	.slide-fade-enter-active {
		transition: all .3s ease;
	}

	.slide-fade-enter, .slide-fade-leave-active {
		top: 60%;
		opacity: 0;
	}
</style>
<script>
	import nHeader from '../components/nHeader.vue'
	import nFooter from '../components/nFooter.vue'
	import Swiper from '../js/swiper.min.js'
	import md5 from '../js/md5.min.js'
	require('../../src/css/swiper.min.css')
	export default {
		components : {
			nHeader,
			nFooter
		},
		data : function() {
			return {
				userId: '',
				userPassword: '',
				loginToggle: false
			}
		},
		mounted () {
			var mySwiper = new Swiper('.swiper-container', {
				direction: 'horizontal',
				loop: true,
				pagination: '.swiper-pagination',
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev'
			})
		},
		methods : {
			toggleLoginModal : function() {
				this.loginToggle = !this.loginToggle;
			},
			login : function() {
				this.$ajax.post('auth/login', {
					id: this.userId,
					password: md5(this.userPassword)
				})
				.then((response) => {
					//成功登陆改变登陆状态
					this.$store.dispatch('isLogin');
					const token = response.data.data.access_token;
					console.log(token);
					this.$store.dispatch('setToken', token);
					//跳转首页
					this.$router.push('/homepage');
				})
				.catch((error) => {
					console.log(error);
				});
			}
		}
	}
</script>