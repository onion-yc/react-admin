import axios from 'axios';
import { message } from "antd";


export default function ajax(url, data = {}, method = 'get') {
  let reqParams = data;
  method = method.toLowerCase();

  if (method === 'get') {
    reqParams = {
      params: data
    }
  }
  return axios[method](url, reqParams)
    .then((res) => {
      const {data} = res;
      console.log(data)
      if( data.status === 0 ) {
        return data.data
      }else {

        //请求失败，给用户提示错误信息
        message.error(data.msg, 2);
      }
    })
    .catch((err) => {
      //网络错误、服务器内部错误等
      message.error('网络出现异常，请重新加载~', 2);
    })
}
