<template>
	<div>
		<n-header></n-header>
		<div class="container main timeline">
			<div v-for="term in courseList" class="row" :id="'term' + term.termId">
				<div class="col-md-3 timeline-time">
					<a href="javascript:void(0)">
						<span>{{term.termName.substring(0,9)}}</span> 学年&nbsp;&nbsp;&nbsp;<span>
						{{term.termName.substring(11,13)}}</span> 学期
					</a>
					<span class="point">&nbsp;</span>
				</div>
				<div class="col-md-9 timeline-content">
					<p class="content-title"> 共 {{term.count}} 门课</p>
					<div class="course-list">
						<template v-for="course in term.courseList">
							<div class="course-item" :class ="{tutor : course.tutor}">
								<a v-if="course.courseStatus == 1" href="">{{course.courseName}}</a>
								<a v-if="course.courseStatus == 0" href="">{{course.courseName}}</a>
								<span>周课时： {{course.courseWeekTime}}</span>
								<span>学分： {{course.courseCredit}}</span>
							</div>
						</template>
					</div>
				</div>
			</div>
</div> <!-- /container -->
<n-footer></n-footer>
</div>
</template>
<style lang="sass">

</style>
<script>
	import nHeader from '../components/nHeader.vue'
	import nFooter from '../components/nFooter.vue'
	export default {
		data : function () {
			return {
				term : {}
			}
		},
		components : {
			nHeader,
			nFooter
		}
	}
</script>