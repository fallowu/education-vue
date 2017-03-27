<template>
    <div class="modal" v-if="show">
        <div class="modal-dialog">
            <div class="modal-content">
                <!--头部-->
                <div class="modal-header">
                    <h4>讨论详情<a @click="close" class="close" href="javascript:void(0)">x</a></h4>
                </div>
                <!--内容区域-->
                <div class="modal-body">
                    <div class="publishment">
                        <div class="row published">
                            <div class="col-sm-1">
                                <img v-if="topic.authorFaceIcon" :src="path + topic.authorFaceIcon"></img>
                                <img v-else :src="path + '/resource/img/blank.jpg'"></img>
                            </div>
                            <div class="col-sm-11">
                                <a href="" target="_blank"><label class="name">{{topic.authorName}}</label></a>
                                <label class="topic-title">{{topic.title}}</label>
                                <span class='tag-info'>{{topic.type}}</span>
                                <span v-if="topic.solved" class="text-success">【已解决】</span>
                                <span v-else class="text-danger">【未解决】</span>

                                <a href="javascript:;" class="btn btn-xs btn-success mark-solved">标为“已解决”</a>

                                <p class="content">
                                    {{topic.content}}
                                    {{topic.file}}
                                </p>
                                <span class="time">{{topic.time}}</span>
                            </div>
                        </div>
                        <div class="row replied-list">
                            <div class="col-sm-11 col-sm-offset-1">
                                <div v-for="reply in replies" class="replied">
                                    <img v-if="reply.userFaceIcon" :src="path + reply.userFaceIcon">
                                    <img v-else :src="path + '/resource/img/blank.jpg'">
                                    <p>
                                        <a class="name-from" href="" target="_blank">{{reply.userName}}</a>：回复
                                        <a href="" target="_blank">{{reply.toUserName}}</a>：{{reply.content}}
                                        <span class="time">{{reply.time}}</span>
                                        <span class="reply-in">回复</span><br>
                                    </p>
                                    <div class="repling">
                                        <img src="">
                                        <textarea class="form-control" rows="7"></textarea>
                                        <a class="face-trigger">
                                            <img src="">
                                        </a>
                                        <div class="face-panel" tabindex="1">
                                            <table>
                                                <tbody></tbody>
                                            </table>
                                        </div>
                                        <a class="file-trigger">
                                            <i class="glyphicon glyphicon-paperclip"></i>
                                        </a>
                                        <div class="file-panel" tabindex="1" data-number='0'>
                                            <a class="btn btn-sm btn-success add-file">
                                                <i class="glyphicon glyphicon-plus"></i> 添加文件
                                            </a>
                                            <form method="POST" ENCTYPE="multipart/form-data">
                                                <input type='file' name="files" >
                                            </form>
                                            <ul class='imgs'></ul>
                                            <ul class='others'></ul>
                                            <p class="text-danger"><i class="glyphicon glyphicon-exclamation-sign"></i> 添加文件失败</p>
                                        </div>
                                        <button class="btn btn-primary reply-topic-btn">评论</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row reply">
                            <div class="col-sm-11 col-sm-offset-1">
                                <div class="repling" to-id="">
                                    <img id="topic-reply-img" src=""></img>
                                    <textarea class="form-control" rows="7"></textarea>
                                    <a class="face-trigger">
                                        <img src="">
                                    </a>
                                    <div class="face-panel" tabindex="1">
                                        <table>
                                            <tbody></tbody>
                                        </table>
                                    </div>
                                    <a class="file-trigger">
                                        <i class="glyphicon glyphicon-paperclip"></i>
                                    </a>
                                    <div class="file-panel" tabindex="1" data-number='0'>
                                        <a class="btn btn-sm btn-success add-file">
                                            <i class="glyphicon glyphicon-plus"></i> 添加文件
                                        </a>
                                        <form method="POST" ENCTYPE="multipart/form-data">
                                            <input type='file' name="files" >
                                        </form>
                                        <ul class='imgs'></ul>
                                        <ul class='others'></ul>
                                        <p class="text-danger"><i class="glyphicon glyphicon-exclamation-sign"></i> 添加文件失败</p>
                                    </div>
                                    <button class="btn btn-primary reply-topic-btn">评论</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--尾部,操作按钮-->
                <div class="modal-footer">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props : ['topicId', 'show'],
        computed: {

        },
        data : function () {
            return {
                topic : {},
                replies : []
            };
        },
        computed : {
            path : function() {
                return this.$store.getters.getStaticPath;
            }
        },
        watch : {
            topicId : function() {
                this.getTopicInfo();
                this.getComments(1);
            }
        },
        mounted : function() {
            console.log('tId' + this.topicId);
            this.getTopicInfo();
            this.getComments(1);
        },
        methods: {
            close : function() {
                this.$emit('closeModal');
            },
            getTopicInfo : function() {
                this.$ajax.get('util/topics/' + this.topicId)
                .then((returnData) => {
                    this.topic = returnData.data.data;
                })
                .catch((error) => {
                    console.log('载入交流信息失败');
                })
            },
            getComments : function(page) {
                this.$ajax.get('util/topics/' + this.topicId + '/replies?page=' + page)
                .then((returnData) => {
                    this.replies = returnData.data.data;
                })
                .catch((error) => {
                    console.log('载入动态失败');
                })
            },
        }
    }
</script>

<style lang="sass">
    @import '../scss/common.scss';

    .modal-dialog {
        width: 800px;
        position: absolute;
        @include bordered(0px, 6px);
        left: 50%;
        top: 10%;
        transform: translate(-50%,0);
        
        h4 {
            margin: 0;
        }
    }
    
</style>