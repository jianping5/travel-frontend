"use client"
import UserDetail from "@/components/user/UserDetail";
import ThemeContext from "@/context/ThemeContext";
import { useContext, useEffect } from "react";

function UserFavors() {
  const { setUserHomeTabType } = useContext(ThemeContext)

  useEffect(() => {
    setUserHomeTabType('favors')
  }, [])

  return (
    <UserDetail/>
  );
}

export default UserFavors;