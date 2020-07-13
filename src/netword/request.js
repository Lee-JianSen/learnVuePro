import axios from 'axios'

// export function request(config) {
//  return new Promise((resolve,reject) => {
//      const instance1 = axios.create({
//          baseURL:'http://123.207.32.32:8000',
//          timeout:5000
//      })
//      instance1(config)
//          .then(res => {
//     resolve(res)
//          }).catch(error => {
//              reject(error)
//      })
//  })
// }

export function request(config) {
    // axios.create本身就是一个promise
    const instance1 = axios.create({
        // baseURL:'http://123.207.32.32/8000',
        baseURL:'http://106.54.54.237:8000',
        timeout: 5000,
    });
    // 请求成功与失败的拦截
    instance1.interceptors.request.use(config => {
        // 拦截了config,需要返回config
        // 需要拦截的原因
        // config中的信息不符合服务器的要求
        // 每次发送网络请求时，都希望在界面中显示请求图标
        // 某些网络请求(登录（token)，必须携带一些特殊的信息
        return config
    },error => {
        console.log(error);
    });
     // 响应请求成功与失败的拦截
    instance1.interceptors.response.use(result =>{
        return result
    },error => {
        console.log(error);
    });
    return instance1(config)
}
aaaa
