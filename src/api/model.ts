type BaseResp = {
  code: string,
  data: any,
  msg: string
}

interface UserInfoView {
  id: number;
  account: string;
  email: string;
  avatar: string;
  isFollowed: boolean;
}


