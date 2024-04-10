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
  signature: string;
}

interface JwtPayload {
  jwtUserId: number
}

interface CopyrightView {
  id: number;
  userId: number;
  itemType: number;
  itemId: number;
  metadata: string;
  tradeHash: string;
  address: string;
  status: number;
  createTime: string;
  title: string;
  coverUrl: string;
  account: string;
  avatar: string;
}

