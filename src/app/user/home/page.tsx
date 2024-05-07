"use client"
import UserDetail from "@/components/user/UserDetail";
import { Suspense, useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getUserInfo } from "@/api/user/user-api";
import LoadingScreen from "@/components/common/loading";
import UserHomeContent from "@/components/user/userContent/UserHomeContent";

function OriginUserHome() {
  const [loading, setLoading] = useState(true)
  const [userInfo, setUserInfo] = useState<UserInfoResp>();
  const searchParams = useSearchParams();

  let id = searchParams.get("id") || "0"

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
        <UserDetail id={parseInt(id)} userInfo={userInfo} userHomeTabType='home'>
          <UserHomeContent params={{ contentType: 'home', id: parseInt(id) }} />
        </UserDetail>
      )}
    </>
  );
}

function UserHome() {
  return (
    <Suspense>
      <OriginUserHome/>
    </Suspense>
  )
}

export default UserHome;