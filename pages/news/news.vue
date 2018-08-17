<template>
	<view class="index">
		<page-head :title="title"></page-head>
		<view class="list">
			<view v-for="(item,key) in newsList" :key="key" @click="goDetail(key)" class="list_w">
				<view class="list_img">
					<image mode='aspectFill' :src="'http://dianli.hbnrtech.com/powerArea/'+item.memo" height="" width="" alt="" class=""></image>
						<text class="list_p">{{item.title}}</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import pageHead from '../../components/page-head.vue'
	export default {
		data() {
			return {
				title:'news',
				newsList: []
			}
		},
		onLoad() {
			this.news();
		},
		components: {
			pageHead
		},
		methods: {
			news() {
				uni.request({
					url: 'http://dianli.hbnrtech.com/powerArea/actionManage/nuusAction/nuusAll.html?channelId=2',
					data: '',
					success: (data) => {
						if (data.data.code == 0) {
							data.data.data.push({
								title: ''
							})
							this.newsList = data.data.data;
						}
					},
					fail: (data, code) => {
						console.log('fail' + JSON.stringify(data));
					}
				})
			},
			goDetail: function (e) {
				console.log(1)
				uni.navigateTo({
					url: "details.vue"
				})
			},

		}
	}
</script>

<style>
	@import "../../common/uni.css";
	.list .list_w:last-child {
		opacity: 0;
		pointer-events: none;
		cursor: default;
	}

	.list {
		padding: 10rpx 15rpx;
		text-align: center;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		background: #f6f6f6;
		padding-bottom: 50rpx;
	}

	.list .list_w {
		width: 30%;
		font-size: 14rpx;
		display: inline-block;
		box-sizing: border-box;
		box-shadow: 0 0 10px -10px #06c;
		padding: 0.05rem;
		background: #fff;
		box-shadow: 0px 3px 8px rgb(221, 221, 221);
		border-radius: 4px;
		margin: 10rpx 0;
	}

	.list_img {
		flex-direction: column;
	}

	.list_img image {
		max-width: 100%;
		height: 180rpx;
		display: inline-block;
	}

	.list_img .list_p {
		margin: 10rpx 0;
		color: #9c9c9c;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.index {
		padding-bottom: 1px;
	}

</style>
