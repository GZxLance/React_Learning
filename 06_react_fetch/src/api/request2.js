import axios from "axios";

// 创建 axios 实例
const request = axios.create({
  baseURL: "https://apis.tianapi.com/film",
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

// 获取影视资讯列表
export const getFilmList = (page = 1, num = 10) => {
  return request({
    method: "get",
    url: `index?key=3e9a7af3ba33a2a38e33932d2edd2abd&num=${num}&page=${page}`,
  });
};

// 获取影视资讯详情
export const getFilmDetail = (id) => {
  return request({
    method: "get",
    url: `index?key=3e9a7af3ba33a2a38e33932d2edd2abd&id=${id}`,
  });
};

export default request;
