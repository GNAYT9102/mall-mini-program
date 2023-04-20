<template>
	<swiper
		class="banner"
		:indicator-dots="true"
		indicator-active-color="#ff8198"
		indicator-color="#ffffff"
		:autoplay="true" 
		:interval="3000" 
		:duration="1000"
		:circular="true"
	>
		<template v-for="item in banners" :key="item.title">
			<swiper-item @click="handleItemClick(item)">
				<image class="image" :src="item.image" mode="widthFix"></image>
			</swiper-item>
		</template>
	</swiper>
</template>

<script setup>
	defineProps({
		banners: {
			type: Array,
			default: () => []
		}
	})
	const emit = defineEmits(["bannerItemClick"])
	
	const handleItemClick = (item) => {
		emit("bannerItemClick", item.link)
	}
</script>

<style lang="scss">
	.banner {
		.image {
			width: 100%;
		}
	}
</style>