<template>
	<div>
		<n-header></n-header>
		<div class="container main">
			<div class="row">
				<div class="col-md-12">
					<div class="bread">
						<label><router-link to="/courseTable">我的课程</router-link></label>
						&gt; <span class="courseName">{{lesson.name}}</span> &gt;
						<span>班级空间</span>
						<router-link :to="{name: 'course', params : {info: lesson}, query:{id: lesson.course}}" class="switch-btn">
							<i class="glyphicon glyphicon-arrow-right"></i>进入课程空间
						</router-link>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-3">
					<div class="row" id="class-info">
						<div class="col-md-12">
							<div class="panel panel-info">
								<div class="panel-heading">教学班信息</div>
								<div class="panel-body">
									<table>
										<tr><th>教学班号</th><td>{{lesson.id}}</td></tr>
										<tr><th>课程名称</th><td>{{lesson.name}}</td></tr>
										<tr><th>教师姓名</th><td>{{lesson.teacher}}</td></tr>
										<tr><th>学期</th><td>{{lesson.term}}</td></tr>
									</table>
									<input type="hidden" id="curClassId" value="">
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-9">
					<ul class="nav nav-tabs" id="section-list">
						<li role="presentation" :class="{ active: activeContent == 'assignments'}"><a @click="activeContent = 'assignments'" href="javascript:void(0)">作业</a></li>
						<li role="presentation" :class="{ active: activeContent == 'ppts'}"><a @click="activeContent = 'ppts'" href="javascript:void(0)">课件</a></li>
						<li role="presentation" :class="{ active: activeContent == 'topics'}"><a @click="activeContent = 'topics'" href="javascript:void(0)">交流区</a></li>
						<li role="presentation" :class="{ active: activeContent == 'sources'}"><a @click="activeContent = 'sources'" href="javascript:void(0)">资源共享</a></li>
						<li role="presentation" :class="{ active: activeContent == 'my'}"><a @click="activeContent = 'my'" href="javascript:void(0)">我的发布</a></li>
						<li role="presentation" :class="{ active: activeContent == 'students'}"><a @click="activeContent = 'students'" href="javascript:void(0)">同学列表</a></li>
  					<!-- <c:if test="${user.teacher}">
  						<li role="presentation" data-target="7"><a href="javascript:void(0)">学生列表</a></li>
  					</c:if>
  					<c:if test="${!user.teacher}">
  						<li role="presentation" data-target="7"><a href="javascript:void(0)">同学列表</a></li>
  					</c:if> -->
  				</ul>
  				<div id="tab-content">
  					<div id="change-content">

  						<table v-if="activeContent == 'assignments'" class="table table-hover">
  							<thead>
  								<tr><th style="width: 36%;">作业标题</th><th>发布日期</th><th>截止日期</th><th>状态</th></tr>
  							</thead>
  							<tbody id="assignment-list">
  								<tr v-for="assignment in assignments">
  									<td><a class="assignment" href="javascript:void(0);">{{assignment.title}}</a></td>
  									<td>{{assignment.time.substring(0, 10)}}</td>
  									<td>{{assignment.endTime}}</td>
  									<td class="text-success"><a href="">{{assignment.status}}</a></td>
  								</tr>
  								<tr class="assignment-content">
  									<td colspan="6">
  										<p></p>
  									</td>
  								</tr>
  							</tbody>
  						</table>

  						<table v-if="activeContent == 'ppts'" class="table table-hover">
  							<thead>
  								<tr><th>章节</th><th>标题</th><th>发布时间</th><th>下载次数</th></tr>
  							</thead>
  							<tbody id="ppt-list">
  								<tr v-for="ppt in ppts">
  									<td>{{ppt.title}}</td>
  									<td>{{ppt.brief}}</td>
  									<td>{{ppt.time}}</td>
  									<td>{{ppt.downloadTime}}</td>
  								</tr>
  							</tbody>
  						</table>

  						<template v-if="activeContent == 'topics'">
  							<a href="#" class="btn btn-primary topic-release" data-toggle="modal" data-target="#topic-release-modal">
  								<i class="glyphicon glyphicon-hand-up"></i> 我要讨论
  							</a>
  							<table class="table table-hover">
  								<thead>
  									<tr>
  										<th>状态</th><th style="width: 42%;">标题</th><th>作者</th><th>类别</th><th>查看次数</th><th>发布时间</th>
  									</tr>
  								</thead>
  								<tbody id="topic-list">
  									<tr v-for="topic in topics">
  										<td v-if="topic.solved" class="text-success"><i class="glyphicon glyphicon-ok-sign"></i> 已解决</td>
  										<td v-else class="text-warning"><i class='glyphicon glyphicon-question-sign'></i> 未解决</td>
  										<td>
  											<a @click="showTopic(topic.id)" class="topic-detail-trigger">{{topic.title}}</a>
  										</td>
  										<td><a href="javascript:;">{{topic.author}}</a></td>
  										<td>{{topic.type}}</td>
  										<td>{{topic.kickTime}}</td>
  										<td>{{topic.time.substring(0, 10)}}</td>
  									</tr>
  								</tbody>
  							</table>
  						</template>

  						<template v-if="activeContent == 'sources'">
  							<a class="btn btn-primary" data-toggle="modal" data-target="#source-upload-modal" id="source-upload">
  								<i class="glyphicon glyphicon-hand-up"></i> 发布资源
  							</a>
  							<table class="table table-hover">
  								<thead>
  									<tr>
  										<th>资源类型</th><th style="width:40%;">标题</th><th>上传者</th><th>查看次数</th><th>下载次数</th><th>发布时间</th>
  									</tr>
  								</thead>
  								<tbody id="source-list">
  									<tr v-for="source in sources">
  										<td>{{source.type}}</td>
  										<td><a class='source-detail-trigger' style="word-break:break-all;">{{source.title}}</a></td>
  										<td><a href="" target="_blank">{{source.author}}</a></td>
  										<td>{{source.kickTime}}</td>
  										<td>{{source.downloadTime}}</td>
  										<td>{{source.time.substring(0, 10)}}</td>
  									</tr>
  								</tbody>
  							</table>
  						</template>

  						<div v-if="activeContent == 'students'" class="row students-list">
  							<div v-for="student in students" class="classmate col-md-2">
  								<img :src="path + student.faceIcon" >
  								<span class="name">
  									<a class="homepage" target="_blank" href="">{{student.name}}</a>
  								</span>
  							</div>
  						</div>
  					</div>
  					<nav> 
  						<ul class="pagination"></ul>
  					</nav>
  				</div>
  			</div>
  		</div>

  	</div> <!-- /container -->
  	<!-- todo -->
  	<n-footer></n-footer>

  	<topic-modal :topicId="currentTopicId" :show="showModal" @closeModal="showModal = false" ></topic-modal>

  </div>
