<template>
	<view>
		<text>id:{{id}}</text>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				id: null
			}
		},
		onLoad: function (option) { 
			console.log(option); //打印出上个页面传递的参数。
			this.id = option.title;
		}
	}
</script>

<style>

</style>
