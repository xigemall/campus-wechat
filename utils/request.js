import {
  serverUrl
} from '../config/config';

const request = (params = {}) => {
  let url = '';
  for (const i in serverUrl) {
    if (params.url.indexOf(i) != -1) {
      const path = params.url.replace(i, '');
      url = `${serverUrl[i]}${path}`;
      break;
    }
    url = params.url;
  }

  const promiseData = new Promise((resolve, reject) => {
    const options = {
      timeout: 20000,
      ...params,
      url,
      success: resolve,
      fail: reject,
    }
    wx.request(options);
  });

  return promiseData.then(res => {
    const {
      statusCode,
      data
    } = res;
    if (statusCode >= 200 && statusCode < 300) {
      return data;
    }
    wx.showToast({
      icon: 'none',
      title: '服务器返回错误',
    })
  }).catch((err) => {
    wx.showToast({
      icon: 'none',
      title: '服务器未响应',
    })
  });
}

module.exports = {
  request,
}