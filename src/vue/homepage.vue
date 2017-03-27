<template>
	<div>
		<n-header></n-header>
		<div class="container main">
			<div class="row">
				<div class="col-md-3">
					<div class="simpleInfo-part">
						<div class="row">
							<div class="col-md-12">
								<a href="uploadFace.do">
									<img v-if="user.faceIcon" :src="path + user.faceIcon" alt="">
									<img v-else src="" alt="">
								</a>
							</div>
						</div>
					</div>
					<visitors-list></visitors-list>
					<friends-list :isSelf="true"></friends-list>
				</div>

				<div class="col-md-9 publish-well">
					<div class="publish-part">
						<form id="publish-form" method="POST" ENCTYPE="multipart/form-data">
							<input type="hidden" name="" value="" >
							<div class="row">
								<div class="col-md-12">
									<textarea v-model="tweetContent" name="content" id="content" class="form-control" placeholder="说点新鲜事儿吧~"></textarea>
								</div>
							</div>
							<div class="row" id="publish-action">
								<div class="col-md-10">
									<a @click="faceToggle" class="face-trigger">
										<img :src="path + '/resource/js/rich-text/img/face-logo.gif'">
									</a>
									<div v-if="facePanelToggle" class="face-panel">
										<table><tbody>
											<tr><td>111</td></tr>
										</tbody></table>
									</div>
									<a class="file-trigger" @click="fileToggle">
										<i class="glyphicon glyphicon-paperclip"></i>
									</a>
									<div v-if="filePanelToggle" class="file-panel">
										<a class="btn btn-sm btn-success add-file">
											<i class="glyphicon glyphicon-plus"></i> 添加文件
										</a>
										<span>至多添加6个文件</span>
										<input type='file' name="files" multiple>
										<ul class='imgs'></ul>
										<ul class='others'></ul>
										<p class="text-danger"><i class="glyphicon glyphicon-exclamation-sign"></i> 添加文件失败</p>
									</div>
									<span id="publish-msg">还能输入<i id="rest-num">{{wordsLeft}}</i>个字</span>
								</div>
								<div class="col-md-2">
									<a @click="postTweet" class="btn btn-danger" id="publish-btn">
										发&nbsp;布
									</a>
								</div>
							</div>
						</form>
					</div> 

					<div class="published-part">
						<div class="row read-option">
							<div class="col-md-12">
								<span @click="currentContent = 'tweets'" class="selected">好友</span>
								<span @click="currentContent = 'assignments'" class="">作业</span>
								<span @click="currentContent = 'topics'" class="">交流</span>
								<span @click="currentContent = 'ppts'" class="">课件</span>
								<span @click="currentContent = 'sources'" class="">资源</span>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12" id="publishment-list">
								<p v-if="tweets == []" class="loading">载入中，请稍后……</p>

								<div v-if="currentContent == 'tweets'" v-for="tweet in tweets" class="publishment">
									<div class="row published">
										<div class="col-sm-1">
											<img :src="path + tweet.userFaceIcon">
										</div>
										<div class="col-sm-11">
											<a href=""><label class="name">{{tweet.userName}}</label></a>
											分享了一件新鲜事
											<p v-html="tweet.content" class="content">
												{{tweet.content}}
											</p>
											<span class="time">{{tweet.time}}</span>
											<span class="reply-toggle">评论</span>
										</div>
									</div>
								</div>

								<div v-if="currentContent == 'assignments'" v-for="assignment in assignments" class="publishment">
									<div class="row published">
										<div class="col-sm-1">
											<img :src="path + '/resource/img/lesson.png'">
										</div>
										<div class="col-sm-11">
											<a href=""><label class="name">{{assignment.lesson}}</label></a>
											发布了一项新作业
											<p class="content">
												{{assignment.title}}
											</p>
											<span class="time">{{assignment.time}}</span>
											<span class="reply-toggle">查看</span>
										</div>
									</div>
								</div>

								<div v-if="currentContent == 'topics'" v-for="topic in topics" class="publishment">
									<div class="row published">
										<div class="col-sm-1">
											<img v-if="topic.authorFaceIcon" :src="path + topic.authorFaceIcon">
											<img v-else :src="path + '/resource/img/blank.jpg'">
										</div>
										<div class="col-sm-11">
											<a href=""><label class="name">{{topic.lesson}}</label></a>
											展开了一个新讨论
											<p class="content">
												{{topic.author}} : {{topic.title}}
											</p>
											<span class="time">{{topic.time}}</span>
											<span class="reply-toggle">评论</span>
										</div>
									</div>
								</div>

								<div v-if="currentContent == 'ppts'" v-for="ppt in ppts" class="publishment">
									<div class="row published">
										<div class="col-sm-1">
											<img :src="path + '/resource/img/lesson.png'">
										</div>
										<div class="col-sm-11">
											<a href=""><label class="name">{{ppt.lesson}}</label></a>
											上传了一个新课件
											<p class="content">
												{{ppt.title}}
											</p>
											<span class="time">{{ppt.time}}</span>
											<span class="reply-toggle">评论</span>
										</div>
									</div>
								</div>

								<div v-if="currentContent == 'sources'" v-for="source in sources" class="publishment">
									<div class="row published">
										<div class="col-sm-1">
											<img v-if="source.authorFaceIcon" :src="path + source.authorFaceIcon">
											<img v-else :src="path + '/resource/img/blank.jpg'">
										</div>
										<div class="col-sm-11">
											<a href=""><label class="name">{{source.lesson}}</label></a>
											分享了一个新资源
											<p class="content">
												{{source.author}} - {{source.title}}
											</p>
											<span class="time">{{source.time}}</span>
											<span class="reply-toggle">评论</span>
										</div>
									</div>
								</div>

							</div>
						</div>
						<pagination v-on:nextPage="currentPage += 1" v-on:prevPage="currentPage -= 1" :totalPage="pageInfo.page_count"></pagination>
					</div>
				</div>
				
			</div>
		</div>
		<n-footer></n-footer>
	</div>
