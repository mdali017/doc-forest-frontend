import { Box, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const AuthButton = dynamic(() => import('@/components/UI/AuthButton/AuthButton'), { ssr: false })
  return (
    <div>
      <Container>
        <Stack
          py={2}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h5" component={Link} href="/" fontWeight={600}>
            P
            <Box component={"span"} color="primary.main">
              H
            </Box>
            Healthcare
          </Typography>
          <Stack direction={"row"} justifyContent={"space-between"} gap={4}>
            <Typography>Consultation</Typography>
            <Typography>Health Plans</Typography>
            <Typography>Medicine</Typography>
            <Typography>Diagnostics</Typography>
            <Typography>NGOs</Typography>
          </Stack>
          <AuthButton />
        </Stack>
      </Container>
    </div>
  );
};

export default Navbar;
