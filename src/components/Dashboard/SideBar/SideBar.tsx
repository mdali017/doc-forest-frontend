import { Box, List, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "@/assets/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SidebarItem from "./SidebarItem";
import { getUserInfo } from "@/services/auth.services";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const userInfo = getUserInfo();
    setUserRole(userInfo.role);
  }, []);
  // console.log(userInfo);
  return (
    <Box>
      <Stack
        component={Link}
        href={"/"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
        py={1}
        mt={1}
      >
        <Image src={logo} alt="logo" />
        <Typography sx={{ cursor: "pointer" }}>PH Health Care</Typography>
      </Stack>
      <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
