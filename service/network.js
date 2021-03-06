import {
  baseURL
} from './config.js'

export default function request(options){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseURL + options.url,
      method:options.method || 'GET',
      data: options.data || {},
      success:function(res){
        resolve(res);
      },
      fail:function(err){
        reject(err);
      }
    })
  })
}