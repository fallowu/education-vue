<template>
	<div>
		<n-header></n-header>
		<div class="container main">
  		<div class="row">
  			<div class="col-md-9">
  				<div class="input-group" id="search-part">
  					<input type="text" class="form-control" id="keyword" placeholder="请输入关键字搜索用户...">
  					<span class="input-group-btn">
  						<button class="btn btn-info" type="button" id="search-btn">
  							<i class="glyphicon glyphicon-search"></i> 搜索
  						</button>
  					</span>
    			</div><!-- /input-group -->
    			
    			<div class="panel panel-info" id="search-result">
    				<div class="panel-heading">搜索结果&nbsp;&nbsp;&nbsp;&nbsp;共<span id="search-sum"></span>位</div>
					<div class="panel-body">
						<div class="row" id="result-list"></div>
					</div>	
    			</div>
    			
    			<div class="panel panel-info" id="all-friend">
					<div class="panel-heading">全部好友&nbsp;&nbsp;&nbsp;&nbsp;共<span id="friend-sum"></span>位</div>
					<div class="panel-body">
						<div class="row" id="friend-list">
						<!-- v-for -->
								<div class="col-md-4 friend">
									<div class="row">
										<div class="col-md-6">	
										
			  										<img src="<%=request.getContextPath()%>${friend.faceIcon}"></img>
			  								
										</div>
										<div class="col-md-6">
											<a href="" target="_blank" class="name">{friend.userName}</a>
			
													<span class="homeland">{friend.provinceName} - {friend.cityName}</span>
											
											<span class="userId" style="display:none;">{friend.userId}</span>
											<button class="btn btn-xs btn-danger del-friend" data-toggle="modal" data-target="#del-friend-confirm">
												<i class="glyphicon glyphicon-remove"></i> 删除好友
											</button>
										</div>
									</div>
								</div>
						
						</div>
					
							<!-- <div class="col-md-12 msg" id="friend-msg">暂时没有好友</div> -->
						
					</div>
				</div>
  			</div>
  			
  			<div class="col-md-3">
  				<div class="alert alert-success" id="send-req-success">
  					好友请求已发送
  				</div>
  				<div class="alert alert-warning" id="send-req-warning">
  					您已经发送过请求，请耐心等待对方回应
  				</div>
  				<div class="alert alert-danger" id="send-req-error">
  					请求发送失败
  				</div>
  				
  				<div class="alert alert-success" id="agree-req-success">
  					添加好友成功
  				</div>
  				<div class="alert alert-warning" id="agree-req-warning">
  					你们已经是好友了
  				</div>
  				<div class="alert alert-danger" id="agree-req-error">
  					添加好友失败
  				</div>
  				
  				<div class="alert alert-success" id="disagree-req-success">
  					拒绝添加好友成功
  				</div>
  				<div class="alert alert-warning" id="disagree-req-warning">
  					你们已经是好友了
  				</div>
  				<div class="alert alert-danger" id="disagree-req-error">
  					拒绝添加好友失败
  				</div>
  				
  				<div id="request-list">
  				<!-- v-for -->
  					<!-- 	<div class="request-item">
	  						<div class="row">
	  							<div class="col-md-4">
	  								<c:choose>
	  									<c:when test="${empty request.faceIcon || request.faceIcon == ''}">
	  										<img src="<%=request.getContextPath()%>/resource/img/blank.jpg">
	  									</c:when>
	  									<c:otherwise>
	  										<img src="<%=request.getContextPath()%>${request.faceIcon}"></img>
	  									</c:otherwise>
	  								</c:choose>
	  							</div>
	  							<div class="col-md-8">
	  								<a href="${request.homepage}" target="_blank" class="name">${request.userName}</a> 请求添加你为好友
	  								<input type="hidden" value="${request.userId}">
			  						<div class="btn-list">
			  							<button class="btn btn-xs btn-default disagree-btn"><i class="glyphicon glyphicon-remove"></i> 拒绝</button>
			  							<button class="btn btn-xs btn-success agree-btn"><i class="glyphicon glyphicon-ok"></i> 同意</button>
			  						</div>
	  							</div>
	  						</div>
	  					</div> -->
  				
  				</div>
  				
  				<div class="panel panel-info" id="done-panel">
					<div class="panel-heading"></div>
					<div class="panel-body">
						所有的请求都处理完啦~
					</div>
				</div>
  			</div>
  		</div>
  		
		<hr>
	  	<footer>
	  		<p>&copy; Company 2015. Milley Shu</p>
	  	</footer>
  	</div> <!-- /container -->
		<n-footer></n-footer>
	</div>
</template>
<style lang="sass">

</style>
<script>
	import nHeader from '../components/nHeader.vue'
	import nFooter from '../components/nFooter.vue'
	export default {
		components : {
			nHeader,
			nFooter
		}
	}
</script>