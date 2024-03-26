"use client"
import UserDetail from "@/components/user/UserDetail";
import ThemeContext from "@/context/ThemeContext";
import { useContext, useEffect } from "react";

function UserCopyrights() {
  const { setUserHomeTabType } = useContext(ThemeContext)

  useEffect(() => {
    setUserHomeTabType('copyrights')
  }, [])

  return (
    <UserDetail/>
  );
}

export default UserCopyrights;