'use client'
import React from "react";
import { Box, Container, Typography, Stack, Card, CardContent, useMediaQuery, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const steps = [
  {
    number: "01",
    title: "Search for a Doctor",
    description: "Browse our comprehensive directory of medical specialists filtered by specialty, location, and availability.",
    color: "#4361ee"
  },
  {
    number: "02",
    title: "Review & Select",
    description: "Compare doctor profiles with ratings, qualifications, and experiences to make an informed decision.",
    color: "#3a86ff"
  },
  {
    number: "03",
    title: "Schedule Appointment",
    description: "Book your preferred time slot either for an in-person visit or a virtual consultation.",
    color: "#4cc9f0"
  },
  {
    number: "04",
    title: "Receive Care",
    description: "Get the treatment you need and access your medical records through our secure patient portal.",
    color: "#4ea8de"
  }
];

const HowItWorkSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        position: "relative",
        background: "linear-gradient(135deg, #fafafa 0%, #f5f7ff 100%)"
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Box 
            component="span" 
            sx={{ 
              display: "inline-block",
              p: "0.5rem 1.5rem",
              borderRadius: "30px",
              backgroundColor: "rgba(67, 97, 238, 0.1)",
              color: "#4361ee",
              fontWeight: 600,
              fontSize: "0.875rem",
              mb: 2
            }}
          >
            Simple & Easy
          </Box>
          
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 800,
              mb: 3,
              background: "linear-gradient(90deg, #3a86ff 0%, #4cc9f0 100%)",
              backgroundClip: "text",
              textFillColor: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            How It Works
          </Typography>
          
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ 
              maxWidth: "700px", 
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.125rem" }
            }}
          >
            Access quality healthcare in four simple steps - designed for convenience and peace of mind
          </Typography>
        </Box>

        <Box sx={{ position: "relative" }}>
          {!isMobile && (
            <Box
              sx={{
                position: "absolute",
                top: "35%",
                left: 0,
                right: 0,
                height: "4px",
                backgroundColor: "#e9ecef",
                zIndex: 0
              }}
            />
          )}
          
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 4, md: 0 }}
            justifyContent="space-between"
            alignItems="stretch"
          >
            {steps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  width: { xs: "100%", md: "22%" },
                  zIndex: 1
                }}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    borderRadius: "16px",
                    backgroundColor: "white",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                    border: "1px solid rgba(0,0,0,0.03)",
                    position: "relative",
                    overflow: "visible",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.1)"
                    }
                  }}
                >
                  {/* Top accent color bar */}
                  <Box
                    sx={{
                      height: "8px",
                      backgroundColor: step.color,
                      borderTopLeftRadius: "16px",
                      borderTopRightRadius: "16px"
                    }}
                  />
                  
                  {/* Step number bubble */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: { xs: "20px", md: "-25px" },
                      left: { xs: "20px", md: "calc(50% - 25px)" },
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: step.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: 700,
                      boxShadow: `0 5px 15px ${step.color}80`
                    }}
                  >
                    {step.number}
                  </Box>
                  
                  {/* Arrow for desktop */}
                  {!isMobile && index < steps.length - 1 && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "35%",
                        right: "-12%",
                        zIndex: 2,
                        color: "#b0b8c4"
                      }}
                    >
                      <ArrowForwardIcon fontSize="large" />
                    </Box>
                  )}
                  
                  <CardContent sx={{ pt: { xs: 4, md: 7 }, pb: 4, px: 3 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        textAlign: { xs: "left", md: "center" },
                        pl: { xs: 7, md: 0 }
                      }}
                    >
                      {step.title}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ 
                        textAlign: { xs: "left", md: "center" }
                      }}
                    >
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorkSection;