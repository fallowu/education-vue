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
						<router-link :to="{name: 'lesson', params:{id: lesson.id}}" class="switch-btn">
							<i class="glyphicon glyphicon-arrow-right"></i>进入班级空间
						</router-link>
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
										<tr><th>课程编号</th><td>{{courseId}}</td></tr>
										<tr><th>课程名称</th><td>{{lesson.name}}</td></tr>
										<tr><th>周课时</th><td>{{lesson.weekTime}}</td></tr>
										<tr><th>学分</th><td>{{lesson.credit}}</td></tr>
									</table>
									<input type="hidden" id="curCourseId" value="${course.courseId}">
								</div>
							</div>
						</div>
					</div>
					<div class="row" id="class-info">
						<div class="col-md-12">
							<div class="panel panel-info">
								<div class="panel-heading">我的班级</div>
								<div class="panel-body">
									<table>
										<tr><th>教学班号</th><td>{{lesson.id}}</td></tr>
										<tr><th>教师</th><td>{{lesson.teacher}}</td></tr>
										<tr><th>学期</th><td>{{lesson.term}}</td></tr>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-9">
					<ul class="nav nav-tabs" id="section-list">
						<li role="presentation" :class="{ active: activeContent == 'books'}"><a @click="activeContent = 'books'" href="javascript:void(0)">教材与参考书目</a></li>
						<li role="presentation" :class="{ active: activeContent == 'difficulties'}"><a @click="activeContent = 'difficulties'" href="javascript:void(0)">重点难点讨论</a></li>
						<li role="presentation" :class="{ active: activeContent == 'expansions'}"><a @click="activeContent = 'expansions'" href="javascript:void(0)">扩展阅读讨论</a></li>
						<li role="presentation" :class="{ active: activeContent == 'exams'}"><a @click="activeContent = 'exams'" href="javascript:void(0)">经典试题</a></li>
						<li role="presentation" :class="{ active: activeContent == 'interviews'}"><a @click="activeContent = 'interviews'" href="javascript:void(0)">面试经</a></li>

					</ul>
					<div id="tab-content">
						<div id="change-content">

							<table v-if="activeContent == 'books'" class="table table-hover">
								<thead>
									<tr><th>资源类型</th><th style="width:40%;">标题</th><th>上传者</th><th>查看次数</th><th>下载次数</th><th>发布时间</th></tr>
								</thead>
								<tbody id="books-list">
									<tr v-for="book in books">
										<td class="text-warning">{{book.type}}</td>
										<td><a class='source-detail-trigger' style="word-break:break-all;">{{book.title}}</a></td>
										<td><a href="" target="_blank">{{book.author}}</a></td>
										<td>{{book.kickTime}}</td>
										<td>{{book.downloadTime}}</td>
										<td>{{book.time.substring(0, 10)}}</td>
									</tr>
									<tr class="book-content">
										<td colspan="6">
											<p></p>
										</td>
									</tr>
								</tbody>
							</table>

							<table v-if="activeContent == 'difficulties'" class="table table-hover">
								<thead>
									<tr><th>状态</th><th style="width: 42%;">标题</th><th>作者</th><th>类别</th><th>查看次数</th><th>发布时间</th></tr>
								</thead>
								<tbody id="difficulties-list">
									<tr v-for="diff in difficulties">
										<td v-if="diff.solved" class="text-success"><i class="glyphicon glyphicon-ok-sign"></i> 已解决</td>
										<td v-else class="text-warning"><i class='glyphicon glyphicon-question-sign'></i> 未解决</td>
										<td>
											<a class="expansion-detail-trigger">{{diff.title}}</a>
										</td>
										<td><a href="" target="_blank">{{diff.name}}</a></td>
										<td>{{diff.type}}</td>
										<td>{{diff.kickTime}}</td>
										<td>{{diff.time.substring(0, 10)}}</td>
									</tr>
								</tbody>
							</table>

							<template v-if="activeContent == 'expansions'">
								<table class="table table-hover">
									<thead>
										<tr>
											<tr><th>状态</th><th style="width: 42%;">标题</th><th>作者</th><th>类别</th><th>查看次数</th><th>发布时间</th></tr>
										</tr>
									</thead>
									<tbody id="expansion-list">
										<tr v-for="expansion in expansions">
											<td v-if="expansion.solved" class="text-success"><i class="glyphicon glyphicon-ok-sign"></i> 已解决</td>
											<td v-else class="text-warning"><i class='glyphicon glyphicon-question-sign'></i> 未解决</td>
											<td>
												<a class="expansion-detail-trigger">{{expansion.title}}</a>
											</td>
											<td><a href="" target="_blank">{{expansion.name}}</a></td>
											<td>{{expansion.type}}</td>
											<td>{{expansion.kickTime}}</td>
											<td>{{expansion.time.substring(0, 10)}}</td>
										</tr>
									</tbody>
								</table>
							</template>

							<template v-if="activeContent == 'interviews'">
								<table class="table table-hover">
									<thead>
										<tr>
											<th>资源类型</th><th style="width:40%;">标题</th><th>上传者</th><th>查看次数</th><th>下载次数</th><th>发布时间</th>
										</tr>
									</thead>
									<tbody id="interview-list">
										<tr v-for="interview in interviews">
											<td>{{interview.type}}</td>
											<td><a class='interview-detail-trigger' style="word-break:break-all;">{{interview.title}}</a></td>
											<td><a href="" target="_blank">{{interview.author}}</a></td>
											<td>{{interview.kickTime}}</td>
											<td>{{interview.downloadTime}}</td>
											<td>{{interview.time.substring(0, 10)}}</td>
										</tr>
									</tbody>
								</table>
							</template>

							<template v-if="activeContent == 'exams'">
								<table class="table table-hover">
									<thead>
										<tr>
											<th>资源类型</th><th style="width:40%;">标题</th><th>上传者</th><th>查看次数</th><th>下载次数</th><th>发布时间</th>
										</tr>
									</thead>
									<tbody id="exam-list">
										<tr v-for="exam in exams">
											<td>{{exam.type}}</td>
											<td><a class='exam-detail-trigger' style="word-break:break-all;">{{exam.title}}</a></td>
											<td><a href="" target="_blank">{{exam.author}}</a></td>
											<td>{{exam.kickTime}}</td>
											<td>{{exam.downloadTime}}</td>
											<td>{{exam.time.substring(0, 10)}}</td>
										</tr>
									</tbody>
								</table>
							</template>
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
	</div>
