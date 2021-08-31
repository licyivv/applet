// pages/home/home.js
import{
  getMultiData
} from '../../service/home.js'

Page({
  data: {
    banners:[],
    recommends:[]
  },

  onLoad: function (options) {
    // 1.请求轮播图和推荐数据
    getMultiData().then(res =>{
      // 取出轮播图和推荐数据
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;

      // 将bannners和recommends放入data数据
      this.setData({
        banners:banners,
        recommends:recommends
      })
    })
  },

  
})