<template>
	<view class="recommend">
		<template v-for="item in recommends" :key="item.title">
			<view class="recommend-item" @click="handleItemClick(item)">
				<image class="image" :src="item.image" mode="widthFix"></image>
				<view class="title">{{ item.title }}</view>
			</view>
		</template>
	</view>
</template>

<script setup>
	defineProps({
		recommends: {
			type: Array,
			default: () => []
		}
	})
	
	const emit = defineEmits(["itemClick"])
	const handleItemClick = (item) => {
		emit("itemClick", item)
	}
</script>

<style lang="scss">
	.recommend {
		// display: flex;
		// flex-direction: row;
		// justify-content: space-between;
		// scss使用混合语法
		@include normalFlex(row, space-between);

		padding: 20rpx;
		.recommend-item {
			// display: flex;
			// flex-direction: column;
			// align-items: center;
			@include normalFlex(column);
			align-items: center;
	
			font-size: $gFontSize;
			.image {
				width: 150rpx;
				height: 150rpx;
			}
			.title {
				margin-top: 10rpx;
			}
		}
	}
</style>