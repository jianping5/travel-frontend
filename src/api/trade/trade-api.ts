'use client'
import axios, { AxiosRequestConfig } from 'axios'

// const BASE_URL = 'http://localhost:1004'
// const BASE_URL = 'http://localhost:31004'
const BASE_URL = 'http://192.168.249.100:8081'

// 创建商品
export const createWork = async (req: WorkCreateReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };

    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/trade/work/create`, req, config);
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

// 更新商品状态
export const updateWork = async (req: WorkUpdateReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };

    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/trade/work/update`, req, config);
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

// 分页获取商品列表
export const getWorkList = async (req: WorkListReq): Promise<BaseWorkListResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };

    // 发送登录请求，并等待响应
    const response = await axios.post<BaseWorkListResp>(`${BASE_URL}/api/trade/work/list`, req, config);
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

// 分页获取指定用户商品列表
export const getUserWorkList = async (req: UserWorkListReq): Promise<BaseUserWorkListResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };

    // 发送登录请求，并等待响应
    const response = await axios.post<BaseUserWorkListResp>(`${BASE_URL}/api/trade/work/userwork/list`, req, config);
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

// 获取商品详情
export const getWorkDetail = async (req: WorkDetailReq): Promise<BaseWorkDetailResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };

    // 发送登录请求，并等待响应
    const response = await axios.post<BaseWorkDetailResp>(`${BASE_URL}/api/trade/work/detail`, req, config);
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

// 创建交易记录
export const createRecord = async (req: RecordCreateReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };

    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/trade/record/create`, req, config);
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

// 获取交易记录列表
export const getRecordList = async (req: RecordListReq): Promise<BaseRecordListResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };

    // 发送登录请求，并等待响应
    const response = await axios.post<BaseRecordListResp>(`${BASE_URL}/api/trade/record/list`, req, config);
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