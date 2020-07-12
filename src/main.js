import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  // error:require('./statics/site/imgs/erro.jpg'),
  // loading:require('./statics/site/imgs/load.gif')
});
Vue.config.productionTip = false;

// 定义$bus为一个vue实例
Vue.prototype.$bus = new Vue();

FastClick.attach(document.body);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
//
// request({
//   url:'/home/multidata',
// }).then(res =>{
//   console.log(res);
// }).catch( error => {
//   console.log(error);
// })
// 全局配置axios
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// // 请求超时时间
// axios.defaults.timeout = 5000
// axios({
//   url: '/home/multidata',
//   headers:{},
//   auth:{},
//   method:'Get'
// }).then(res => {
//   console.log(res);
// })
// axios({
//   url: '/home/data',
//   // 放接口的参数
//   // get请求写params
//   // post请求写data
//   params:{
//     type:'pop',
//     page:'3'
//   },
//
// }).then(res =>{
//       console.log(res);
//     }
// )

// 多个请求

// 请求的数据返回一个数组
// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/data'
// }),axios({
// url:'http://123.207.32.32:8000/home/data',
//   params: {
//   type: 'sell',
//     page:5
//   }
// })
// ])    .then(results => {
//   console.log(results);
// })
//     .then(axios.spread((res1,res2 => {
//   console.log(res1);
//   console.log(res2);
// })))

// 创建axios的多个实例
// const instance1 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })
//
// instance1({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })
