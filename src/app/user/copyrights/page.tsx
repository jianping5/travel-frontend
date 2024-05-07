"use client"
import { getUserInfo } from "@/api/user/user-api";
import LoadingScreen from "@/components/common/loading";
import UserDetail from "@/components/user/UserDetail";
import UserCopyrightContent from "@/components/user/userContent/UserCopyrightContent";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function OriginUserCopyrights() {
  const [loading, setLoading] = useState(true)
  const [userInfo, setUserInfo] = useState<UserInfoResp>();
  const searchParams = useSearchParams();

  const id = searchParams.get("id") || "0"

  // 获取指定用户信息
  const handleGetUserInfo = async () => {
    try {
      const req: UserInfoReq = {
        id: parseInt(id)
      }
      const response = await getUserInfo(req)
      const data = response.data
      setUserInfo(data)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleGetUserInfo()
  }, [])

  return (
    <>
      {loading ? (
        <LoadingScreen/>
      ) : (
        <UserDetail id={parseInt(id)} userInfo={userInfo} userHomeTabType='copyrights'>
          <UserCopyrightContent params={{ contentType: 'copyrights', id: parseInt(id), userInfo: userInfo}} />
        </UserDetail>
      )}
    </>
  );
}

function UserCopyrights() {
  return (
    <Suspense>
      <OriginUserCopyrights/>
    </Suspense>
  )
}

export default UserCopyrights;