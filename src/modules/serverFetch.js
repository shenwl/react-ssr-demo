import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://47.95.113.63/ssr/'
});

export default (url, data = {}, type = 'GET') => {
  return new Promise((resolve, reject) => {
    let option = {
      url: url,
      method: type,
      validateStatus(status) {
        return (status >= 200 && status < 300) || status === 400;
      }
    };

    data.secret = 'M5s2sPneDE';

    if (type.toLowerCase() === 'get') {
      option.params = data;
    } else {
      option.data = data;
    }
    instance(option).then((res) => {
      if (res.status === 200) {
        resolve(res.data);
      } else {
        console.error(res.data.msg || '参数错误');
        reject(res.data);
      }
    }).catch(function (err) {
      console.error('网络异常: ' + err);
      reject({msg: '网络异常'});
    });
  });
}
