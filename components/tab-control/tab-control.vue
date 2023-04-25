<template>
	<view class="tab-control">
		<template v-for="(item, index) in titles" :key="index">
			<view class="item">
				<text 
					:class="{ title: true, active: currentIndex === index }"
					@click="handleItemClick(index)"
				>{{ item }}</text>
			</view>
		</template>
	</view>
</template>

<script setup>
	import { ref } from "vue"
	defineProps({
		titles: {
			type: Array,
			default: () => []
		}
	})
	const emit = defineEmits(["tabItemClick"])
	
	const currentIndex = ref(0)
	const handleItemClick = (index) => {
		currentIndex.value = index
		emit('tabItemClick', index)
	}
</script>

<style lang="scss">
	.tab-control {
		// scss样式混入
		@include normalFlex();
		padding: 10rpx;
		box-sizing: border-box;
		text-align: center;
		margin-top: 10rpx;
		.item {
			flex: 1;
			.title {
				display: inline-block;
				padding: 16rpx;
				border-bottom: 6rpx solid transparent;
				&.active {
					border-bottom: 6rpx solid $gPrimaryColor;
					color: $gPrimaryColor;
				}
			}
		}

		// 粘性定位
		position: sticky;

		/* #ifdef H5 */
		top: 88rpx;
		/* #endif */

		/* #ifdef MP-WEIXIN */
		top: 0rpx;
		/* #endif */

		z-index: 99;
		background-color: white;
	}
</style>