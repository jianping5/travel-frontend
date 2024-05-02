'use client'
import { useEffect, useState } from "react";
import { getCopyrightList } from "@/api/social/social-api";
import HomeCardList from "../HomeCardList";
import ApplyDialog from "@/components/copyright/ApplyDialog";

const UserFavorContent = ({params} : {params: {contentType: string, id: any, userInfo?: UserInfoResp }}) => {
  const [userCopyrightListResp, setUserCopyrightListResp] = useState<CopyrightListResp>()

  // 获取用户版权列表
  const handleGetCopyrightList = async () => {
    try {
      const req: CopyrightListReq = {
        userId: params.id
      }
      const res = await getCopyrightList(req)
      const data = res.data
      setUserCopyrightListResp(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleGetCopyrightList()
  }, [])

  return (
    <>
      <div style={{ marginBottom: '-20px' }}>
        {/* <Button variant="outlined" sx={{ borderRadius:'7px'}}>Apply Copyright</Button> */}
        <ApplyDialog userInfo={params.userInfo}/>
      </div>
      <div style={{ marginTop: '15px' }}>
        <HomeCardList items={userCopyrightListResp?.list} contentType={params.contentType}/>
      </div>
    </>
  ) 
}

export default UserFavorContent;