"use client"
import { getUserInfo, removeUser } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  // console.log(isLoggedIn());

  const handleLogout = () => {
    removeUser();
    router.refresh();
  };
  return (
    <>
      {userInfo ? (
        <Button onClick={handleLogout} variant="contained" color="error">
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
