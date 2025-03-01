import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Chip,
  Avatar,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const TopRatedDoctors = async () => {
  const res = await fetch("http://localhost:5000/api/v1/doctor", {
    next: {
      revalidate: 30,
    },
  });
  const { data } = await res.json();
  // console.log(data);

  return (
    <Box
      component="section"
      sx={{
        pt: 8,
        background: "linear-gradient(180deg, #ffffff 0%, #f8faff 100%)",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Box>
            <Typography
              variant="h2"
              component="h2"
              fontWeight={700}
              sx={{
                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
                lineHeight: 1.2,
                mb: 1.5,
              }}
            >
              Top Rated Doctors
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{
                maxWidth: "600px",
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              Book appointments with the highest-rated doctors, trusted by
              thousands of patients for their exceptional care and expertise.
            </Typography>
          </Box>

          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              display: { xs: "none", sm: "flex" },
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 500,
            }}
          >
            View All Doctors
          </Button>
        </Box>

        <Grid container spacing={3}>
          {data.map((doctor: any) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={doctor.id}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease",
                  height: "100%",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)",
                    "& .doctor-image": {
                      transform: "scale(1.05)",
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: "220px",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="220"
                    image={doctor.profilePhoto}
                    alt={doctor.name}
                    className="doctor-image"
                    sx={{
                      transition: "transform 0.6s ease",
                      objectFit: "cover",
                    }}
                  />
                  {doctor.availability === "Available Today" && (
                    <Chip
                      label="Available Today"
                      size="small"
                      color="success"
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        fontWeight: 500,
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                  )}
                </Box>

                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
                    <Rating
                      value={doctor.averageRating || 0}
                      readOnly
                      precision={0.1}
                      size="small"
                      emptyIcon={
                        <StarIcon style={{ opacity: 0.3 }} fontSize="inherit" />
                      }
                    />
                    <Typography variant="body2" sx={{ ml: 1, fontWeight: 500 }}>
                      {doctor.averageRating || 0}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ ml: 1 }}
                    >
                      ({doctor.review.length || 0} reviews)
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        fontSize: "1.1rem",
                      }}
                    >
                      {doctor.name}
                    </Typography>
                    <VerifiedIcon
                      color="primary"
                      fontSize="small"
                      sx={{ ml: 1 }}
                    />
                  </Box>

                  <Chip
                    label={doctor.doctorSpecialties.length > 0 
                      ? doctor.doctorSpecialties[0]?.specialty?.name || "Specialist" 
                      : "Specialist"}
                    size="small"
                    sx={{
                      mb: 2,
                      fontWeight: 500,
                      backgroundColor: "rgba(25, 118, 210, 0.08)",
                    }}
                  />

                  <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                    <LocationOnIcon
                      fontSize="small"
                      color="action"
                      sx={{ fontSize: "1rem", mr: 1 }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {doctor.currentWorkingPlace}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <EventAvailableIcon
                      fontSize="small"
                      color="action"
                      sx={{ fontSize: "1rem", mr: 1 }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {doctor.experience} years experience
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 3,
                      borderRadius: "8px",
                      textTransform: "none",
                      py: 1.2,
                      fontWeight: 500,
                      boxShadow: "0 4px 12px rgba(25, 118, 210, 0.2)",
                    }}
                  >
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              display: { xs: "flex", sm: "none" },
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 500,
            }}
          >
            View All Doctors
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;