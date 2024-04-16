'use client'
import axios, { AxiosRequestConfig } from 'axios'

const BASE_URL = 'http://localhost:1003'

// 创建智能攻略
export const createStrategy = async (req: StrategyCreateReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token");

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post<BaseResp>(`${BASE_URL}/api/intelligence/strategy/create`, req, config);
    if (response.data.code != "200") {
      throw new Error("状态码错误");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(error.msg);
  }
};

// 删除智能攻略
export const deleteStrategy = async (req: StrategyDeleteReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token");

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post<BaseResp>(`${BASE_URL}/api/intelligence/strategy/delete`, req, config);
    if (response.data.code != "200") {
      throw new Error("状态码错误");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(error.msg);
  }
};

// 生成智能攻略
export const generateStrategy = async (req: StrategyGenerateReq): Promise<BaseStrategyGenerateResp> => {
  try {
    const token = localStorage.getItem("token");

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post<BaseStrategyGenerateResp>(`${BASE_URL}/api/intelligence/strategy/generate`, req, config);
    if (response.data.code != "200") {
      throw new Error("状态码错误");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(error.msg);
  }
};

// 获取智能攻略列表
export const getStrategyList = async (): Promise<BaseStrategyListResp> => {
  try {
    const token = localStorage.getItem("token");

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post<BaseStrategyListResp>(`${BASE_URL}/api/intelligence/strategy/list`, null, config);

    if (response.data.code != "200") {
      throw new Error("状态码错误");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(error.msg);
  }
};

// 获取智能攻略详情
export const getStrategyDetail = async (req: StrategyDeleteReq): Promise<BaseStrategyDetailResp> => {
  try {
    const token = localStorage.getItem("token");

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post<BaseStrategyDetailResp>(`${BASE_URL}/api/intelligence/strategy/detail`, req, config);

    if (response.data.code != "200") {
      throw new Error("状态码错误");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(error.msg);
  }
};

// 创建会话
export const createConversation = async (req: ConversationCreateReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token");

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post<BaseResp>(`${BASE_URL}/api/intelligence/conversation/create`, req, config);
    if (response.data.code != "200") {
      throw new Error("状态码错误");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(error.msg);
  }
};

// 生成会话
export const generateConversation = async (req: ConversationGenerateReq): Promise<BaseConversationGenerateResp> => {
  try {
    const token = localStorage.getItem("token");

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post<BaseConversationGenerateResp>(`${BASE_URL}/api/intelligence/conversation/generate`, req, config);
    if (response.data.code != "200") {
      throw new Error("状态码错误");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(error.msg);
  }
};

// 获取会话列表
export const getConversationList = async (): Promise<BaseConversationListResp> => {
  try {
    const token = localStorage.getItem("token");

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    
    const response = await axios.post<BaseConversationListResp>(`${BASE_URL}/api/intelligence/conversation/list`, null, config);
    console.log(response.data.code)
    if (response.data.code != "200") {
      throw new Error("状态码错误");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(error.msg);
  }
};