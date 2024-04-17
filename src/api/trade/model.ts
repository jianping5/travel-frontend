interface WorkCreateReq {
  copyrightId: number;
  price: string;
}

interface WorkUpdateReq {
  id: number;
  type: number;
}

interface WorkListReq {
  pageNum: number;
  pageSize: number;
}

interface UserWorkListReq {
  userId: number
  pageNum: number;
  pageSize: number;
}

interface WorkDetailReq {
  id: number;
}

interface WorkView {
  id: number;
  userId: number;
  copyrightId: number;
  price: string;
  status: number;
  createTime: string;
  account: string;
  avatar: string;
  itemType: number;
  title: string;
  coverUrl: string;
}

interface WorkDetailResp {
  work: WorkView;
  userInfo: UserInfoView;
  copyright: CopyrightView;
}

interface BaseWorkDetailResp {
  code: string;
  data: WorkDetailResp;
  msg: string;
}

interface WorkListResp {
  list: WorkView[];
  total: number;
}

interface UserWorkListResp {
  list: WorkView[];
  total: number;
}

interface BaseWorkListResp {
  code: string;
  data: WorkListResp;
  msg: string;
}

interface BaseUserWorkListResp {
  code: string;
  data: UserWorkListResp;
  msg: string;
}

interface RecordCreateReq {
  workId: number;
  userId: number;
}

interface RecordListReq {
  workId: number;
}

interface RecordView {
  id: number;
  oldUserId: number;
  oldUserInfo: UserInfoView;
  newUserId: number;
  newUserInfo: UserInfoView;
  price: string;
  createTime: string;
}

interface RecordListResp {
  list: RecordView[];
}

interface BaseRecordListResp {
  code: string;
  data: RecordListResp;
  msg: string;
}
