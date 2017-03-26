<template>
	<div>
		<n-header></n-header>
		<div class="container main">
			<div class="row">
				<div class="col-md-9">
					<div class="basic-info box">
						<div class="row">
							<div class="col-md-12">
								<label class="box-title lb">基本信息</label>
								<info-form :user="user"></info-form>
							</div>
						</div>
					</div>
					<div id="latest-published" class="box">
						<div class="row">
							<div class="col-md-12">
								<label class="box-title llb">最新动态</label>
								<div id="latest-published-list">
									<div v-for="tweet in tweetsReverse" class="list-item">
										<p class="content">
											{{tweet.content}}
										</p>
										<span class="time">{{tweet.time}}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

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
					<friends-list :isSelf="false" :userId="userId"></friends-list>
				</div>
			</div>
		</div>
		<n-footer></n-footer>
	</div>

</template>
<style lang="sass">

	.basic-info {
		label {
			margin-bottom: 0;
		}
		label.box-title + span a{
			color: #eee;
			margin-top: 4px;
		}
		label.box-title + span a:active{
			box-shadow: none;
		}
		label.box-title + span a:visited{
			color: #eee;
		}
		label.box-title + span a:hover{
			color: #fff;
		}
		form {
			margin-bottom: 12px;
			.form-group {
				margin-bottom: 8px;
			}
			.show-field{
				display: block;
				padding-top: 7px;
			}
			.show-field.grey{
				color: #aaa;
			}
			.hobby-item{
				border-radius: 3px;
				padding: 3px 6px; 
				margin-right: 4px;
				margin-bottom: 4px;
				display: inline-block;
				color: #fff;
			}
			.hobby-item:nth-child(5n+1){
				background-color: #F999AA;
			}
			.hobby-item:nth-child(5n+2){
				background-color: #FAD136;
			}
			.hobby-item:nth-child(5n+3){
				background-color: #38E454;
			}
			.hobby-item:nth-child(5n+4){
				background-color: #31A2FF;
			}
			.hobby-item:nth-child(5n){
				background-color: #D15AFF;
			}
			.hobby-item i{
				cursor: pointer;
			}
		}
	}
	.form-control{
		width: 70%;
	}

	#latest-published label{
		margin-bottom: 0;
	}

	.basic-form{
		margin-top: -10px;
	}

	@media (max-width: 768px){
		.basic-info {
			form{
				padding-left: 10%;
			}
			.form-control{
				width: 90%;
			}
		}
		#province, #city{
			width: 60%;
		}
		#city{
			margin-left: 0;
			margin-top: 4px;
		}
	}
	#province, #city{
		width: 25%;
		display: inline-block;
	}
	#city{
		margin-left: 3.2%;
	}

	@media (max-width: 1200px) and (min-width: 992px){
		#province, #city{
			width: 23.1%;
		}
	}
	@media (max-width: 992px) and (min-width: 768px){
		#province, #city{
			width: 23.5%;
		}
	}

	#add-hobby{
		width: 70%;
	}
	@media (max-width: 768px){
		#add-hobby{
			width: 90%;
		}
	}
	#new-hobby{
		border-right: 0;
	}

	#latest-published-list{
		padding: 10px;
		.msg {
			color: #888;
		}
		.list-item {
			border: 1px solid #ccc;
		}
		.list-item:nth-child(odd){
			text-align: left;
			border-left-width: 0;
		}
		.list-item:nth-child(even){
			text-align: right;
			border-right-width: 0;
		}
		.list-item + .list-item{
			margin-top: 10px;
		}
		.list-item p{
			margin: 0;
			padding: 4px;
		}
		.list-item:nth-child(odd) p{
			border-left: 5px solid #BBE4F5;
		}
		.list-item:nth-child(even) p{
			border-right: 5px solid #BBE4F5;
		}
		.list-item span.time{
			font-size: 12px;
			color: #777;
			padding: 2px 4px;
			display: block;
		}
		.list-item:nth-child(odd) span.time{
			border-left: 5px solid #ccc;
		}
		.list-item:nth-child(even) span.time{
			border-right: 5px solid #ccc;
		}
		.list-item p.content img.img{
			height: 80px;
		}
		.list-item p.content img.img:hover{
			cursor: pointer;
		}
	}


	#img-show img.img{
		width: 868px;
	}

	#added-mark, #add-friend{
		padding: 3px 8px;
		margin-top: 11px;
		margin-right: 15px;
	}
	#added-mark:hover{
		background-color: #5cb85c;
		border-color: #4cae4c;
	}
	#add-friend:hover{
		background-color: #5bc0de;
		border-color: #46b8da;
	}

	#motto + span, #telephone + span, #email + span{
		display: block;
	}
</style>

<script>
	import nHeader from '../components/nHeader.vue'
	import nFooter from '../components/nFooter.vue'
	import infoForm from '../components/infoForm.vue'
	import friendsList from '../components/friendsList.vue'
	export default {
		data : function() {
			return {
				user : {},
				tweets : []
			}
		},
		computed : {
			path : function() {
				return this.$store.getters.getStaticPath;
			}, 
			tweetsReverse : function() {
				return this.tweets.reverse();
			},
			userId : function() {
				return this.$route.query.id;
			}
		},
		mounted : function () {
			// this.getPC();
			this.getUserInfo();
			this.getTweets(1);
		},
		watch : {
			$route : function() {
				this.getUserInfo();
				this.getTweets(1);
			}
		},
		methods : {
			getUserInfo : function() {
				this.$ajax.get('users/' + this.userId + '/profiles')
				.then((returnData) => {
					this.user = returnData.data.data;
				})
				.catch((error) => {
					console.log('载入用户信息失败');
				})
			},
			getTweets : function(page) {
				this.$ajax.get('my/tweets?page=' + page)
				.then((returnData) => {
					this.tweets = returnData.data.data;
				})
				.catch((error) => {
					console.log('载入动态信息失败')
				})
			}

		},
		components : {
			nHeader,
			nFooter,
			infoForm,
			friendsList
		}
	}
</script>