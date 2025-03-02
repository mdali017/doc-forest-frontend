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
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const validationSchema = z.object({
  email: z.string().email("Please Enter a valid email address"),
  password: z.string().min(6, "Must be at least 6 characters."),
});

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await userLogin(values);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/");
      } else {
        setError(res.message);
        console.log(res);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

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
                mb: 2,
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
            {error ? (
              <Typography
                sx={{
                  backgroundColor: "red",
                  padding: "5px",
                  borderRadius: "2px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                {error}
              </Typography>
            ) : (
              ""
            )}
          </Box>

          <Box>
            <PHForm
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              {/* <TextField
                fullWidth
                label="Email Address"
                type="email"
                variant="outlined"
                size="small"
                margin="normal"
                error={!!errors.email}
                helperText={errors.email?.message}
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
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
              /> */}
              <PHInput
                name="email"
                label="Email"
                type="email"
                required={true}
                size="small"
                fullWidth={true}
                icon={
                  <>
                    <EmailOutlinedIcon fontSize="small" color="action" />
                  </>
                }
              />
              <PHInput
                name="password"
                label="Password"
                type="password"
                required={true}
                size="small"
                fullWidth={true}
                icon={<LockOutlinedIcon fontSize="small" color="action" />}
              />

              {/* <TextField
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                variant="outlined"
                size="small"
                margin="normal"
                error={!!errors.password}
                helperText={errors.password?.message}
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
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              /> */}

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
                      // {...register("rememberMe")}
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
                type="submit"
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
            </PHForm>

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
