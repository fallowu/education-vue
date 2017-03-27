<template>
	<nav>
		<ul class="pagination">
			<li class="prevPage">
				<a href="javascript:;">«</a>
			</li>
			<li v-if="currentPage != 1"><a v-on:click="prev" href="javascript:;">{{currentPage-1}}</a></li>
			<li class="active"><a href="javascript:;">{{currentPage}}</a></li>
			<li v-if="currentPage != totalPage"><a v-on:click="next" href="javascript:;">{{currentPage+1}}</a></li>
			<li class="nextPage">
				<a href="javascript:;">»</a>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		props : {
			totalPage : Number
		},
		data : function () {
			return {
				currentPage : 1
			}
		},
		methods : {
			next : function() {
				this.currentPage += 1;
				this.$emit('nextPage');
			},
			prev : function() {
				this.currentPage -= 1;
				this.$emit('prevPage');
			}
		}
	}
</script>

<style lang="sass">
	
</style>