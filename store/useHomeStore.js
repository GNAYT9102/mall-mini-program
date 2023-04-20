import { defineStore } from "pinia"
import { getHomeMultidata } from "@/service/home.js"

export const useHomeStore = defineStore("home", {
	state: () => {
		return {
			banners: [],
			recommends: []
		}
	},
	actions: {
		async fetchHomeMultidata() {
			const res = await getHomeMultidata()
			this.banners = res.data.banner.list || []
			this.recommends = res.data.recommend.list || []
		}
	}
})