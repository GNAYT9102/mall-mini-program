import hyRequest from './index.js'

// 获取首页轮播图和推荐栏的数据
export function getHomeMultidata() {
	return hyRequest.get("/home/multidata")
}