import axios from "axios";

// 创建 axios 实例
const request = axios.create({
  baseURL: "https://apis.tianapi.com/topnews",
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

// 获取头条新闻列表
export const getNewsList = (page = 1, num = 10) => {
  return request({
    method: "get",
    url: `index?key=3e9a7af3ba33a2a38e33932d2edd2abd&num=${num}&page=${page}`,
  });
};

// 获取头条新闻详情
export const getNewsDetail = async (id) => {
  const response = await request({
    method: "get",
    url: "index?key=3e9a7af3ba33a2a38e33932d2edd2abd&num=50&page=1",
  });
  if (response.code === 200 && response.result && response.result.list) {
    const news = response.result.list.find((item) => item.id === id);
    if (news) {
      return {
        code: 200,
        msg: "success",
        result: {
          list: [news],
        },
      };
    }
  }
  return {
    code: 404,
    msg: "新闻未找到",
    result: null,
  };
};

export default request;
