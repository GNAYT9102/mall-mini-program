"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "home-banner",
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  emits: ["bannerItemClick"],
  setup(__props, { emit }) {
    const handleItemClick = (item) => {
      emit("bannerItemClick", item.link);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.banners, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.o(($event) => handleItemClick(item), item.title),
            c: item.title
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/AAA前端-github仓库项目/uniapp-购物街/mall-mini-program/pages/home/cpns/home-banner.vue"]]);
wx.createComponent(Component);
