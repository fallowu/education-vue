<template>
	<div>
		<n-header></n-header>
		<div class="container main">
			<div class="row">
				<div class="col-md-12">
					<div class="bread">
						<label><a href="courseTable.do">我的课程</a></label>
						&gt; <span class="courseName">{{courseName}}</span> &gt;
						<span><a href="">班级空间</a></span> &gt;
						<span>作业提交情况</span>&nbsp;&nbsp;&nbsp;&nbsp;
						<input type="hidden" id="selectedAssignId" :value="assignmentId" />
						<input type="hidden" id="curClassId" :value="classId" />
						<span v-if="canSubmit <= 0" class="text-success">此作业目前允许提交 [{{s_submit}}/{{s_num}}]</span>
						<span v-if="canSubmit > 0" class="text-danger">此作业已禁止提交  [{{s_submit}}/{{s_num}}]</span>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-3">
					<ul class="nav nav-pills nav-stacked">
						<li v-for="assignment in assignments" role="presentation" :id="'li-' + assignment.assignmentId">
							<a href="">{{assignment.title}}</a>
						</li>
					</ul>
				</div>

				<div class="col-md-9">
					<table class="table table-bordered table-hover table-condensed">
						<thead>
							<tr>
								<th class="orderable selected" style="width: 18%;" data-order='1'>学号
									<span class="order-mark glyphicon glyphicon-triangle-bottom"></span></th>
									<th>姓名</th><th>提交状态</th>
									<th class="orderable" style="width: 25%;" data-order='2'>提交时间
										<span class="order-mark glyphicon glyphicon-triangle-bottom"></span></th>
										<th class="orderable" style="width: 12%;" data-order='3'>提交次数
											<span class="order-mark glyphicon glyphicon-triangle-bottom"></span></th>
											<th><a class="btn btn-xs btn-primary download">
												<i class="glyphicon glyphicon-download"></i> 全部打包</a></th>
											</tr>
										</thead>
										<tbody id="submit-list">
											<tr v-if="s_num == 0"><td colspan='5'>此班级尚未设置学生</td></tr>
											<tr v-for="student in students" :data-id="student.userId" :data-file="student.filePath">
												<td>{{student.userId}}</td><td>{{student.userName}}</td>
												<template v-if="student.count > 0">
													<td class="text-success">已提交</td><td>{{student.time}}</td>
													<td>{{student.count}}</td>
													<td>
														<a class="btn btn-xs btn-primary" href="<%=request.getContextPath()%>{{student.filePath}"><i class="glyphicon glyphicon-download"></i> 下载</a>
													</td>
												</template>

												<template v-if="student.count == 0">
													<td class="text-danger">未提交</td><td></td>
													<td>{{student.count}}</td>
													<td></td>
												</template>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<th colspan='5'></th><th><a class="btn btn-xs btn-primary download">
												<i class="glyphicon glyphicon-download"></i> 全部下载</a></th>
											</tr>
										</tfoot>
									</table>
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
						components : {
							nHeader,
							nFooter
						}
					}
				</script>