</template>
<script>
	import nHeader from '../components/nHeader.vue'
	import nFooter from '../components/nFooter.vue'
	import topicModal from '../components/topicmodal.vue'
	export default {
		data : function () {
			return {
				classObj: {},
				assignments : [],
				ppts : [],
				topics : [],
				sources : [],
				students : [],
				lesson : {},

				currentTopicId : '',
				//激活的信息内容
				activeContent : 'assignments',
				showModal : false
			}
		},
		computed : {
			path : function() {
				return this.$store.getters.getStaticPath;
			},
			lessonId : function () {
				return this.$route.params.id;
			}
		},
		created : function() {
			this.getLessonInfo();

		},
		mounted : function() {
			// console.log(this.lessonId)
			
			this.getAssignments(1);
			this.getPpts(1);
			this.getTopics(1);
			this.getSources(1);
			this.getStudents(1);
		},
		methods : {
			getLessonInfo : function() {
				this.$ajax.get('lessons/' + this.lessonId)
				.then((returnData) => {
					this.lesson = returnData.data.data;
					console.log(this.lesson);
					console.log(this.lessonId)
				})
				.catch((error) => {
					console.log('载入课程信息失败');
				})
			},
			getAssignments : function(page) {
				this.$ajax.get('lessons/' + this.lessonId + '/assignments?page=' + page)
				.then((returnData) => {
					this.assignments = this.assignments.concat(returnData.data.data);
				})
				.catch((error) => {
					console.log('载入作业信息失败');
				})
			},
			getPpts : function(page) {
				this.$ajax.get('lessons/' + this.lessonId + '/ppts?page=' + page)
				.then((returnData) => {
					this.ppts = this.ppts.concat(returnData.data.data);
				})
				.catch((error) => {
					console.log('载入课件信息失败');
				})
			},
			getTopics : function(page) {
				this.$ajax.get('lessons/' + this.lessonId + '/topics?page=' + page)
				.then((returnData) => {
					this.topics = this.topics.concat(returnData.data.data);
				})
				.catch((error) => {
					console.log('载入交流区信息失败');
				})
			},
			getSources : function(page) {
				this.$ajax.get('lessons/' + this.lessonId + '/sources?page=' + page)
				.then((returnData) => {
					this.sources = this.sources.concat(returnData.data.data);
				})
				.catch((error) => {
					console.log('载入资源信息失败');
				})
			},
			getStudents : function(page) {
				this.$ajax.get('lessons/' + this.lessonId + '/students?page=' + page)
				.then((returnData) => {
					this.students = this.students.concat(returnData.data.data);
				})
				.catch((error) => {
					console.log('载入学生信息失败');
				})
			},
			showTopic : function(id) {
				console.log('showing topic: ' + id);
				this.currentTopicId = id;
				this.showModal = true;
			}
		},
		components : {
			nHeader,
			nFooter,
			topicModal
		}
	}
</script>
<style lang="sass">
	@import '../scss/common.scss';
	.panel {
		@include shadowed(10px);
		@include bordered(1px, 6px);
		.panel-heading {
			background: $bgc;
			border: 0;
		}
	}
	.bread{
		display: inline-block;
		margin-bottom: 0.8em;
		padding: 12px 20px;
		background-color: $bgc;
		line-height: 1;
		@include shadowed(10px);
		@include bordered(1px, 6px);
		label {
			margin-bottom: 0;
		}
	}
	.nav-tabs {
		border: 0;

	}
	#tab-content{
		padding: 1em;
		background-color: #fff;
		@include shadowed(10px);
		@include bordered(1px, 6px);
		border-top-left-radius: 0;
		border-top: 0;
	}
	#tab-content table{
		margin-bottom: 5px;
		margin-top: 10px;
	}

	.pagination{
		margin: 10px 0 0;
	}
	.classmate, #result-list .classmate, #tutor-list .classmate{
		text-align: center;
		margin-bottom: 8px;
	}
	.classmate img, #result-list .classmate img, #tutor-list img{
		display: block;
		margin: 0 auto;
		border: 1px solid #ccc;
		width: 79px;
	}
</style>