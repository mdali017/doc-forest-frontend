"use client";
import { Box, Container, Stack, Typography, IconButton, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import React from "react";

const Footer = () => {
  const navItems = [
    { title: "Consultation", link: "#" },
    { title: "Health Plans", link: "#" },
    { title: "Medicine", link: "#" },
    { title: "Diagnostics", link: "#" },
    { title: "NGOs", link: "#" }
  ];

  const socialIcons = [
    { icon: <FacebookIcon />, link: "#", color: "#4267B2" },
    { icon: <TwitterIcon />, link: "#", color: "#1DA1F2" },
    { icon: <InstagramIcon />, link: "#", color: "#E1306C" },
    { icon: <LinkedInIcon />, link: "#", color: "#0A66C2" }
  ];

  return (
    <Box 
      sx={{ 
        background: "black",
        color: "white",
        py: 2,
        boxShadow: "0px -5px 20px rgba(0, 0, 0, 0.1)"
      }}
    >
      <Container maxWidth="lg">
        {/* Logo and Tagline Section */}
        <Stack 
          direction={{ xs: "column", md: "row" }} 
          alignItems="center" 
          justifyContent="center"
          spacing={2}
          mb={1}
        >
          <Stack direction="row" alignItems="center" spacing={1} py={3}>
            <HealthAndSafetyIcon sx={{ fontSize: 38, color: "#4caf50" }} />
            <Typography variant="h5" fontWeight="bold" sx={{ letterSpacing: 1 }}>
              PH HealthCare
            </Typography>
          </Stack>
          {/* <Typography 
            variant="subtitle1" 
            sx={{ 
              opacity: 0.8,
              fontStyle: "italic",
              display: { xs: "none", md: "block" }
            }}
          >
            Your Health, Our Priority
          </Typography> */}
        </Stack>

        {/* Navigation Links */}
        <Stack 
          direction={{ xs: "column", sm: "row" }} 
          justifyContent="center" 
          spacing={{ xs: 2, sm: 4 }}
          mb={3}
          sx={{ flexWrap: "wrap" }}
        >
          {navItems.map((item, index) => (
            <Typography 
              key={index} 
              component="a" 
              href={item.link}
              sx={{ 
                color: "white", 
                textDecoration: "none",
                position: "relative",
                fontWeight: 500,
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#4caf50",
                  transform: "translateY(-2px)"
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  bottom: "-5px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#4caf50",
                  transition: "width 0.3s ease"
                },
                "&:hover::after": {
                  width: "100%"
                }
              }}
            >
              {item.title}
            </Typography>
          ))}
        </Stack>

        {/* Social Icons */}
        <Stack 
          direction="row" 
          justifyContent="center" 
          spacing={2} 
          mb={1}
        >
          {socialIcons.map((item, index) => (
            <IconButton 
              key={index} 
              component="a" 
              href={item.link}
              sx={{ 
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transition: "all 0.3s ease",
                "&:hover": { 
                  backgroundColor: item.color,
                  transform: "translateY(-3px)",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)"
                }
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Stack>

        {/* Divider */}
        <Divider 
          sx={{ 
            borderStyle: "dashed", 
            borderColor: "rgba(255, 255, 255, 0.2)",
            my: 3
          }} 
        />

        {/* Copyright and Info Section */}
        <Stack 
          direction={{ xs: "column", md: "row" }} 
          justifyContent="space-between" 
          alignItems="center"
          spacing={2}
        >
          <Typography 
            variant="body2" 
            sx={{ opacity: 0.8 }}
          >
            &copy; 2025 PH Healthcare. All Rights Reserved.
          </Typography>
          
          <Stack 
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            alignItems="center"
          >
            <Typography 
              variant="body2" 
              component="a" 
              href="#"
              sx={{ 
                color: "white", 
                opacity: 0.8,
                textDecoration: "none",
                "&:hover": { color: "#4caf50", opacity: 1 }
              }}
            >
              Privacy Policy
            </Typography>
            <Typography 
              variant="body2" 
              component="a" 
              href="#"
              sx={{ 
                color: "white", 
                opacity: 0.8,
                textDecoration: "none",
                "&:hover": { color: "#4caf50", opacity: 1 }
              }}
            >
              Terms of Service
            </Typography>
          </Stack>
          
          <Typography 
            variant="body2" 
            sx={{ 
              opacity: 0.8,
              display: "flex",
              alignItems: "center"
            }}
          >
            Powered by 
            <Typography 
              component="span" 
              sx={{ 
                ml: 0.5,
                color: "#4caf50", 
                fontWeight: "medium" 
              }}
            >
              Md. Mohabbat Ali
            </Typography>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;