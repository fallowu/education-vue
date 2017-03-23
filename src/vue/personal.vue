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
								<span>
									<a v-if="!canEdit" href="javascript:void(0);" class="btn btn-xs" @click="editInfo"><i class="glyphicon glyphicon-pencil"></i></a>
									<a v-if="canEdit" href="javascript:void(0);" class="btn btn-xs" @click="saveInfo"><i class="glyphicon glyphicon-floppy-save"></i></a>
									<a v-if="canEdit" href="javascript:void(0);" class="btn btn-xs" @click="cancelInfo"><i class="glyphicon glyphicon-remove-circle"></i></a>
								</span>
								<form class="form form-horizontal" id="college-form" method="POST">
									<div :class="formGroup">
										<label class="col-sm-3 control-label">姓名</label>
										<div class="col-sm-9">
											<span class="show-field">{{user.name}}</span>
										</div>
									</div>
									<div :class="formGroup">
										<label class="col-sm-3 control-label">学号</label>
										<div class="col-sm-9">
											<span class="show-field">{{user.id}}</span>
										</div>
									</div>
									<div :class="formGroup">
										<label class="col-sm-3 control-label">院系</label>
										<div class="col-sm-9">
											<span class="show-field">{{user.depart}}</span>
										</div>
									</div>
								</form>

								<info-form v-if="!canEdit" :user="user" :formGroup="formGroup"></info-form>


								<form v-if="canEdit" class="form form-horizontal basic-form">
									<input type="hidden" name="userId" value="${user.userId}" />
									<div :class="formGroup">
										<label class="col-sm-3 control-label">性别</label>
										<div class="col-sm-9">
											<label class="radio-inline " >
												<input type="radio" name="gender" id="gender-m" value="男" v-model="user.gender"> 男
											</label>
											<label class="radio-inline ">
												<input type="radio" name="gender" id="gender-f" value="女" v-model="user.gender"> 女
											</label>
										</div>
									</div>
									<div :class="formGroup">
										<label class="col-sm-3 control-label">个性签名</label>
										<div class="col-sm-9">
											<textarea v-model="user.motto" class="form-control" id="motto" name="motto"></textarea>
											<span class="text-danger"></span>
										</div>
									</div>
									<div :class="formGroup">
										<label class="col-sm-3 control-label">兴趣爱好</label>
										<div class="col-sm-9">
											<input type="text" class="form-control" v-model="user.hobbies" name="hobbies" placeholder="请输入兴趣爱好，用空格隔开">
											<span class="text-danger"></span>
										</div>
									</div>
									<div :class="formGroup">
										<label class="col-sm-3 control-label">家乡</label>
										<div class="col-sm-9">
											<select @change="changeCities" id="province" class="form-control" v-model="currentProvinceId">
												<option v-for="province in provinces" :value="province.provinceId">{{province.name}}</option>
											</select>
											<span class="">省/直辖市</span>
											<select class="form-control" data-id="" id="city">
												<option v-for="city in cities" :value="city.cityId">{{city.name}}</option>
											</select>
											<span class="">市/区</span>						
										</div>
									</div>
									<div :class="formGroup">
										<label class="col-sm-3 control-label">生日</label>
										<div class="col-sm-9">
											<input v-if="user.birthday" type="date" class="form-control" :value="user.birthday" id="birthday" name="birthday" />
											<input v-else type="date" class="form-control" id="birthday" name="birthday" />
										</div>
									</div>
									<div :class="formGroup">
										<label class="col-sm-3 control-label">手机</label>
										<div class="col-sm-9">
											<input v-if="user.telephone" type="text" class="form-control" :value="user.telephone" id="telephone" name="telephone" placeholder="请输入手机信息" />
											<input v-else type="text" class="form-control" id="telephone" name="telephone" placeholder="请输入手机信息" />
											<span class="text-danger"></span>
										</div>
									</div>
									<div :class="formGroup">
										<label class="col-sm-3 control-label">常用邮箱</label>
										<div class="col-sm-9">
											<input v-if="user.telephone" type="text" class="form-control" :value="user.email" id="email" name="email" placeholder="请输入常用邮箱信息" />
											<input v-else type="text" class="form-control" id="email" name="email" placeholder="请输入常用邮箱信息" />
											<span class="text-danger"></span>
										</div>
									</div>
								</form>
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

					<visitors-list :visitors="visitors"></visitors-list>
					<friends-list :friends="friends"></friends-list>
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
				margin-bottom: 0;
			}
			.form-group.form-margin {
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
	import visitorsList from '../components/visitorsList.vue'
	export default {
		data : function() {
			return {
				provinces : [],
				cities : [],
				currentProvinceId : '',
				canEdit : false,
				artlist : [],
				user : {},
				tweets : [],
				formGroup : {
					'form-group' : true,
					'form-margin' : false
				}
			}
		},
		computed : {
			path : function() {
				return this.$store.getters.getStaticPath;
			}, 
			tweetsReverse : function() {
				return this.tweets.reverse();
			}

		// 	province : function() {
		// 		let home = this.user.home,
		// 			pro = home.substr(0, home.indexOf(' '));
		// 		return pro === '' ? home : pro;
		// 	},
		// 	city : function() {
		// 		let home = this.user.home,
		// 			pro = home.substr(0, home.indexOf(' '));
		// 		return pro === '' ? '' : home.substr(home.indexOf(' '));
		// 	}
	},
	mounted : function () {
			// this.getPC();
			this.getUserInfo();
			this.getProvinces();
			this.getTweets(1);
		},
		methods : {
			//获取省份列表信息
			getProvinces : function() {
				this.$ajax.get('util/provinces')
				.then((returnData) => {
					this.provinces = returnData.data.data;
				})
				.catch((error) => {
					console.log('载入所有省份信息失败');
				})
			}, 
			//获取城市列表信息
			getCities : function(pId) {
				this.$ajax.get('util/provinces/' + pId + '/cities')
				.then((returnData) => {
					this.cities = returnData.data.data;
					//todo
					console.log(this.cities);
				})
				.catch((error) => {
					console.log('载入城市信息失败');
				})
			},
			getUserInfo : function() {
				this.$ajax.get('my/profiles')
				.then((returnData) => {
					this.user = returnData.data.data;
				})
				.catch((error) => {
					console.log('载入个人信息失败');
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
			},
			changeCities : function() {
				let id = this.currentProvinceId;
				this.getCities(id);
			},
			editInfo : function() {
				this.canEdit = true;
				this.formGroup['form-margin'] = true;
			},
			saveInfo : function() {
				this.canEdit = false;
			},
			cancelInfo : function() {
				this.canEdit = false;
			}
		},
		components : {
			nHeader,
			nFooter,
			infoForm,
			friendsList,
			visitorsList
		}
	}
</script>