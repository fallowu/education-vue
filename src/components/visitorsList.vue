<template>
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
					<img v-if="visitor.faceIcon" :src="path + visitor.faceIcon" alt="">
					<img v-else :src="path + '/resource/img/blank.jpg'" alt="">
					<a class="name" target="_blank" :href="visitor.homepage">{{visitor.name}}</a>
					<span class="time">{{visitor.time}}</span>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				visitors : []
			}
		},
		methods : {
			getVisitors : function() {
				this.$ajax.get('my/visitors?page=1')
				.then((returnData) => {
					this.visitors = returnData.data.data;
				})
				.catch((error) => {
					console.log('载入访客信息失败')
				})
			}
		},
		mounted : function() {
			this.getVisitors();
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
	.visitor-part{
		margin-top: 10px;
	}
	.visitor-part label.box-title + a{
		margin-top: -2.2em;
		color: #ddd;
	}
	#visitor-list{
		margin: 3px 1px 0 9px;
	}
	#visitor-list .visitor{
		padding-right: 0;
		float: left;
		margin-right: 8px;
		margin-bottom: 8px;
	}
	#visitor-list .visitor img{
		border: 1px solid #ccc;
		width: 75px;
	}
	#visitor-list .visitor a.name,
	#visitor-list .visitor span{
		display: block;
		text-align: center;
	}
	#visitor-list .visitor span.time{
		font-size: 0.6em;
		color: #aaa;
	}
	@media screen and (max-width: 1200px) and (min-width: 992px){
		#visitor-list .visitor img{
			width: 92px;
		}
	}
	@media screen and (max-width: 992px) and (min-width: 768px){
		#visitor-list .visitor img{
			width: 70px;
		}
	}
	@media screen and (max-width: 308px){
		#visitor-list .visitor img{
			width: 4.8em;
		}
	}
</style>