import axios from "axios";

// 创建 axios 实例
const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在这里可以添加请求头等配置
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 封装 GET 请求
export const get = (url, params) => {
  return request({
    method: "get",
    url,
    params,
  });
};

// 封装 POST 请求
export const post = (url, data) => {
  return request({
    method: "post",
    url,
    data,
  });
};

// 封装 PUT 请求
export const put = (url, data) => {
  return request({
    method: "put",
    url,
    data,
  });
};

// 封装 DELETE 请求
export const del = (url) => {
  return request({
    method: "delete",
    url,
  });
};

export default request;
