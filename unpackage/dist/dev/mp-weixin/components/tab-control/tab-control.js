"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "tab-control",
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  emits: ["tabItemClick"],
  setup(__props, { emit }) {
    const currentIndex = common_vendor.ref(0);
    const handleItemClick = (index) => {
      currentIndex.value = index;
      emit("tabItemClick", index);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.titles, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: currentIndex.value === index ? 1 : "",
            c: common_vendor.o(($event) => handleItemClick(index), index),
            d: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/AAA前端-github仓库项目/uniapp-购物街/mall-mini-program/components/tab-control/tab-control.vue"]]);
wx.createComponent(Component);
