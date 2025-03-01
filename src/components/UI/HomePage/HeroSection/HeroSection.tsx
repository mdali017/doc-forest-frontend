"use client";
import { Box, Container, Typography, Button, Stack, useMediaQuery, useTheme } from "@mui/material";
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React from "react";

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box 
      sx={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%)",
        py: { xs: 6, md: 10 },
        overflow: "hidden",
        position: "relative"
      }}
    >
      {/* Decorative Elements */}
      <Box 
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "linear-gradient(45deg, rgba(76, 175, 80, 0.1), rgba(33, 150, 243, 0.1))",
          top: "-150px",
          right: "-100px",
          zIndex: 0,
        }}
      />
      <Box 
        sx={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "linear-gradient(45deg, rgba(33, 150, 243, 0.1), rgba(76, 175, 80, 0.1))",
          bottom: "-100px",
          left: "-50px",
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack 
          direction={{ xs: "column", md: "row" }} 
          spacing={{ xs: 6, md: 4 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left Content Area */}
          <Box 
            sx={{ 
              flex: "1", 
              textAlign: { xs: "center", md: "left" },
              order: { xs: 2, md: 1 }
            }}
          >
            <Box 
              sx={{ 
                display: "inline-flex", 
                alignItems: "center", 
                backgroundColor: "rgba(76, 175, 80, 0.1)", 
                borderRadius: "50px",
                px: 2,
                py: 0.7,
                mb: 2
              }}
            >
              <HealthAndSafetyIcon sx={{ color: "#4caf50", fontSize: 20, mr: 1 }} />
              <Typography variant="body2" fontWeight="medium" color="#4caf50">
                Modern Healthcare Solutions
              </Typography>
            </Box>
            
            <Typography 
              variant="h2" 
              component="h1" 
              fontWeight="bold"
              sx={{ 
                mb: 2,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                background: "linear-gradient(90deg, #1a237e, #2196f3)",
                backgroundClip: "text",
                textFillColor: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.2
              }}
            >
              Healthcare at Your Fingertips
            </Typography>
            
            <Typography 
              variant="h5" 
              component="h2"
              color="text.secondary"
              sx={{ 
                mb: 3,
                fontWeight: "normal",
                maxWidth: "600px",
                mx: { xs: "auto", md: 0 }
              }}
            >
              Connect with top specialists from the comfort of your home with our advanced telemedicine platform
            </Typography>
            
            <Stack 
              direction={{ xs: "column", sm: "row" }} 
              spacing={2}
              sx={{ 
                mb: 4,
                justifyContent: { xs: "center", md: "flex-start" } 
              }}
            >
              <Button 
                variant="contained" 
                size="large"
                startIcon={<VideoCameraFrontIcon />}
                sx={{ 
                  borderRadius: "50px", 
                  px: 4,
                  background: "linear-gradient(90deg, #4caf50, #2196f3)",
                  boxShadow: "0 6px 20px rgba(33, 150, 243, 0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 10px 25px rgba(33, 150, 243, 0.4)",
                  }
                }}
              >
                Start Consultation
              </Button>
              
              <Button 
                variant="outlined" 
                size="large"
                startIcon={<CalendarMonthIcon />}
                sx={{ 
                  borderRadius: "50px", 
                  px: 4,
                  borderColor: "#2196f3",
                  color: "#2196f3",
                  "&:hover": {
                    borderColor: "#1a237e",
                    backgroundColor: "rgba(33, 150, 243, 0.05)"
                  }
                }}
              >
                Book Appointment
              </Button>
            </Stack>
            
            <Stack 
              direction="row" 
              spacing={3} 
              sx={{ 
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center"
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Box 
                  component="span" 
                  sx={{ 
                    width: 8, 
                    height: 8, 
                    borderRadius: "50%", 
                    backgroundColor: "#4caf50",
                    display: "inline-block"
                  }} 
                />
                <Typography variant="body2" color="text.secondary">
                  <Typography component="span" fontWeight="bold" color="text.primary">24/7</Typography> Support
                </Typography>
              </Stack>
              
              <Stack direction="row" spacing={1} alignItems="center">
                <Box 
                  component="span" 
                  sx={{ 
                    width: 8, 
                    height: 8, 
                    borderRadius: "50%", 
                    backgroundColor: "#4caf50",
                    display: "inline-block"
                  }} 
                />
                <Typography variant="body2" color="text.secondary">
                  <Typography component="span" fontWeight="bold" color="text.primary">200+</Typography> Specialists
                </Typography>
              </Stack>
              
              <Stack direction="row" spacing={1} alignItems="center">
                <Box 
                  component="span" 
                  sx={{ 
                    width: 8, 
                    height: 8, 
                    borderRadius: "50%", 
                    backgroundColor: "#4caf50",
                    display: "inline-block"
                  }} 
                />
                <Typography variant="body2" color="text.secondary">
                  <Typography component="span" fontWeight="bold" color="text.primary">HIPAA</Typography> Compliant
                </Typography>
              </Stack>
            </Stack>
          </Box>
          
          {/* Right Image Area */}
          <Box 
            sx={{ 
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              order: { xs: 1, md: 2 },
              position: "relative"
            }}
          >
            <Box
              component="img"
              src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Doctor providing telemedicine consultation"
              sx={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                border: "5px solid white",
                zIndex: 2
              }}
            />
            
            {/* Decorative Elements */}
            <Box 
              sx={{
                position: "absolute",
                width: "150px",
                height: "150px",
                borderRadius: "20px",
                background: "rgba(76, 175, 80, 0.1)",
                border: "4px solid rgba(76, 175, 80, 0.2)",
                top: "-30px",
                right: isMobile ? "10%" : "0",
                zIndex: 1,
                transform: "rotate(15deg)"
              }}
            />
            
            <Box 
              sx={{
                position: "absolute",
                width: "80px",
                height: "80px",
                borderRadius: "12px",
                background: "rgba(33, 150, 243, 0.1)",
                border: "3px solid rgba(33, 150, 243, 0.2)",
                bottom: "-20px",
                left: isMobile ? "10%" : "40px",
                zIndex: 1,
                transform: "rotate(-10deg)"
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;