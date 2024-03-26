"use client"
import UserDetail from "@/components/user/UserDetail";
import ThemeContext from "@/context/ThemeContext";
import { useContext, useEffect } from "react";

function UserVideos() {
  const { setUserHomeTabType } = useContext(ThemeContext)

  useEffect(() => {
    setUserHomeTabType('videos')
  }, [])

  return (
    <UserDetail/>
  );
}

export default UserVideos;