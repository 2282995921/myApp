<template>
	<view class="index">
		<searchIndex></searchIndex>
		<swiper-index></swiper-index>
		<grid-index></grid-index>
	</view>
</template>
<script>
	import searchIndex from './search.vue'
	import swiperIndex from './swiper.vue'
	import gridIndex from './grid.vue'

	export default {
		data() {
			return {
				title: '首页'
			}
		},
		components: {
			searchIndex,
			swiperIndex,
			gridIndex
		},
		methods: {

		}
	}
</script>

<style>
	@import "../../common/uni.css";

	.index {
		padding-bottom: 1px;
	}

	.uni-card {
		box-shadow: none;
	}

	.uni-list:after {
		height: 0;
	}

	.uni-list:before {
		height: 0;
	}
</style>
