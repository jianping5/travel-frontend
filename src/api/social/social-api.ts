'use client'
import axios, { AxiosRequestConfig } from 'axios'

const BASE_URL = 'http://localhost:1002'

// 获取收藏夹列表
export const getFavoriteList = async (req: FavoriteListReq): Promise<BaseFavoriteListResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };

    // 发送登录请求，并等待响应
    const response = await axios.post<BaseFavoriteListResp>(`${BASE_URL}/api/social/favorite/list`, req, config);
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

// 获取收藏列表
export const getFavorList = async (req: FavorListReq): Promise<BaseFavorListResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };

    // 发送登录请求，并等待响应
    const response = await axios.post<BaseFavorListResp>(`${BASE_URL}/api/social/favor/list`, req, config);
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

// 创建收藏夹
export const createFavorite = async (req: FavoriteCreateReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/favorite/create`, req, config);
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

// 删除收藏夹
export const deleteFavorite = async (req: FavoriteDeleteReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/favorite/delete`, req, config);
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

// 收藏
export const favor = async (req: FavorReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/favor/create`, req, config);
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

// 取消收藏
export const cancelFavor = async (req: FavorCancelReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/favor/cancel`, req, config);
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

// 删除收藏
export const deleteFavor = async (req: FavorDeleteReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/favor/delete`, req, config);
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


// 创建历史记录
export const createHistory = async (req: HistoryCreateReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/history/create`, req, config);
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

// 删除历史记录
export const deleteHistory = async (req: HistoryDeleteReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/history/delete`, req, config);
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

// 分页获取历史记录列表
export const listHistory = async (req: HistoryListReq): Promise<BaseHistoryListResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseHistoryListResp>(`${BASE_URL}/api/social/history/list`, req, config);
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


// 创建社区
export const createCommunity = async (req: CommunityCreateReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/community/create`, req, config);
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

// 删除社区
export const deleteCommunity = async (req: CommunityDeleteReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/community/delete`, req, config);
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

// 更新社区
export const updateCommunity = async (req: CommunityUpdateReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/community/update`, req, config);
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

// 查看用户加入社区列表
export const listCommunity = async (req: CommunityListReq): Promise<BaseCommunityListResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseCommunityListResp>(`${BASE_URL}/api/social/community/list`, req, config);
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

// 加入社区
export const joinCommunity = async (req: CommunityJoinReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/community/join`, req, config);
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

// 退出社区
export const quitCommunity = async (req: CommunityQuitReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/community/quit`, req, config);
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

// 查看社区详情
export const getCommunityDetail = async (req: CommunityDetailReq): Promise<BaseCommunityDetailResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseCommunityDetailResp>(`${BASE_URL}/api/social/community/detail`, req, config);
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

// 创建社区动态
export const createDynamic = async (req: CommunityDynamicCreateReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/community/dynamic/create`, req, config);
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

// 删除社区动态
export const deleteDynamic = async (req: CommunityDynamicDeleteReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/community/dynamic/delete`, req, config);
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

// 分页查询社区动态
export const listDynamic = async (req: CommunityDynamicListReq): Promise<BaseCommunityDynamicListResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseCommunityDynamicListResp>(`${BASE_URL}/api/social/community/dynamic/list`, req, config);
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

// 分页查询指定社区动态
export const listSpecificDynamic = async (req: CommunityDynamicSpecificListReq): Promise<BaseCommunityDynamicSpecificListResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseCommunityDynamicSpecificListResp>(`${BASE_URL}/api/social/community/dynamic/specific/list`, req, config);
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


// 获取动态详情
export const getDynamicDetail = async (req: CommunityDynamicDetailReq): Promise<BaseCommunityDynamicDetailResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseCommunityDynamicDetailResp>(`${BASE_URL}/api/social/community/dynamic/detail`, req, config);
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




// 创作内容
export const createContent = async (req: ContentCreateReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/content/create`, req, config);
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

// 删除内容
export const deleteContent = async (req: ContentDeleteReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/content/delete`, req, config);
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

// 更新内容
export const updateContent = async (req: ContentUpdateReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/content/update`, req, config);
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

// 查看内容详情
export const getContentDetail = async (req: ContentDetailReq): Promise<BaseContentDetailResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseContentDetailResp>(`${BASE_URL}/api/social/content/detail`, req, config);
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

// 分页获取内容列表
export const getContentList = async (req: ContentListReq): Promise<BaseContentListResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseContentListResp>(`${BASE_URL}/api/social/content/list`, req, config);
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


// 发布评论
export const createComment = async (req: CommentCreateReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/comment/create`, req, config);
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

// 删除评论
export const deleteComment = async (req: CommentDeleteReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/comment/delete`, req, config);
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

// 分页获取评论列表
export const getCommentList = async (req: CommentListReq): Promise<BaseCommentListResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseCommentListResp>(`${BASE_URL}/api/social/comment/list`, req, config);
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

// 发布消息
export const createMessage = async (req: MessageCreateReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/message/create`, req, config);
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

// 删除消息
export const deleteMessage = async (req: MessageDeleteReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/message/delete`, req, config);
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

// 更新消息
export const updateMessage = async (req: MessageUpdateReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/message/update`, req, config);
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

// 获取消息列表
export const getMessageList = async (): Promise<BaseMessageListResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseMessageListResp>(`${BASE_URL}/api/social/message/list`, config);
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


// 获取用户主页信息
export const getUserHomeList = async (req: UserHomeListReq): Promise<BaseUserHomeListResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseUserHomeListResp>(`${BASE_URL}/api/social/userhome/list`, req, config);
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

// 获取用户主页内容信息
export const getUserHomeContentList = async (req: UserHomeContentListReq): Promise<BaseUserHomeContentListResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseUserHomeContentListResp>(`${BASE_URL}/api/social/userhome/content/list`, req, config);
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

// 获取用户主页动态信息
export const getUserHomeDynamicList = async (req: UserHomeDynamicListReq): Promise<BaseUserHomeDynamicListResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };

    // 发送登录请求，并等待响应
    const response = await axios.post<BaseUserHomeDynamicListResp>(`${BASE_URL}/api/social/userhome/dynamic/list`, req, config);
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


// 点赞
export const like = async (req: LikeReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };

    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/like`, req, config);
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


// 创建版权
export const createCopyright = async (req: CopyrightCreateReq): Promise<BaseResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };

    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/copyright/create`, req, config);
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

// 查看版权详情
export const getCopyrightDetail = async (req: CopyrightDetailReq): Promise<BaseCopyrightDetailResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };

    // 发送登录请求，并等待响应
    const response = await axios.post<BaseCopyrightDetailResp>(`${BASE_URL}/api/social/copyright/detail`, req, config);
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

// 获取用户版权列表
export const getCopyrightList = async (req: CopyrightListReq): Promise<BaseCopyrightDetailResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseCopyrightDetailResp>(`${BASE_URL}/api/social/copyright/list`, req, config);
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

// 获取相似内容
export const getSimilarContentList = async (req: ContentSimilarReq): Promise<BaseContentSimilarResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseContentSimilarResp>(`${BASE_URL}/api/social/content/similar`, req, config);
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

// 获取相似内容
export const search = async (req: SearchReq): Promise<BaseSearchResp> => {
  try {
    const token = localStorage.getItem("token")

    // 构造请求配置对象
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // 设置 Authorization 请求头
      },
    };
    
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseSearchResp>(`${BASE_URL}/api/social/search`, req, config);
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