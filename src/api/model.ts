type BaseResp = {
  code: string,
  data: any,
  msg: string
}

interface UserInfoView {
  userId: number;
  account: string;
  email: string;
  avatar: string;
}