</template>
<style lang="sass">
	.bread{
		display: inline-block;
		margin-bottom: 0.8em;
		padding: 4px 8px 0;
		background-color: #eee;
		border: 2px solid #f2f2f2;
		border-radius: 4px;
	}

	#tab-content{
		border: 1px solid #ddd;
		border-top: 0;
		padding: 1em;
		background-color: #fff;
		border-radius: 0 4px 4px 4px;
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
<script>
	import nHeader from '../components/nHeader.vue'
	import nFooter from '../components/nFooter.vue'
	export default {
		data : function () {
			return {
				books : [],
				exams : [],
				interviews : [],
				difficulties : [],
				expansions : [],
				//激活的信息内容
				activeContent : 'books'
			}
		},
		computed : {
			courseId : function() {
				return this.$route.query.id;
			},
			lesson : function() {
				return this.$route.params.info;
			},
			path : function() {
				return this.$store.getters.getStaticPath;
			}
		},
		mounted : function() {
			this.getBooks(1);
			this.getExams(1);
			this.getInterviews(1);
			this.getDifficulties(1);
			this.getExpansions(1);
		},
		methods : {
			getBooks : function(page) {
				this.$ajax.get('courses/' + this.courseId + '/books?page=' + page)
				.then((returnData) => {
					this.books = this.books.concat(returnData.data.data);
				})
				.catch((error) => {
					console.log('载入参考书信息失败');
				})
			},
			getExams : function(page) {
				this.$ajax.get('courses/' + this.courseId + '/exams?page=' + page)
				.then((returnData) => {
					this.exams = this.exams.concat(returnData.data.data);
				})
				.catch((error) => {
					console.log('载入试题信息失败');
				})
			},
			getInterviews : function(page) {
				this.$ajax.get('courses/' + this.courseId + '/interviews?page=' + page)
				.then((returnData) => {
					this.interviews = this.interviews.concat(returnData.data.data);
				})
				.catch((error) => {
					console.log('载入面试题信息失败');
				})
			},
			getDifficulties : function(page) {
				this.$ajax.get('courses/' + this.courseId + '/difficulties?page=' + page)
				.then((returnData) => {
					this.difficulties = this.difficulties.concat(returnData.data.data);
				})
				.catch((error) => {
					console.log('载入难点信息失败');
				})
			},
			getExpansions : function(page) {
				this.$ajax.get('courses/' + this.courseId + '/expansions?page=' + page)
				.then((returnData) => {
					this.expansions = this.expansions.concat(returnData.data.data);
				})
				.catch((error) => {
					console.log('载入扩展阅读信息失败');
				})
			}
		},
		components : {
			nHeader,
			nFooter
		}
	}
</script>