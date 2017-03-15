<template>
	<div>
		<n-header></n-header>
			<div class="container main">
  		<div class="row">
  			<div class="col-md-9">
  				<div id="basic-info" class="box">
  					<div class="row">
  						<div class="col-md-12">
  							<label class="box-title lb">基本信息</label>
  							<span>
  								<a href="javascript:void(0);" class="btn btn-xs" id="edit-btn"><i class="glyphicon glyphicon-pencil"></i></a>
  								<a href="javascript:void(0);" class="btn btn-xs" id="save-btn"><i class="glyphicon glyphicon-floppy-save"></i></a>
  								<a href="javascript:void(0);" class="btn btn-xs" id="cancel-btn"><i class="glyphicon glyphicon-remove-circle"></i></a>
  							</span>
  							<form class="form form-horizontal" id="college-form" method="POST">
		  						 <div class="form-group">
		  						 	<label class="col-sm-3 control-label">姓名</label>
		  						 	<div class="col-sm-9">
		  						 		<span class="show-field"><!-- <c:out value="${user.userName}"></c:out> --></span>
		  						 	</div>
		  						 </div>
		  						 <div class="form-group">
		  						 	<label class="col-sm-3 control-label">学号</label>
		  						 	<div class="col-sm-9">
		  						 		<span class="show-field"><!-- <c:out value="${user.userId}"></c:out> --></span>
		  						 	</div>
		  						 </div>
		  						 <div class="form-group">
		  						 	<label class="col-sm-3 control-label">院系</label>
		  						 	<div class="col-sm-9">
		  						 		<span class="show-field"><!-- <c:out value="${user.departName}"></c:out> --></span>
		  						 	</div>
		  						 </div>
		  					</form>
		  					<form class="form form-horizontal" id="basic-form">
		  						<input type="hidden" name="userId" value="${user.userId}" />
		  						<div class="form-group">
		  						 	<label class="col-sm-3 control-label">昵称</label>
		  						 	<div class="col-sm-9">
		  						 		<!-- <c:choose>
	  						 				<c:when test="${empty user.nickName}">
	  						 					<span class="show-field grey">暂无昵称</span>
	  						 					<input type="text" class="edit-field form-control" id="nickname" name="nickname" placeholder="请输入昵称" />
	  						 				</c:when>
	  						 				<c:otherwise>
	  						 					<span class="show-field"><c:out value="${user.nickName}"></c:out></span>
	  						 					<input type="text" class="edit-field form-control" value="" id="nickname" name="nickname" placeholder="请输入昵称" />
	  						 				</c:otherwise>
	  						 			</c:choose> -->
	  						 			<span class="text-danger"></span>
		  						 	</div>
		  						 </div>
		  						<div class="form-group">
		  						 	<label class="col-sm-3 control-label">性别</label>
		  						 	<div class="col-sm-9">
		  						 		<!-- <c:choose>
	  						 				<c:when test="${user.gender == 1}">
	  						 					<span class="show-field">女</span>
	  						 				</c:when>
	  						 				<c:when test="${user.gender == 0}">
	  						 					<span class="show-field">男</span>
	  						 				</c:when>
	  						 				<c:otherwise>
	  						 					<span class="show-field grey">暂无性别信息</span>
	  						 				</c:otherwise>
	  						 			</c:choose> -->
  						 				<label class="radio-inline edit-field" >
		  						 			<input type="radio" name="gender" id="gender-m" value="0" data-gender=""> 男
		  						 		</label>
										<label class="radio-inline edit-field">
		  						 			<input type="radio" name="gender" id="gender-f" value="1"> 女
		  						 		</label>
		  						 	</div>
		  						</div>
		  						<div class="form-group">
		  						 	<label class="col-sm-3 control-label">个性签名</label>
		  						 	<div class="col-sm-9">
		  						 		<!-- <c:choose>
	  						 				<c:when test="${empty user.motto}">
	  						 					<span class="show-field grey">暂无个性签名</span>
	  						 					<textarea class="edit-field form-control" id="motto" name="motto" ></textarea>
	  						 				</c:when>
	  						 				<c:otherwise>
	  						 					<span class="show-field">${user.motto}</span>
	  						 					<textarea class="edit-field form-control" id="motto" name="motto">${user.motto}</textarea>
	  						 				</c:otherwise>
	  						 			</c:choose> -->
	  						 			<span class="text-danger"></span>
		  						 	</div>
		  						 </div>
		  						 <div class="form-group">
		  						 	<label class="col-sm-3 control-label">兴趣爱好</label>
		  						 	<div class="col-sm-9">
		  						 		<!-- <c:choose>
	  						 				<c:when test="${empty user.hobbies}">
	  						 					<span class="show-field grey">暂无爱好信息</span>
	  						 					<input type="hidden" id="hobby" name="hobby" value=""/>
	  						 				</c:when>
	  						 				<c:otherwise>
	  						 					<span class="show-field">${user.hobbies}</span>
	  						 					<input type="hidden" id="hobby" name="hobby" value="${user.hobbies}"/>
	  						 				</c:otherwise>
	  						 			</c:choose> -->
	  						 			<span class="text-danger"></span>
		  						 		<div class="edit-field">
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
		  						 <div class="form-group">
		  						 	<label class="col-sm-3 control-label">家乡</label>
		  						 	<div class="col-sm-9">
		  						 	<!-- 	<c:choose>
	  						 				<c:when test="${user.homelandP == '-1' && user.homelandC == '-1'}">
	  						 					<span class="show-field grey">暂无家乡信息</span>
	  						 				</c:when>
	  						 				<c:when test="${user.homelandP != '-1' && user.homelandC == '-1'}">
	  						 					<span class="show-field"><c:out value="${user.provinceName}"></c:out></span>
	  						 				</c:when>
	  						 				<c:otherwise>
	  						 					<span class="show-field"><c:out value="${user.provinceName}"></c:out> - <c:out value="${user.cityName}"></c:out></span>
	  						 				</c:otherwise>
	  						 			</c:choose> -->
		  						 		<select class="edit-field form-control" data-id="" id="province" name="homelandP"></select>
		  						 		<span class="edit-field">省/直辖市</span>
		  						 		<select class="edit-field form-control" data-id="" id="city" name="homelandC"></select>
		  						 		<span class="edit-field">市/区</span>
		  						 	</div>
		  						 </div>
		  						 <div class="form-group">
		  						 	<label class="col-sm-3 control-label">生日</label>
		  						 	<div class="col-sm-9">
		  						 	<!-- 	<c:choose>
	  						 				<c:when test="${empty user.birthday}">
	  						 					<span class="show-field grey">暂无生日信息</span>
	  						 					<input type="date" class="edit-field form-control" id="birthday" name="birthday" />
	  						 				</c:when>
	  						 				<c:otherwise>
	  						 					<span class="show-field"><c:out value="${user.birthday}"></c:out></span>
	  						 					<input type="date" class="edit-field form-control" value="<c:out value="${user.birthday}"></c:out>" id="birthday" name="birthday" />
	  						 				</c:otherwise>
	  						 			</c:choose> -->
		  						 	</div>
		  						 </div>
		  						 <div class="form-group">
		  						 	<label class="col-sm-3 control-label">手机</label>
		  						 	<div class="col-sm-9">
		  						 		<!-- <c:choose>
	  						 				<c:when test="${empty user.telephone}">
	  						 					<span class="show-field grey">暂无手机信息</span>
	  						 					<input type="text" class="edit-field form-control" id="telephone" name="telephone" placeholder="请输入手机信息" />
	  						 				</c:when>
	  						 				<c:otherwise>
	  						 					<span class="show-field"><c:out value="${user.telephone}"></c:out></span>
	  						 					<input type="text" class="edit-field form-control" value="<c:out value="${user.telephone}"></c:out>" id="telephone" name="telephone" placeholder="请输入手机信息" />
	  						 				</c:otherwise>
	  						 			</c:choose> -->
	  						 			<span class="text-danger"></span>
		  						 	</div>
		  						 </div>
		  						 <div class="form-group">
		  						 	<label class="col-sm-3 control-label">常用邮箱</label>
		  						 	<div class="col-sm-9">
		  						 	<!-- 	<c:choose>
	  						 				<c:when test="${empty user.email}">
	  						 					<span class="show-field grey">暂无常用邮箱信息</span>
	  						 					<input type="text" class="edit-field form-control" id="email" name="email" placeholder="请输入常用邮箱信息" />
	  						 				</c:when>
	  						 				<c:otherwise>
	  						 					<span class="show-field"><c:out value="${user.email}"></c:out></span>
	  						 					<input type="text" class="edit-field form-control" value="<c:out value="${user.email}"></c:out>" id="email" name="email" placeholder="请输入常用邮箱信息" />
	  						 				</c:otherwise>
	  						 			</c:choose> -->
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
  							<!-- 	<c:choose>
  									<c:when test="${empty user.faceIcon || user.faceIcon == ''}">
  										<img src="<%=request.getContextPath()%>/resource/img/blank.jpg"></img>
  									</c:when>
  									<c:otherwise><img src="<%=request.getContextPath()%>${user.faceIcon}"></img></c:otherwise>
  								</c:choose> -->
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
  					<!-- 	<c:if test="${empty visitors}">
	  						<span class="no-visitor">暂无访客</span>
	  					</c:if>
	  					<c:forEach var="visitor" items="${visitors}">
	  						<div class="visitor">
	  							<c:choose>
  									<c:when test="${empty visitor.faceIcon || visitor.faceIcon == ''}">
  										<img src="<%=request.getContextPath()%>/resource/img/blank.jpg"></img>
  									</c:when>
  									<c:otherwise><img src="<%=request.getContextPath()%>${visitor.faceIcon}"></img></c:otherwise>
  								</c:choose>
	  							<a class="name" target="_blank" href="${visitor.homepage}">${visitor.visitorName}</a>
	  							<span class="time">${visitor.time}</span>
	  						</div>
	  					</c:forEach> -->
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
	  				<!-- 	<c:if test="${empty friends}">
	  						<span class="no-friend">暂无好友</span>
	  					</c:if>
	  					<c:forEach var="friend" items="${friends}">
	  						<div class="friend">
	  							<c:choose>
  									<c:when test="${empty friend.faceIcon || friend.faceIcon == ''}">
  										<img src="<%=request.getContextPath()%>/resource/img/blank.jpg"></img>
  									</c:when>
  									<c:otherwise><img src="<%=request.getContextPath()%>${friend.faceIcon}"></img></c:otherwise>
  								</c:choose>
	  							<a class="name" target="_blank" href="${friend.homepage}">${friend.userName}</a>
	  						</div>
	  					</c:forEach> -->
  					</div>
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
		components : {
			nHeader,
			nFooter
		}
	}
</script>