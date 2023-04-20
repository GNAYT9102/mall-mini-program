"use strict";
const common_vendor = require("../../common/vendor.js");
const store_useHomeStore = require("../../store/useHomeStore.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Math) {
  (HomeBanner + HomeRecommend + HomePopular)();
}
const HomeBanner = () => "./cpns/home-banner.js";
const HomeRecommend = () => "./cpns/home-recommend.js";
const HomePopular = () => "./cpns/home-popular.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const homeStore = store_useHomeStore.useHomeStore();
    const { banners, recommends } = common_vendor.storeToRefs(homeStore);
    common_vendor.onLoad(() => {
      homeStore.fetchHomeMultidata();
    });
    const bannerItemClick = (link) => {
      common_vendor.index.navigateTo({
        url: `/pages/webview/webview?link=${link}`
      });
    };
    const itemClick = (item) => {
      common_vendor.index.navigateTo({
        url: `/pages/webview/webview?link=${item.link}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(bannerItemClick),
        b: common_vendor.p({
          banners: common_vendor.unref(banners)
        }),
        c: common_vendor.o(itemClick),
        d: common_vendor.p({
          recommends: common_vendor.unref(recommends)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/AAA前端-github仓库项目/uniapp-购物街/mall-mini-program/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
