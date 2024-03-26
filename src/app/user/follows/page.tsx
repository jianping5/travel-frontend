"use client"
import UserDetail from "@/components/user/UserDetail";
import ThemeContext from "@/context/ThemeContext";
import { useContext, useEffect } from "react";

function UserFollows() {
  const { setUserHomeTabType } = useContext(ThemeContext)

  useEffect(() => {
    setUserHomeTabType('follows')
  }, [])

  return (
    <UserDetail/>
  );
}

export default UserFollows;