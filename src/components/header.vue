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
  				<a class="navbar-brand" href="">E-Learning&nbsp;互动教学</a>
  			</div>
  			<div id="navbar" class="navbar-collapse collapse">
  				<ul class="nav navbar-nav">
  					<li><a href=""><i class="glyphicon glyphicon-home"></i> 首页</a></li>
  					<li><a href=""><i class="glyphicon glyphicon-heart"></i> 个人主页</a></li>
  					<li><a href=""><i class="glyphicon glyphicon-th"></i> 我的课程</a></li>
  					<li><a href=""><i class="glyphicon glyphicon-gift"></i> 我的好友</a></li>
  				</ul>
  				<ul class="nav navbar-nav navbar-right">
  					<li class="dropdown">
  						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
  							<i class="glyphicon glyphicon-user"></i>
  							<span id="username"></span>
  							<input type='hidden' id="curId" />
  							<span class="caret"></span>
  						</a>
  						<ul class="dropdown-menu">
  							<li><a href="" id="psd-change" data-toggle="modal" data-target="#change-psd">
  								<i class="glyphicon glyphicon-pencil"></i> 修改密码</a>
  							</li>
  							<li><a href=""><i class="glyphicon glyphicon-off"></i> 注销</a></li>
  						</ul>
  					</li>
  				</ul>
  			</div><!--/.nav-collapse -->
  		</div>
  	</nav>
	</div>
</template>
<script>
	export default {
		name: 'header'
	}
</script>
<style lang="sass">
	
</style>