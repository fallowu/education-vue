<template>
	<div>
		<n-header></n-header>
		<div class="container main">
			<div class="row">
				<div class="col-md-12">
					<div class="bread">
						<label><a href="courseTable.do">我的课程</a></label>
						&gt; <span class="courseName">{{course.courseName}}</span> &gt;
						<span>课程空间</span>
						<a href="" class="switch-btn"><i class="glyphicon glyphicon-arrow-right"></i>进入班级空间</a>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-3">
					<div class="row" id="course-info">
						<div class="col-md-12">
							<div class="panel panel-info">
								<div class="panel-heading">课程简介</div>
								<div class="panel-body">
									<table>
										<tr><th>课程编号</th><td>{{course.courseId}}}</td></tr>
										<tr><th>课程名称</th><td>{{course.courseName}}</td></tr>
										<tr><th>周课时</th><td>{{course.courseWeekTime}}</td></tr>
										<tr><th>学分</th><td>{{course.courseCredit}}</td></tr>
									</table>
									<input type="hidden" id="curCourseId" value="${course.courseId}">
								</div>
							</div>
						</div>
					</div>

					<div v-if="!user.teacher" class="row" id="class-info">
						<div class="col-md-12">
							<div class="panel panel-info">
								<div class="panel-heading">我的班级</div>
								<div class="panel-body">
									<table>
										<tr><th>教学班号</th><td>{{classObj.classId}}</td></tr>
										<tr><th>教师</th><td>{{classObj.teacherName}}</td></tr>
										<tr><th>学期</th><td>{{classObj.termName}}</td></tr>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-9">
					<ul class="nav nav-tabs" id="section-list">
						<li role="presentation" data-target="1" class="active"><a href="javascript:void(0)">教材与参考书目</a></li>
						<li role="presentation" data-target="2"><a href="javascript:void(0)">重点难点讨论</a></li>
						<li role="presentation" data-target="3"><a href="javascript:void(0)">扩展阅读讨论</a></li>
						<li role="presentation" data-target="4"><a href="javascript:void(0)">经典试题</a></li>
						<li role="presentation" data-target="5"><a href="javascript:void(0)">面试经</a></li>
					</ul>
					<div id="tab-content">
						<div id="change-content"></div>
						<nav>
							<ul class="pagination"></ul>
						</nav>
					</div>
				</div>
			</div>
		</div> <!-- /container -->
		<!-- todo -->
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
				course: {},
				classObj: {}
			}
		},
		components : {
			nHeader,
			nFooter
		}
	}
</script>