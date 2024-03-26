"use client"
import UserDetail from "@/components/user/UserDetail";
import ThemeContext from "@/context/ThemeContext";
import { useContext, useEffect } from "react";

function UserHome() {
  const { setUserHomeTabType } = useContext(ThemeContext)

  useEffect(() => {
    setUserHomeTabType('home')
  }, [])

  return (
    <UserDetail/>
  );
}

export default UserHome;