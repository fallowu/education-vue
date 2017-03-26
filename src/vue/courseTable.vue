<template>
	<div>
		<n-header></n-header>
		<div class="container main">
			<h3>课程列表</h3>
			<div class="row">
				<div v-for="lesson in lessons" class="col-md-3">
					<div class="lesson-item">
						<p class="lesson-item-term">
							<span>{{lesson.term.substring(0, 9)}}</span>&nbsp;学年&nbsp;&nbsp;<span>{{lesson.term.substring(11, 13)}}</span>&nbsp;学期
						</p>
						<router-link :to="{name: 'lesson', params:{id: lesson.id}}" >{{lesson.name}}</router-link>
						<p class="lesson-item-teacher">教师：{{lesson.teacher}}</p>
						<span>周课时：{{lesson.weekTime}}</span>
						<span>&nbsp;学分：{{lesson.credit}}</span>
					</div>
					
				</div>
			</div>
		</div> <!-- /container -->
		<n-footer></n-footer>
	</div>
</template>

<script>
	import nHeader from '../components/nHeader.vue'
	import nFooter from '../components/nFooter.vue'
	export default {
		data : function () {
			return {
				terms : {},
				lessons : {}
			}
		},
		mounted : function() {
			this.getTerms();
			this.getLessons();
		},
		methods : {
			getTerms : function() {
				this.$ajax.get('util/terms')
				.then((returnData) => {
					this.terms = returnData.data.data;
				})
				.catch((error) => {
					console.log('载入学期信息失败');
				})
			},
			getLessons : function() {
				this.$ajax.get('my/lessons')
				.then((returnData) => {
					this.lessons = returnData.data.data;
				})
				.catch((error) => {
					console.log('载入课程信息失败');
				})
			}
		},
		components : {
			nHeader,
			nFooter
		}
	}
</script>

<style lang="sass">
	@import '../scss/common.scss';
	h3 {
		margin-top: 0px;
		margin-bottom: 20px;
	}
	.lesson-item {
		@include bordered(1px, 6px);
		@include shadowed(10px);
		margin-bottom: 20px;
		padding: 15px;
		background-color: #fafafa;
		.lesson-item-term span {
			font-weight: bold;
			color: $blue;
		}
		.lesson-item-teacher {
			font-size: 13px;
		}
		>span {
			color: gray;
			font-size: 12px;
		}
		>a {
			display: block;
			margin-bottom: 8px;
		}
	}
</style>