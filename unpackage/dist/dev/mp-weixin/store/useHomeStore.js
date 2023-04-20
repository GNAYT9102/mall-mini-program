"use strict";
const common_vendor = require("../common/vendor.js");
const service_home = require("../service/home.js");
const useHomeStore = common_vendor.defineStore("home", {
  state: () => {
    return {
      banners: [],
      recommends: []
    };
  },
  actions: {
    async fetchHomeMultidata() {
      const res = await service_home.getHomeMultidata();
      this.banners = res.data.banner.list || [];
      this.recommends = res.data.recommend.list || [];
    }
  }
});
exports.useHomeStore = useHomeStore;