</template>

<script>
	import nHeader from '../components/nHeader.vue'
	import nFooter from '../components/nFooter.vue'
	import friendsList from '../components/friendsList.vue'
	import visitorsList from '../components/visitorsList.vue'
	import pagination from '../components/pagination.vue'
	export default {
		data : function () {
			return {
				user: {},
				filePanelToggle: false,
				facePanelToggle: false,
				tweetContent : '',				//要发布的动态内容
				tweets : [],					//好友动态列表
				pageInfo : {},					//分页信息
				assignments : [],				//作业动态列表
				topics : [],					//交流区动态列表
				sources : [],					//资源动态列表
				ppts : [],						//课件动态列表
				currentPage : 1,				//当前页面
				currentContent : 'tweets',		//当前动态类型
				file : []						//上传的文件
			}
		},
		computed : {
			path : function() {
				return this.$store.getters.getStaticPath;
			},
			faceIcon : function() {
				return this.$store.getters.getFaceIcon;
			},
			wordsLeft : function() {
				let rest = 170 - this.tweetContent.length;
				return rest < 0 ? 0 : rest;
			}
		},
		mounted : function() {
			this.getUserInfo();
			this.getTweets();
		},
		watch : {
			currentPage : 'getTweets',
			currentContent : function(curVal, oldVal) {
				switch (curVal) {
					case 'tweets':
						this.getTweets();
						break;
					case 'assignments':
						this.getAssignments();
						break;
					case 'ppts':
						this.getPpts();
						break;
					case 'topics':
						this.getTopics();
						break;
					case 'sources':
						this.getSources();
						break;
					default:
						this.getTweets();
						break;
				}
			}
		},
		methods : {
			fileToggle : function() {
				this.filePanelToggle = !this.filePanelToggle;
			},
			faceToggle : function() {
				this.facePanelToggle = !this.facePanelToggle;
			},
			getUserInfo : function() {
				this.$ajax.get('my/profiles')
				.then((returnData) => {
					this.user = returnData.data.data;
					this.$store.dispatch('setUserInfo', this.user);
				})
				.catch((error) => {
					console.log('载入个人信息失败');
				})
			},
			getTweets : function() {
				this.$ajax.get('my/friends/tweets?page=' + this.currentPage)
				.then((returnData) => {
					console.log('loading tweets ...')
					this.tweets = returnData.data.data;
					this.pageInfo = returnData.data.page;
				})
				.catch((error) => {
					console.log('载入动态失败');
				})
			},
			getAssignments : function() {
				this.$ajax.get('my/assignments?page=' + this.currentPage)
				.then((returnData) => {
					this.assignments = returnData.data.data;
					this.pageInfo = returnData.data.page;
				})
				.catch((error) => {
					console.log('载入动态失败');
				})
			},
			getPpts : function() {
				this.$ajax.get('my/assignments?page=' + this.currentPage)
				.then((returnData) => {
					this.ppts = returnData.data.data;
					this.pageInfo = returnData.data.page;
				})
				.catch((error) => {
					console.log('载入动态失败');
				})
			},
			getTopics : function() {
				this.$ajax.get('my/topics?page=' + this.currentPage)
				.then((returnData) => {
					this.topics = returnData.data.data;
					this.pageInfo = returnData.data.page;
				})
				.catch((error) => {
					console.log('载入动态失败');
				})
			},
			getSources : function() {
				this.$ajax.get('my/sources?page=' + this.currentPage)
				.then((returnData) => {
					this.sources = returnData.data.data;
					this.pageInfo = returnData.data.page;
				})
				.catch((error) => {
					console.log('载入动态失败');
				})
			},
			postTweet : function() {
				this.$ajax.post('my/tweets', {
					content : this.tweetContent,
					file : []
				})
				.then((returnData) => {
					this.tweetContent = '';
					// console.log(returnData.data);
					this.getTweets(1);
				})
				.catch((error) => {
					console.log('发布动态失败')
				})
			}
		},
		components : {
			nHeader,
			nFooter,
			friendsList,
			visitorsList,
			pagination
		}
	}
