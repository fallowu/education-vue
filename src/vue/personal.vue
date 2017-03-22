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


								<!-- displayForm -->
								<form v-if="!canEdit" class="form form-horizontal basic-form">
									<input type="hidden" name="userId" value="${user.userId}" />
									<div :class="formGroup">
										<label class="col-sm-3 control-label">昵称</label>
										<div class="col-sm-9">
											<span v-if="user.nickName" class="show-field">{{user.nickName}}</span>
											<span v-else class="show-field grey">暂无昵称</span>
											<span class="text-danger"></span>
										</div>
									</div>
									<div :class="formGroup">
										<label class="col-sm-3 control-label">性别</label>
										<div class="col-sm-9">
											<span v-if="user.gender" class="show-field">{{user.gender}}</span>
											<span v-else class="show-field grey">暂无性别信息</span>
										</div>
									</div>
									<div :class="formGroup">
										<label class="col-sm-3 control-label">个性签名</label>
										<div class="col-sm-9">
											<span v-if="user.motto" class="show-field">{{user.motto}}</span>
											<span v-else class="show-field grey">暂无个性签名</span>
											<span class="text-danger"></span>
										</div>
									</div>
									<div :class="formGroup">
										<label class="col-sm-3 control-label">兴趣爱好</label>
										<div class="col-sm-9">
											<span v-if="user.hobbies" class="show-field">{{user.hobbies}}</span>
											<span v-else class="show-field grey">暂无爱好信息</span>
											<span class="text-danger"></span>
										</div>
									</div>
									<div :class="formGroup">
										<label class="col-sm-3 control-label">家乡</label>
										<div class="col-sm-9">
											<span v-if="user.home" class="show-field">{{user.home}}</span>
											<span v-else class="show-field grey">暂无家乡信息</span>
										</div>
									</div>
									<div :class="formGroup">
										<label class="col-sm-3 control-label">生日</label>
										<div class="col-sm-9">
											<span v-if="user.birthday" class="show-field">{{user.birthday}}</span>
											<span v-else class="show-field grey">暂无生日信息</span>						
										</div>
									</div>
									<div :class="formGroup">
										<label class="col-sm-3 control-label">手机</label>
										<div class="col-sm-9">
											<span v-if="user.telephone" class="show-field">{{user.telephone}}</span>
											<span v-else class="show-field grey">暂无手机信息</span>
											<span class="text-danger"></span>
										</div>
									</div>
									<div :class="formGroup">
										<label class="col-sm-3 control-label">常用邮箱</label>
										<div class="col-sm-9">
											<span v-if="user.telephone" class="show-field">{{user.email}}</span>
											<span v-else class="show-field grey">暂无常用邮箱信息</span>
											<span class="text-danger"></span>
										</div>
									</div>
								</form>

								<!-- editForm -->
								<form v-if="canEdit" class="form form-horizontal basic-form">
									<input type="hidden" name="userId" value="${user.userId}" />
									<div :class="formGroup">
										<label class="col-sm-3 control-label">昵称</label>
										<div class="col-sm-9">
											<input v-if="user.nickName" type="text" class="form-control" :value="user.nickName" id="nickname" name="nickname" placeholder="请输入昵称">
											<input v-else type="text" class="form-control" id="nickname" name="nickname" placeholder="请输入昵称" />
											<span class="text-danger"></span>
										</div>
									</div>
									<div :class="formGroup">
										<label class="col-sm-3 control-label">性别</label>
										<div class="col-sm-9">
											<label class="radio-inline " >
												<input type="radio" name="gender" id="gender-m" value="0" :checked="!user.gender"> 男
											</label>
											<label class="radio-inline ">
												<input type="radio" name="gender" id="gender-f" value="1" :checked="user.gender"> 女
											</label>
										</div>
									</div>
									<div :class="formGroup">
										<label class="col-sm-3 control-label">个性签名</label>
										<div class="col-sm-9">
											<textarea v-if="user.motto" class="form-control" id="motto" name="motto">{{user.motto}}</textarea>
											<textarea  v-else class="form-control" id="motto" name="motto" ></textarea>
											<span class="text-danger"></span>
										</div>
									</div>
									<div :class="formGroup">
										<label class="col-sm-3 control-label">兴趣爱好</label>
										<div class="col-sm-9">
											<input v-if="user.hobbies" type="hidden" id="hobby" name="hobby" :value="user.hobbies"/>
											<input v-else type="hidden" id="hobby" name="hobby" value=""/>
											<span class="text-danger"></span>
											<div class="">
												<div id="hobby-list"></div>
												<div class="input-group" id="add-hobby">
													<input type="text" class="form-control" id="new-hobby" placeholder="请输入新的爱好，并用空格隔开">
													<span class="input-group-btn">
														<button class="btn btn-info" type="button" id="add-hobby-btn">
															<i class="glyphicon glyphicon-plus"></i>
														</button>
													</span>
												</div>
											</div>
										</div>
									</div>
									<div :class="formGroup">
										<label class="col-sm-3 control-label">家乡</label>
										<div class="col-sm-9">
											<select class="form-control" data-id="" id="province" name="homelandP">
												<option v-for="province in provinces" :value="province.provinceId">{{province.provinceName}}</option>
											</select>
											<span class="">省/直辖市</span>
											<select class="form-control" data-id="" id="city" name="homelandC">
												<option v-for="city in cities" :value="city.cityId">{{city.cityName}}</option>
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
									<p class="loading">载入中，请稍后……</p>
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
									<img v-if="user.faceIcon" src="" alt="">
									<img v-else src="" alt="">
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
							<template v-for="visitor in visitors">
								<div class="visitor">
									<img v-if="!visitor.faceIcon || visitor.faceIcon =='' " src="" alt="">
									<img v-else src="" alt="">
									<a class="name" target="_blank" :href="visitor.homepage">{{visitor.visitorName}}</a>
									<span class="time">{{visitor.time}}</span>
								</div>
							</template>
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
							<template v-for="friend in friends">
								<div class="friend">
									<img v-if="!friend.faceIcon || friend.faceIcon =='' " src="" alt="">
									<img v-else src="" alt="">
									<a class="name" target="_blank" :href="friend.homepage">{{friend.userName}}</a>
								</div>
							</template>
						</div>
					</div>
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
	import nHeader from '../components/nHeader.vue';
	import nFooter from '../components/nFooter.vue';
	export default {
		data : function() {
			return {
				provinces : [],
				cities : [],
				canEdit : false,
				artlist : [],
				visitors : [],
				friends : [],
				user : {},
				formGroup : {
					'form-group' : true,
					'form-margin' : false
				}
			}
		},
		mounted : function () {
			// this.getPC();
			this.provinces.push({ 
				"provinceId": 1,
				"provinceName": "上海"
			});
			this.getUserInfo();
		},
		methods : {
			//获取省份列表信息
			getProvinces : function() {
				this.$ajax.get('util/provinces')
				.then((returnData) => {
					this.privinces = returnData.data.data;
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
			editInfo : function() {
				this.canEdit = true;
				this.formGroup['form-margin'] = true;
			},
			saveInfo : function() {
				this.canEdit = false;
			}
		},
		components : {
			nHeader,
			nFooter
		}
	}
</script>