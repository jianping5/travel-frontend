import axios from 'axios'

const BASE_URL = 'http://localhost:1002'

// 获取收藏夹列表
export const getFavoriteList = async (req: FavoriteListReq): Promise<BaseFavoriteListResp> => {
  try {
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseFavoriteListResp>(`${BASE_URL}/api/social/favorite/list`, req);
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
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseFavorListResp>(`${BASE_URL}/api/social/favor/list`, req);
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
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/favorite/create`, req);
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
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/favorite/delete`, req);
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
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/favor/create`, req);
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
export const cancleFavor = async (req: FavorDeleteReq): Promise<BaseResp> => {
  try {
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/favor/delete`, req);
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
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/history/create`, req);
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
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/history/delete`, req);
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
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseHistoryListResp>(`${BASE_URL}/api/social/history/list`, req);
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
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/community/create`, req);
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
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/community/delete`, req);
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
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/community/update`, req);
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

// 查看社区
export const listCommunity = async (req: CommunityListReq): Promise<BaseCommunityListResp> => {
  try {
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseCommunityListResp>(`${BASE_URL}/api/social/community/list`, req);
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
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/community/join`, req);
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
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseResp>(`${BASE_URL}/api/social/community/quit`, req);
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
    // 发送登录请求，并等待响应
    const response = await axios.post<BaseCommunityDetailResp>(`${BASE_URL}/api/social/community/detail`, req);
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
