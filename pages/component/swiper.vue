<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-spacing swiper">
				<swiper indicator-dots="true" circular="true" indicator-active-color="rgb(255, 255, 255)" autoplay="true" interval="2000" duration="500">
					<swiper-item>
						<view class="swiper-item"><image src="http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg" mode=""></image></view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item"><image src="http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg" mode=""></image></view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item"><image src="http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg" mode=""></image></view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {

		},
	}
</script>

<style>
	@import "../../common/uni.css";
	.swiper{
		padding: 0;
	}
	.swiper image{
		max-width: 100%;
		width:100%;
		height: 300px;
	}
	.swiper-item {
		display: block;
		height: 300px;
		line-height: 300px;
		text-align: center;
	}

	.swiper-list {
		margin-top: 40px;
		margin-bottom: 0;
	}

	.page-section-title {
		padding: 0;
		margin-top: 60px;
		position: relative;
	}

	.info {
		position: absolute;
		right: 0;
		color: #353535;
		font-size: 30px;
	}
</style>
