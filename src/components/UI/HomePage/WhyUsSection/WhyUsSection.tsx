import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import svgLogo from "../../../../assets/icons/award-icon.svg";
import whyUsImg from "@/assets/Images/choose-us.png";
import Image from "next/image";

const servicesData = [
  {
    imageSrc: svgLogo,
    title: "Award Winning Service",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: svgLogo,
    title: "Best Quality Pregnancy Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: svgLogo,
    title: "Complete Medical Equipments",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: svgLogo,
    title: "Dedicated Emergency Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
];

const WhyUsSection = () => {
  return (
    <Box component="section" >
      <Container>
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography 
            variant="subtitle1" 
            color="primary" 
            fontWeight={600} 
            sx={{ mb: 1 }}
          >
            Why Us
          </Typography>
          <Typography 
            variant="h3" 
            component="h2" 
            fontWeight={700}
            sx={{ fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" } }}
          >
            Why Choose Us
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            {servicesData.map((service, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  gap: "15px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: index % 2 === 0 
                    ? "10px 10px 100px 10px" 
                    : "10px 100px 10px 10px",
                  padding: "20px",
                  margin: "20px 0px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#e8f4fd",
                    transform: "translateY(-3px)",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)"
                  }
                }}
              >
                <Box sx={{ 
                  width: "60px", 
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  <Image 
                    src={service.imageSrc} 
                    alt={service.title} 
                    width={40} 
                    height={40} 
                  />
                </Box>
                <Box>
                  <Typography 
                    variant="h6" 
                    fontWeight={600} 
                    sx={{ mb: 1 }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center"
          }}>
            <Box 
              sx={{ 
                position: "relative", 
                width: "100%",
                height: "100%",
                minHeight: { xs: "300px", md: "550px" }
              }}
            >
              <Image 
                src={whyUsImg} 
                alt="Choose us img" 
                fill
                style={{ 
                  objectFit: "cover", 
                  borderRadius: "16px" 
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyUsSection;