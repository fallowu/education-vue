<template>
	<div>
		<n-header></n-header>
		<div class="container main">
			<div class="row">
				<div class="col-md-9">
					<div class="publish-part">
						<form id="publish-form" method="POST" ENCTYPE="multipart/form-data">
							<input type="hidden" name="userId" :value="user.userId" >
							<div class="row">
								<div class="col-md-12">
									<textarea name="content" id="content" class="form-control" placeholder="说点新鲜事儿吧~"></textarea>
								</div>
							</div>
							<div class="row" id="publish-action">
								<div class="col-md-10">
									<a class="face-trigger">
										<img src="<%=request.getContextPath()%>/resource/js/rich-text/img/face-logo.gif">
									</a>
									<div class="face-panel" tabindex="1">
										<table><tbody></tbody></table>
									</div>
									<a class="file-trigger" @click="fileToggle">
										<i class="glyphicon glyphicon-paperclip"></i>
									</a>

									<div v-if="filePanelToggle" class="file-panel" tabindex="1" data-number='0'>
										<a class="btn btn-sm btn-success add-file">
											<i class="glyphicon glyphicon-plus"></i> 添加文件
										</a>
										<span>至多添加6个文件</span>
										<input type='file' name="files" multiple>
										<ul class='imgs'></ul>
										<ul class='others'></ul>
										<p class="text-danger"><i class="glyphicon glyphicon-exclamation-sign"></i> 添加文件失败</p>

									</div>

									<span id="publish-msg">还能输入<i id="rest-num">170</i>个字</span>
								</div>
								<div class="col-md-2">
									<button class="btn btn-danger" id="publish-btn" disabled >
										<i class="glyphicon glyphicon-hand-up"></i> 发&nbsp;布</button>
									</div>
								</div>
							</form>
						</div> <!-- END OF ID="publish-part" -->

						<div class="published-part">
							<div class="row read-option">
								<div class="col-md-12">
									<span class="all selected">全部</span>
									<span class="course">课程</span>
									<span v-if="!user.teacher" class="teacher">老师</span>
									<span class="friend">好友</span>
									<span class="self">自己</span>
								</div>
							</div>

							<div class="row">
								<div class="col-md-12" id="publishment-list"><p class="loading">载入中，请稍后……</p></div>
							</div>

							<nav>
								<ul class="pagination"></ul>
							</nav>
						</div> <!-- END OF ID="published-part" -->
					</div>

					<div class="col-md-3">
						<div class="simpleInfo-part">
							<div class="row">
								<div class="col-md-12">
									<a href="uploadFace.do">
										<img v-if="!user.faceIcon || user.faceIcon == ''" src="<%=request.getContextPath()%>/resource/img/blank.jpg">
										<img v-else src="<%=request.getContextPath()%>${user.faceIcon}">
									</a>
								</div>
							</div>
						</div>

						<div class="visitor-part box">
							<div class="row">
								<div class="col-sm-12">
									<label class="box-title">最近访客</label>
								</div>
							</div>
							<div class="row" id="visitor-list">
								<span v-if="!visitors" class="no-visitor">暂无访客</span>

								<div v-for="visitor in visitors" class="visitor">
									<img v-if="visitor.faceIcon" src="<%=request.getContextPath()%>${visitor.faceIcon}">
									<img v-else src="<%=request.getContextPath()%>/resource/img/blank.jpg">
									<a class="name" target="_blank" :href="visitor.homepage">{{visitor.visitorName}}</a>
									<span class="time">{{visitor.time}}</span>
								</div>
							</div>
						</div>

						<div class="friend-part box">
							<div class="row">
								<div class="col-sm-12">
									<label class="box-title">好友列表</label>
									<a href="friend.do">更多</a>
								</div>
							</div>
							<div class="row" id="friend-list">
								<span v-if="!friends" class="no-friend">暂无好友</span>

								<div v-for="friend in friends" class="friend">
									<img v-if="friend.faceIcon" src="<%=request.getContextPath()%>${friend.faceIcon}">
									<img v-else src="<%=request.getContextPath()%>/resource/img/blank.jpg">
									<a class="name" target="_blank" :href="friend.homepage">{{friend.userName}}</a>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div> <!-- /container -->
			<n-footer></n-footer>
		</div>
	</template>
	<style lang="sass">
		/* Publish Part BEGIN */
		div.publish-part{
			padding: 0.9em;
			background-color: #B6DBED;
			border: 1px solid #82B7E4;
		}
		div.publish-part textarea{
			height: 5.3em;	
		}
		#publish-action{
			margin-top: 0.5em;
		}
		#publish-action > div > a{
			display: inline-block;
			padding: 6px;
		}
		#publish-msg{
			color: #888;
			font-size: 17px;
			font-family: "SimHei";
			padding-top: 7px;
			display: inline-block;
		}
		#publish-msg.text-danger{
			color: #B33A3A;
		}
		#rest-num{
			color: #666;
			font-weight: bold;
			font-size: 18px;
			font-family: "Calibri";
			margin: 3px;
		}
		#publish-action button{
			width: 100%;
		}
		@media screen and (max-width: 992px) and (min-width: 600px){
			#publish-action .col-md-8{
				width: 65.22222222222222%;
				display: inline-block;
			}
			#publish-action .col-md-2 {
				width: 16.666666666666664%;
				display: inline-block;
			}
		}
		@media screen and (max-width: 600px) and (min-width: 450px){
			#publish-action .col-md-8{
				width: 58.22222222222222%;
				display: inline-block;
			}
			#publish-action .col-md-2 {
				width: 19.888888888888884%;
				display: inline-block;
			}
			#publish-action .col-md-2 ul.dropdown-menu{
				margin-left: -20px;
			}
		}
		@media screen and (max-width: 450px){
			#publish-action .col-md-8{
				width: 100%;
				display: inline-block;
			}
			#publish-action .col-md-2{
				width: 49%;
				display: inline-block;
	}/* 
	#select-btn .btn-group .dropdown-toggle{
		margin-left: 5px;
	} */
	#publish-action .col-md-2 ul.dropdown-menu{
		width: 75%;
		margin-left: 25%;
	}
}
/* Publish Part END */

