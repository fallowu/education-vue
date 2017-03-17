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
  				<ul class="nav navbar-nav">
            		<li><router-link to="/">首页</router-link></li>
  					<li><router-link to="/personal">个人主页</router-link></li>
  					<li><router-link to="/courseTable">我的课程</router-link></li>
  					<li><router-link to="/friend">我的好友</router-link></li>
  				</ul>
  					<div class="nav navbar-nav navbar-right">
  						<a class="btn-login">登陆</a>
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
		<n-footer></n-footer>
	</div>
</template>
<style lang="sass">
	$gray: #e4e4e4;
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
</style>
<script>
	import nHeader from '../components/nHeader.vue'
	import nFooter from '../components/nFooter.vue'
	import Swiper from '../../static/swiper.min.js'
 	require('../../static/swiper.min.css')
	export default {
		components : {
			nHeader,
			nFooter
		},
		mounted () {
     console.log('Swiper ready')
     var mySwiper = new Swiper('.swiper-container', {
       direction: 'horizontal',
       loop: true,
       pagination: '.swiper-pagination',
       nextButton: '.swiper-button-next',
       prevButton: '.swiper-button-prev'
     })
   }
	}
</script>