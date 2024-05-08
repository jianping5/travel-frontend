'use client'
import axios, { AxiosRequestConfig } from 'axios'

// const BASE_URL = 'http://localhost:1001'
// const BASE_URL = 'http://192.168.249.100:1001'
// const BASE_URL = 'http://localhost:31001'
const BASE_URL = 'http://192.168.249.100:8081'


// 注册
export const register = async (req: RegisterReq): Promise<BaseRegisterResp> => {
  try {
    // 发送登录请求，并等待响应
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    const response = await axios.post<BaseRegisterResp>(`${BASE_URL}/api/user/register`, req, config);
    
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

// 登录
export const login = async (req: LoginReq): Promise<BaseLoginResp> => {
  try {
    // 发送登录请求，并等待响应
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseLoginResp>(`${BASE_URL}/api/user/login`, req, config);
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

// 登出
export const logout = () => {
  try {
    localStorage.removeItem("loginStatus")
    localStorage.removeItem("token")
  } catch (error: any) {
    // 捕获请求失败的错误，并抛出异常
    throw new Error(error.msg);
  }
};

// 查看用户信息
export const getUserInfo = async (req: UserInfoReq): Promise<BaseUserInfoResp> => {
  try {
    // 发送登录请求，并等待响应
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseUserInfoResp>(`${BASE_URL}/api/user/userinfo`, req, config);
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

// 关注
export const follow = async (req: FollowReq): Promise<BaseResp> => {
  try {
    // 发送登录请求，并等待响应
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/user/follow`, req, config);
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

// 查看关注列表
export const getFollowList = async (req: FollowListReq): Promise<BaseFollowListView> => {
  try {
    // 发送登录请求，并等待响应
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
      Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseFollowListView>(`${BASE_URL}/api/user/follow/list`, req, config);
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


