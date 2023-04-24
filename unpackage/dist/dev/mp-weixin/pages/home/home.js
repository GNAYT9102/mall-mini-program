"use strict";
const common_vendor = require("../../common/vendor.js");
const store_useHomeStore = require("../../store/useHomeStore.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Array) {
  const _easycom_tab_control2 = common_vendor.resolveComponent("tab-control");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_tab_control2 + _easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_tab_control = () => "../../components/tab-control/tab-control.js";
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (HomeBanner + HomeRecommend + HomePopular + _easycom_tab_control + _easycom_uni_grid_item + _easycom_uni_grid)();
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
    const tabItemClick = (index) => {
    };
    const count = common_vendor.ref(10);
    common_vendor.onReachBottom(() => {
      count.value = count.value + 10;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(bannerItemClick),
        b: common_vendor.p({
          banners: common_vendor.unref(banners)
        }),
        c: common_vendor.o(itemClick),
        d: common_vendor.p({
          recommends: common_vendor.unref(recommends)
        }),
        e: common_vendor.o(tabItemClick),
        f: common_vendor.p({
          titles: ["流行", "新款", "精选"]
        }),
        g: common_vendor.f(count.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: "10fff2ed-5-" + i0 + ",10fff2ed-4"
          };
        }),
        h: common_vendor.p({
          column: 2,
          ["border-color"]: "#ff8198"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/AAA前端-github仓库项目/uniapp-购物街/mall-mini-program/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
