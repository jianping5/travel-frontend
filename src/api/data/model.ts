// 行为
interface BehaviorCreateReq {
  behaviorItemType: number
  behaviorItemId: number
  behaviorType: number
}

interface UploadResp {
  fileUrl: string
}

interface BaseUploadResp {
  code: string
  data: UploadResp
  msg: string
}