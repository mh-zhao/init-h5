import axios from "axios";
import config from "./config";
import { getToken, setToken } from "./auth";

const service = axios.create({
  baseURL: config.baseURL,
  timeout: 100000
  // headers: {'X-Custom-Header': 'foobar'}
});

// 添加请求拦截器
service.interceptors.request.use(
  function(config) {
    // 在发送请求之前做处理
    console.log("在发送请求之前做处理", config);
    if (getToken()) {
      config.headers["token"] = getToken();
    }
    return config;
  },
  function(error) {
    // 对请求错误做处理
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function(response) {
    // 对响应数据做处理
    console.log("对响应数据做处理", response);
    if (!getToken()) {
      if (response.headers.token) {
        setToken(response.headers.token);
        console.log("getToken()", getToken());
      } else {
        console.log("无()");
      }
    }
    return response;
  },
  function(error) {
    // 对响应错误做处理
    return Promise.reject(error);
  }
);

export default service;
