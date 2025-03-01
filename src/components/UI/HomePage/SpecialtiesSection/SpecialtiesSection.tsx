import { Box, Container, Typography, Paper } from "@mui/material";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const SpecialtiesSection = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();

  return (
    <Box
      component="section"
      sx={{
        py: 3,
        background: "#fafafa",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(66, 133, 244, 0.1)",
          top: "-100px",
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
          background: "rgba(234, 67, 53, 0.08)",
          bottom: "-50px",
          left: "-50px",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box textAlign="center" mb={2}>
          <Typography
            variant="overline"
            component="div"
            fontSize="1rem"
            fontWeight={500}
            letterSpacing="0.1em"
            color="primary.main"
            // mb={1}
          >
            MEDICAL EXPERTISE
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            fontWeight={800}
            mb={2}
            sx={{
              fontSize: { xs: "1rem", md: "2rem" },
              color: "#1a1a1a",
            }}
          >
            Explore Treatments Across Specialties
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(6, 1fr)",
            },
            gap: 3,
          }}
        >
          {specialties?.map((specialty: any) => (
            <Link
              href={`/specialties/${specialty.id}`}
              key={specialty?.id}
              style={{ textDecoration: "none" }}
            >
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 3,
                  height: "100%",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  border: "1px solid #f0f0f0",
                  background: "rgba(245, 245, 245, 1)",
                  "&:hover": {
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                    borderColor: "blue",
                    transform: "translateY(-5px)",
                    "& .specialty-icon": {
                      transform: "scale(1.1)",
                    },
                    "& .specialty-title": {
                      color: "primary.main",
                    },
                  },
                }}
              >
                <Box
                  className="specialty-icon"
                  sx={{
                    mb: 2.5,
                    transition: "transform 0.3s ease",
                    position: "relative",
                    width: 60,
                    height: 60,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={specialty.icon}
                    width={60}
                    height={60}
                    alt={specialty.title}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Typography
                  className="specialty-title"
                  component="p"
                  fontWeight={600}
                  fontSize="0.95rem"
                  textAlign="center"
                  color="#333"
                  sx={{ transition: "color 0.3s ease" }}
                >
                  {specialty.title}
                </Typography>
              </Paper>
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SpecialtiesSection;
