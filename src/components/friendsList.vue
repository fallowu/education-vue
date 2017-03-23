<template>
	<div class="friend-part box">
		<div class="row">
			<div class="col-sm-12">
				<label class="box-title">好友列表</label>
				<a href="">更多</a>
			</div>
		</div>
		<div class="row" id="friend-list">
			<span v-if="!friends" class="no-friend">暂无好友</span>
				<div v-for="friend in friends" class="friend">
					<img v-if="friend.faceIcon" :src="path + friend.faceIcon" alt="">
					<img v-else :src="path + '/resource/img/blank.jpg'" alt="">
					<a class="name" target="_blank" href="">{{friend.name}}</a>
				</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		data : function() {
			return {
				friends : []
			}
		},
		mounted : function() {
			this.getFriends();
		},
		methods : {
			getFriends : function() {
				this.$ajax.get('my/friends?page=1')
				.then((returnData) => {
					this.friends = returnData.data.data;
				})
				.catch((error) => {
					console.log('载入好友信息失败')
				})
			}
		},
		computed : {
			path : function () {
				return this.$store.getters.getStaticPath;
			}
		}
	}
</script>

<style lang="sass">
	.simpleInfo-part{
	/*background-image: url("../img/img-bg.jpg");*/
	background-color: #fcfcfc;
	background-repeat: no-repeat;
	border: 1px solid #ccc;
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
/*  Simple Info Part END */

/* Visitor Part & friend Part  BEGIN */
.friend-part{
	margin-top: 10px;
	label.box-title + a{
		margin-top: -2.2em;
		color: #ddd;
	}
}

#friend-list{
	margin: 3px 1px 0 9px;
	.friend{
		padding-right: 0;
		float: left;
		margin-right: 8px;
		margin-bottom: 8px;
	}
}

#friend-list .friend img{
	border: 1px solid #ccc;
	width: 75px;
}
#friend-list .friend a.name, 
#friend-list .friend span{
	display: block;
	text-align: center;
}

@media screen and (max-width: 1200px) and (min-width: 992px){
	#friend-list .friend img{
		width: 92px;
	}
}
@media screen and (max-width: 992px) and (min-width: 768px){
	#friend-list .friend img{
		width: 70px;
	}
}
@media screen and (max-width: 308px){
	#friend-list .friend img{
		width: 4.8em;
	}
}
</style>