'use client'
import axios, { AxiosRequestConfig } from 'axios'

// const BASE_URL = 'http://localhost:1005'
// const BASE_URL = 'http://localhost:31005'
const BASE_URL = 'http://192.168.249.100:8081'

// 创建行为记录
export const createBehavior = async (req: BehaviorCreateReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };

    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/data/behavior/create`, req, config);
    // 非 200 报错
    if (response.data.code != "200") {
      throw new Error("状态码错误")
    }
    // 返回响应数据
    return response.data;
  } catch (error: any) {
    // 捕获请求失败的错误，并抛出异常
    throw new Error(error.msg);
  }
};

// 上传文件
export const uploadFile = async (fileType: string, file: File): Promise<BaseUploadResp> => {
  try {
    const formData = new FormData();
    formData.append('fileType', fileType);
    formData.append('file', file);

    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };

    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/data/file/upload`, formData, config);
    // 非 200 报错
    if (response.data.code != "200") {
      throw new Error("状态码错误")
    }
    // 返回响应数据
    return response.data;
  } catch (error: any) {
    // 捕获请求失败的错误，并抛出异常
    throw new Error(error.msg);
  }
};