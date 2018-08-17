<template>
	<view class="page">
		<view class="uni-grid-9">
			<navigator :url="'../news/details?title='+index" class="uni-grid-9-item" hover-class="navigator-hover" v-for="(item,index) in date"
			    :key="index" :class="index % 3 === 2 ? 'no-border-right' : ''">
				<image class="uni-grid-9-image" :src="item"></image>
				<text class="uni-grid-9-text">grid</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				date: ["../../static/yy1.png", "../../static/yy2.png", "../../static/yy3.png",
					"../../static/yy4.png", "../../static/yy5.png", "../../static/yy6.png",
					"../../static/yy7.png", "../../static/yy8.png", "../../static/yy9.png"
				]
			}
		}
	}
</script>

<style>
	@import "../../common/uni.css";
	.page {
		padding-top: 60px;
	}
</style>
