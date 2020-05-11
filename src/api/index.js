import request from "../utils/request";

export function getData(params) {
  return request({
    method: "get",
    url: `url`,
    params: params
  });
}

export function getParams(params) {
  return request({
    method: "post",
    url: `url`,
    // data: params
    params
  });
}
