<template>
	<form class="form form-horizontal basic-form">
		<input type="hidden" name="userId" value="${user.userId}" />
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
</template>
<style lang="sass">

</style>
<script>
	export default {
		props: {
				user : {},
				formGroup : {
					'form-group' : true,
					'form-margin' : false
			}
		}
	}
</script>