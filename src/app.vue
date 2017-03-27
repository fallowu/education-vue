<template>
	<router-view></router-view>
</template>
<style lang="sass">
	body{
		background-color: #eee;
	}
	/*override modal display*/
	.modal {
		display: block;
		background-color: rgba(0,0,0,.5);
	}
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s
	}
	.fade-enter, .fade-leave-active {
		opacity: 0
	}
</style>
<script>
	
</script>