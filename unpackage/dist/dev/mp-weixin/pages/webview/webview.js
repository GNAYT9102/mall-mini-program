"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "webview",
  props: {
    link: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.link
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/AAA前端-github仓库项目/uniapp-购物街/mall-mini-program/pages/webview/webview.vue"]]);
wx.createPage(MiniProgramPage);
