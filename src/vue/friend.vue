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

								<div v-for="friend in friends" class="col-md-4">
									<div class="friend">
										<div class="row">
											<div class="col-md-6">	
												<img :src="path + friend.faceIcon"></img>
											</div>
											<div class="col-md-6">
												<a href="" target="_blank" class="name">{{friend.name}}</a>
												<span class="homeland">{{friend.home}}</span>
												<button class="btn btn-xs btn-danger del-friend" data-toggle="modal" data-target="#del-friend-confirm">
													<i class="glyphicon glyphicon-remove"></i> 删除好友
												</button>
											</div>
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

	<script>
		import nHeader from '../components/nHeader.vue'
		import nFooter from '../components/nFooter.vue'
		export default {
			data : function() {
				return {
					friends : [],
					page : {}
				} 
			},
			mounted : function () {
				this.getFriends(1);
			},
			components : {
				nHeader,
				nFooter
			},
			computed : {
				path : function() {
					return this.$store.getters.getStaticPath;
				}
			},
			methods : {
				getFriends : function (page) {
					this.$ajax.get('my/friends?page=' + page)
					.then((returnData) => {
						this.friends = returnData.data.data;
						this.page = returnData.data.page;
					})
					.catch((error) => {
						console.log('载入好友信息失败');
					})
				}
			}
		}
	</script>

	<style lang="sass">
		@import '../scss/common.scss';
		#search-part{
			padding: 12px;
			background-color: #eee;
			border: 1px solid #ddd;
			border-radius: 5px;
			margin-bottom: 10px;
		}

		#search-result{
			display: none;
		}
		
		#all-friend {
			@include shadowed(10px);
			@include bordered(1px, 6px);
			.panel-heading {
				background: #fafafa;
				border: 0;
			}
			#friend-list .friend, #result-list .result-item{
				background-color: #fafafa;
				@include bordered(1px, 6px);
				margin-bottom: 10px;
			}
			#friend-list .friend .row, #result-list .result-item .row{
				padding: 10px 0;
			}
			#friend-list .friend .name, #result-list .result-item .name{
				font-size: 15px;
				font-weight: bold;
			}
			#friend-list .friend img, #result-list .result-item img{
				border: 1px solid #ccc;
				border-radius: 10px;
				width: 85px;
				margin-left: 20px;
			}
			#friend-list .friend span, #result-list .result-item span{
				display: block;
				color: #555;
			}
			#friend-list .friend button, #result-list .result-item button{
				margin-top: 10px;
				margin-bottom: 0;
			}
		}
		#all-friend .panel-body, #search-result .panel-body{
			padding-top: 10px;
			padding-bottom: 2px;
		}

		@media (max-width: 1200px){
			#all-friend .panel-body, #search-result .panel-body{
				padding-top: 6px;
			}
			#friend-list .friend, #result-list .result-item{
				margin-bottom: 6px;
			}
			#friend-list .friend .row, #result-list .result-item .row{
				padding: 6px 0;
			}
			#friend-list .friend .col-md-6, #result-list .result-item .col-md-6{
				padding-left: 6px;
				padding-right: 6px;
			}
			#friend-list .friend img, #result-list .result-item img{
				border-radius: 10px;
				width: 84px;
			}
			#friend-list .friend button, #result-list .result-item button{
				margin-top: 0px;
			}
		}

		#request-list .request-item{
			background-color: #fff;
			border: 1px solid #ddd;
			border-left: 5px solid #A8D5FA;
			margin-bottom: 8px;
		}
		#request-list .request-item img{
			width: 80px;
		}
		#request-list .request-item a.name{
			font-weight: bold;
			display: block;
			margin-top: 5px;
		}
		#request-list .request-item .btn-list{
			margin-top: 5px;
		} 
		#request-list .request-item button{
			float: right;
			margin-right: 7px;
		}
		@media (max-width: 1200px){
			#request-list .request-item img{
				width: 72px;
			}
			#request-list .request-item a.name{
				margin-top: 3px;
			}
			#request-list .request-item .btn-list{
				margin-top: 3px;
			} 
			#request-list .request-item button{
				margin-right: 3px;
			}
		}

		#done-panel{
			display: none;
		}

		.msg{
			color: #aaa;
			margin-bottom: 10px;
		}
		#friend-list + div.msg{
			padding: 0;
		}

		#send-req-success, #send-req-warning, #send-req-error,
		#agree-req-success, #agree-req-warning, #agree-req-error,
		#disagree-req-success, #disagree-req-warning, #disagree-req-error{
			margin-bottom: 10px;
			display: none;
		}
	</style>