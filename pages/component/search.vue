<template name="page-head">
	<view class="search">
		<view class="href">
			<view class="search_icon">
			  <image src="../../static/search.png" height="14" width="14" alt=""></image>
			  <text class="text">搜索</text>
			</view>
			<input type="text" name="search" id="myFocus" disabled>
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
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 0.1rem 0.15rem;
  position: relative;
  margin-bottom: 0.1rem;
}

.search .href {
  display: inline-block;
  width: 100%;
  height: 64px;
  position: relative;
}

.search input {
  border: none;
  width: 100%;
  height: 100%;
  display: inline-block;
  border-radius: 4px;
  box-sizing: border-box;
  color: #9a9a9a;
  background: #ededee;
}

.search_icon {
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  left: 1px;
  z-index: 2;
  border-radius: 3px;
  text-align: center;
  color: #9b9b9b;
  background: #ededee;
}

.search_icon image {
  width:28px;
  height:28px;
  display: inline-block;
  vertical-align: middle;
  font: normal normal normal 14px/1 weui;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  position:relative;
  margin-right: 10px;
}

.search_icon .text {
  font-size: 28px;
  line-height: 64px;
}
</style>
