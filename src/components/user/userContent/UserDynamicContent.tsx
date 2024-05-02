'use client'
import { useEffect, useState } from "react";
import { getUserHomeDynamicList } from "@/api/social/social-api";
import { useRouter } from "next/navigation";
import UserDynamicCard from "../UserDynamicCard";

const UserFavorContent = ({params} : {params: {contentType: string, id: any }}) => {
  const [dynamicListResp, setDynamicListResp] = useState<UserHomeDynamicListResp>()

  // 获取用户主页动态
  const handleGetUserHomeDynamicList = async () => {
    try {
      const req: UserHomeDynamicListReq = {
        userId: params.id,
        pageNum: 1,
        pageSize: 10,
      }
      const res = await getUserHomeDynamicList(req)
      const data = res.data
      setDynamicListResp(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
      handleGetUserHomeDynamicList()
  }, []);

  return (
    <>
    {dynamicListResp?.list?.map(dynamic => {
      return (
        <div key={dynamic.id}>
          <UserDynamicCard dynamic={dynamic} />
        </div>
      )
    })}
    </>
  )
}

export default UserFavorContent;