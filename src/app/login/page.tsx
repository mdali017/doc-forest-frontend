"use client";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Paper,
  FormControlLabel,
  Checkbox,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import logo from "@/assets/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useTheme } from "@mui/material/styles";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "#fafafa",
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
            p: { xs: 3, md: 4 },
            bgcolor: "background.paper",
            width: "100%",
            maxWidth: 500,
            mx: "auto",
            boxShadow: 20,
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                mb: 4,
              }}
            >
              <Box sx={{ mb: 1 }}>
                <Image src={logo} width={40} height={40} alt="logo" />
              </Box>
              <Typography
                variant="h4"
                component="h1"
                fontWeight={700}
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "1.75rem", md: "1.7rem" },
                }}
              >
                Welcome Back
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ textAlign: "center", mt: 1 }}
              >
                Log in to access your healthcare dashboard
              </Typography>
            </Box>
          </Box>

          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              size="small"
              margin="normal"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon fontSize="small" color="action" />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              size="small"
              margin="normal"
              required
              type={showPassword ? "text" : "password"}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon fontSize="small" color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePassword}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? (
                        <VisibilityOffOutlinedIcon fontSize="small" />
                      ) : (
                        <VisibilityOutlinedIcon fontSize="small" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 1,
                mb: 2,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    size="small"
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 20,
                        borderRadius: 1,
                      },
                    }}
                  />
                }
                label={<Typography variant="body2">Remember me</Typography>}
              />
              <Link
                href="/forgot-password"
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                Forgot password?
              </Link>
            </Box>

            <Button
              variant="contained"
              fullWidth
              disableElevation
              sx={{
                py: 1,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Sign In
            </Button>

            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Typography variant="body2">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  style={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Register here
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;
