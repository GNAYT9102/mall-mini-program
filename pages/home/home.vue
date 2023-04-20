<template>
	<view class="home">
		<!-- 轮播图组件 -->
		<HomeBanner :banners="banners" @bannerItemClick="bannerItemClick" />
		<!-- 推荐栏组件 -->
		<HomeRecommend :recommends="recommends" @itemClick="itemClick" />
		<!-- 热门栏组件 -->
		<HomePopular />
		<!-- 选项卡组件 -->
		<tab-control :titles="['流行', '新款', '精选']" @tabItemClick="tabItemClick" />
	</view>
</template>

<script setup>
	import { onLoad } from "@dcloudio/uni-app"
	import { storeToRefs } from "pinia"
	import { useHomeStore } from "@/store/useHomeStore.js"
	import HomeBanner from "./cpns/home-banner.vue"
	import HomeRecommend from "./cpns/home-recommend.vue"
	import HomePopular from "./cpns/home-popular.vue"
	
	const homeStore = useHomeStore()
	const { banners, recommends } = storeToRefs(homeStore)

	onLoad(() => {
		homeStore.fetchHomeMultidata()
	})
	
	// 点击轮播图页面跳转
	const bannerItemClick = (link) => {
		uni.navigateTo({
			url: `/pages/webview/webview?link=${link}`
		})
	}

	// 推荐点击事件
	const itemClick = (item) => {
		uni.navigateTo({
			url: `/pages/webview/webview?link=${item.link}`
		})
	}

	// tab-control点击事件
	const tabItemClick = (index) => {
		console.log(index)
	}
</script>

<style lang="scss"></style>