</script>
<style lang="sass">
	@import '../scss/common.scss';
	.simpleInfo-part{
		/*background-image: url("../img/img-bg.jpg");*/
		background-color: transparent;
		background-repeat: no-repeat;
	}
	.simpleInfo-part img{
		width: 14em;
		border: 1px solid #ccc;
		border-radius: 50%;
		margin: 12%;
	}
	.simpleInfo-part img:hover{
		border: 3px solid #ECF9FF;
	}

	@media screen and (max-width: 1200px) and (min-width: 992px){
		.simpleInfo-part img{
			width:12em;
			margin: 10%;
		}
	}
	@media screen and (max-width: 992px){
		.simpleInfo-part{
			display: none;
			margin-top: 10px;
		}
		.simpleInfo-part img{
			margin-top: 1.8em;
			margin-left: 1.8em;
		}
	}
	.publish-well {
		background-color: $bgc;
		padding: 0 30px;
		@include bordered(1px, 6px);
		@include shadowed(10px);

		#content {
			width: 100%;
		}
	}
	#publish-btn {
		width: 80px;
	}
	.publish-part{
		padding: 30px 12px 12px 12px;
		textarea{
			height: 5.3em;	
		}
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
		font-size: 16px;
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

#publish-fail .modal-header, #reply-fail .modal-header{
	border-bottom: 0;
}
#publish-fail .modal-title, #reply-fail .modal-title{
	color: #D9534F;
	text-align: center;
}
/* Published Part BEGIN */

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
	border-top: 1px solid $gray;
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

.file-panel a.add-file + span{
	color: #ccc;
	margin-left: 0.4em;
}
.file-panel input{
	position: absolute;
	margin-top: -26px;
	opacity: 0;
	width: 85px;
}
.file-panel, .face-panel {
	position: absolute;
	background-color: #fff;
	z-index: 1;
	padding: 6px;
	border: 1px solid #ccc;
	border-radius: 4px; 
}
</style>