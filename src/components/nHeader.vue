<template>
    <nav class="navbar navbar-default navbar-static-top navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="">教学互动系统</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li><router-link to="/homepage">首页</router-link></li>
                    <li><router-link to="/personal">个人主页</router-link></li>
                    <li><router-link to="/courseTable">我的课程</router-link></li>
                    <li><router-link to="/friend">我的好友</router-link></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a @click="toggleDropDown" href="javascript" class="dropdown-toggle">
                            <i class="glyphicon glyphicon-user"></i>
                            <span id="username">{{userName}}</span>
                            <input type='hidden' id="curId" />
                            <span class="caret"></span>
                        </a>
                        <ul v-if="dropDown" class="dropdown-menu">
                            <li><a href="" id="psd-change" data-toggle="modal" data-target="#change-psd">
                                <i class="glyphicon glyphicon-pencil"></i> 修改密码</a>
                            </li>
                            <li><a href=""><i class="glyphicon glyphicon-off"></i> 注销</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
	export default {
        data : function() {
            return {
                dropDown : false
            }
        },
        computed : {
          userName : function() {
            return this.$store.getters.getUserInfo.name;
            }
        },
        methods : {
            toggleDropDown : function() {
                this.dropDown = !this.dropDown;
            }
        }
    }
</script>
<style lang="sass">
	.nav {
        .dropdown-menu {
            display: block;
        }
    }
</style>