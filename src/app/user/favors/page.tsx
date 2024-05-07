"use client"
import { getUserInfo } from "@/api/user/user-api";
import LoadingScreen from "@/components/common/loading";
import UserDetail from "@/components/user/UserDetail";
import UserFavorContent from "@/components/user/userContent/UserFavorContent";
import ThemeContext from "@/context/ThemeContext";
import { useSearchParams } from "next/navigation";
import { Suspense, useContext, useEffect, useState } from "react";

function OriginUserFavors() {
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
        <UserDetail id={parseInt(id)} userInfo={userInfo} userHomeTabType='favors'>
          <UserFavorContent params={{ contentType: 'favors', id: parseInt(id) }} />
        </UserDetail>
      )}
    </>
  );
}

function UserFavors() {
  return (
    <Suspense>
      <OriginUserFavors/>
    </Suspense>
  )
}

export default UserFavors;