"use strict";
const service_index = require("./index.js");
function getHomeMultidata() {
  return service_index.hyRequest.get("/home/multidata");
}
exports.getHomeMultidata = getHomeMultidata;