#publish-fail .modal-header, #reply-fail .modal-header{
	border-bottom: 0;
}
#publish-fail .modal-title, #reply-fail .modal-title{
	color: #D9534F;
	text-align: center;
}
/* Published Part BEGIN */
.published-part{
	margin-top: 20px;
}
.published-part .read-option span{
	display: inline-block;
	padding: 4px 16px;
	color: #fff;
	background-color: #bbb;
	border: 1px solid #aaa;
	border-radius: 4px;
}
.published-part .read-option span:hover{
	cursor: pointer;
	background-color: #888;
	border-color: #777;
}
.published-part .read-option span.selected{
	background-color: #555;
	border-color: #444;
}
#publishment-list .msg{
	margin-top: 10px;
	color: #888;
	display: block;
}
.publishment{
	background-color: #fff;
	border: 1px solid #ccc;
	margin: 10px 0 0 0;
	padding: 10px 10px 0 10px;
	/* overflow: hidden; */
}
.publishment .published{
	margin-bottom: 5px;
}
.publishment .published .col-sm-1 img{
	width: 50px;
	border-radius: 25px;
	border: 1px solid #ccc;
	margin: 8px 0 8px 0;
}
.publishment .published p.content{
	margin-bottom: 0;
}
.publishment .published p.content img.img{
	height: 80px;
}
.publishment .published p.content img.img:hover{
	cursor: pointer;
}
.publishment .published span.time{
	font-size: 13px;
	color: #777;
}
.publishment .published a.submit-go{
	float: right;
	/* margin-right: 15px; */
}
.publishment .published a.download{
	float: right;
}
.publishment .reply-btn{
	height: 32px;
	margin-top: -1px;
}
.publishment .published .reply-toggle,
.publishment .published .to-assignment,
.publishment .published .to-ppt,
.publishment .published .to-topic,
.publishment .published .to-source{
	color: #428BCA;
	float: right;
}
.publishment .replied-list .reply-in{
	color: #428BCA;
}
.publishment .published .reply-toggle:hover,
.publishment .published .to-assignment:hover,
.publishment .published .to-ppt:hover,
.publishment .published .to-topic:hover,
.publishment .published .to-source:hover,
.publishment .replied-list .reply-in:hover{
	cursor: pointer;
	text-decoration: underline;
}
.publishment .replied-list{
	margin: 0 -10px;
	border-top: 1px solid #ccc;
	background-color: #e4e4e4;
	padding-bottom: 5px; 
	font-size: 13px;
}
.publishment .replied-list .replied{
	padding: 4px 0;
}
.publishment .replied-list .replied p{
	display: inline-block;
	margin: 0 0 0 5px;
	width: 92%;
}
.publishment .replied-list .replied p img{
	width: 20px;
	border: 0;
	border-radius: 0;
}
.publishment .replied-list .replied .time{
	/* display: block; */
	color: #888;
	font-size: 12px;
}
.publishment .published label.topic-title{
	font-size: 15px;
	color: #777;
}
.publishment .replied-list .replied + div.replied{
	border-top: 1px solid #ccc;
}
.publishment .replied-list .replied img,
.publishment .reply .repling img{
	width: 32px;
	border-radius: 16px;
	border: 1px solid #ccc;
	vertical-align: top;
}
.publishment .replied-list .replied .repling{
	margin-left: 37px;
	display: none;
}
.publishment .reply{
	padding: 5px 0;
	margin: 0 -10px;
	border-top: 1px solid #ccc;
	background-color: #ddd;
	display: none;
}
.publishment .reply .repling .form-control,
.publishment .replied-list .repling .form-control{
	display: inline-block;
	width: 80.2%;
}
@media (max-width: 1200px){
	.publishment .reply .repling .form-control,
	.publishment .replied-list .repling .form-control{
		display: inline-block;
		width: 75.5%;
	}
}

#img-show img.img{
	width: 868px;
}

/* Published Part END */

#topic-content-modal .modal-body{
	background-color: #e4e4e4;
	border-radius: 4px;
	padding: 0 0 10px;
}
#topic-content-modal .publishment{
	margin: 0;
	border: 0;
}
#topic-content-modal .publishment .published{
	margin-bottom: 5px;
}
</style>
<script>
	import nHeader from '../components/nHeader.vue'
	import nFooter from '../components/nFooter.vue'
	export default {
		data : function () {
			return {
				user: {},
				filePanelToggle: false
			}
		},
		methods : {
			fileToggle : function() {
				console.log(this.filePanelToggle);
				this.filePanelToggle = !this.filePanelToggle;
			}
		},
		components : {
			nHeader,
			nFooter
		}
	}
</script>