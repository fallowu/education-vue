<template>
    <div class="modal" v-show="show" transition="fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <!--头部-->
                <div class="modal-header">
                    <slot name="header">
                        <p class="title">{{modal.title}}</p>
                    </slot>
                    <a v-touch:tap="close(0)" class="close" href="javascript:void(0)"></a>
                </div>
                <!--内容区域-->
                <div class="modal-body">
                    <slot name="body">
                        <p class="notice">{{modal.text}}</p>
                    </slot>
                </div>
                <!--尾部,操作按钮-->
                <div class="modal-footer">
                    <slot name="button">
                        <a v-if="modal.showCancelButton" href="javascript:void(0)" class="button {{modal.cancelButtonClass}}" v-touch:tap="close(1)">{{modal.cancelButtonText}}</a>
                        <a v-if="modal.showConfirmButton" href="javascript:void(0)" class="button {{modal.confirmButtonClass}}" v-touch:tap="submit">{{modal.confirmButtonText}}</a>
                    </slot>
                </div>
            </div>
        </div>
    </div>
    <div v-show="show" class="modal-backup" transition="fade"></div>
</template>
<script>
    export default {
        props: ['modalOptions'],
        computed: {
            modal: {
                get() {
                    let modal = this.modalOptions;
                    modal = {
                        title: modal.title || '提示',
                        text: modal.text,
                        showCancelButton: typeof modal.showCancelButton === 'undefined' ? true : modal.showCancelButton,
                        cancelButtonClass: modal.cancelButtonClass ? modal.showCancelButton : 'btn-default',
                        cancelButtonText: modal.cancelButtonText ? modal.cancelButtonText : '取消',
                        showConfirmButton: typeof modal.showConfirmButton === 'undefined' ? true : modal.cancelButtonClass,
                        confirmButtonClass: modal.confirmButtonClass ? modal.confirmButtonClass : 'btn-active',
                        confirmButtonText: modal.confirmButtonText ? modal.confirmButtonText : '确定',
                    };
                    return modal;
                }
            },
        },
        data() {
            return {
                show: false,   // 是否显示模态框
                resolve: '',
                reject: '',
                promise: '',  // 保存promise对象
            };
        },
        methods: {
            submit : function () {
                this.resolve('submit');
            },

            close : function(type) {
                this.show = false;
                this.reject(type);
            },

            confirm : function() {
                this.show = true;
                this.promise = new Promise((resolve, reject) => {
                    this.resolve = resolve;
                    this.reject = reject;
                });
                return this.promise;   //返回promise对象,给父级组件调用
            },
        }
    }
</script>

<style lang="sass">
    .modal {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 1001;
        outline: 0;
        overflow: scroll;
    }
    .modal-dialog {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%,0);
        background: #fff;
    }
    .modal-backup {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        background: rgba(0, 0, 0, 0.5);
    }
</style>