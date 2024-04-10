// 登录
type LoginReq = {
  account: string,
  password: string
}

type LoginResp = {
  accessToken: string,
  accessexpire: string
}

type BaseLoginResp = {
  code: string,
  data: LoginResp,
  msg: string
}

// 注册
type RegisterReq = {
  account: string,
  password: string,
  email: string
}

type RegisterResp = {
  id: number,
  account: string,
  email: string
}

type BaseRegisterResp = {
  code: string,
  data: RegisterResp,
  msg: string
}

// 用户信息
type UserInfoReq = {
  id: number
}

type UserInfoResp = {
  id: number,
  account: string,
  email: string,
  avatar: string,
  signature: string,
  createTime: string,
  updateTime: string,
  isFollowed: boolean,
}

type BaseUserInfoResp = {
  code: string,
  data: UserInfoResp,
  msg: string
}

// 关注
type FollowReq = {
  id: number,
  type: boolean
}

type FollowListReq = {
  id: number,
  pageNum: number,
  pageSize: number
}

type FollowListView = {
  userInfo: UserInfoResp[],
  total: number
}

type BaseFollowListView = {
  code: string,
  data: FollowListView,
  msg: string
}