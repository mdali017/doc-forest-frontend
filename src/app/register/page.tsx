"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Divider,
  Paper,
  FormControlLabel,
  Checkbox,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import logo from "@/assets/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useTheme } from "@mui/material/styles";
import { FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const patientValidationSchema = z.object({
  name: z.string().min(1, "Please Enter Your Name."),
  email: z.string().email("Please Enter a Valid Email Address."),
  contactNumber: z
    .string()
    .regex(/^\d{11}$/, "Please provide a valid phone number."),
  address: z.string().min(1, "Plase enter your address."),
});

export const validationSchema = z.object({
  password: z.string().min(6, "Must be at least 6 characters"),
  patient: patientValidationSchema,
});

export const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};

const RegisterPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
      const res = await registerPatient(data);
      if (res?.data?.id) {
        toast.success(res.message);
        const result = await userLogin({
          password: values.password,
          email: values?.patient?.email,
        });
        if (result?.data?.accessToken) {
          router.push("/");
          storeUserInfo({ accessToken: result?.data?.accessToken });
        }
      }
    } catch (error: any) {
      console.error(error.message);
    }
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
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
            p: { xs: 3, md: 4 },
            bgcolor: "background.paper",
            width: "100%",
            maxWidth: 800,
            mx: "auto",
            boxShadow: 20,
          }}
        >
          <PHForm
            onSubmit={handleRegister}
            resolver={zodResolver(validationSchema)}
            defaultValues={defaultValues}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  mb: 3,
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
                  Patient Create
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ textAlign: "center", mt: 1 }}
                >
                  Join our healthcare platform to manage your appointments and
                  medical records
                </Typography>
              </Box>
            </Box>
            <Grid container spacing={isMobile ? 0 : 6}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Account Information
                  </Typography>

                  <PHInput
                    name="patient.name"
                    label="Full Name"
                    type="text"
                    // required={true}
                    size="small"
                    fullWidth={true}
                    icon={
                      <PersonOutlineOutlinedIcon
                        fontSize="small"
                        color="action"
                      />
                    }
                  />

                  <PHInput
                    name="patient.email"
                    label="Email Address"
                    type="email"
                    // required={true}
                    size="small"
                    fullWidth={true}
                    icon={<EmailOutlinedIcon fontSize="small" color="action" />}
                  />

                  <PHInput
                    name="password"
                    label="Password"
                    type="password"
                    // required={true}
                    size="small"
                    fullWidth={true}
                    icon={<LockOutlinedIcon fontSize="small" color="action" />}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                {isMobile && (
                  <Divider>
                    <Typography variant="body2" color="text.secondary">
                      Contact Details
                    </Typography>
                  </Divider>
                )}

                {!isMobile && (
                  <Typography variant="subtitle1" fontWeight={600}>
                    Contact Details
                  </Typography>
                )}

                <PHInput
                  name="patient.contactNumber"
                  label="Phone Number"
                  type="text"
                  // required={true}
                  size="small"
                  fullWidth={true}
                  icon={
                    <LocalPhoneOutlinedIcon fontSize="small" color="action" />
                  }
                />

                <PHInput
                  name="patient.address"
                  label="Address"
                  type="text"
                  size="small"
                  // required={true}
                  fullWidth={true}
                  multiline={true}
                  rows={3}
                  icon={<HomeOutlinedIcon fontSize="small" color="action" />}
                />
              </Grid>
            </Grid>

            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 20,
                        borderRadius: 1,
                      },
                    }}
                  />
                }
                label={
                  <Typography variant="body2">
                    I agree to the{" "}
                    <Link
                      href="#"
                      style={{
                        color: theme.palette.primary.main,
                        textDecoration: "none",
                      }}
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="#"
                      style={{
                        color: theme.palette.primary.main,
                        textDecoration: "none",
                      }}
                    >
                      Privacy Policy
                    </Link>
                  </Typography>
                }
              />
            </Box>

            <Button
              variant="contained"
              fullWidth
              disableElevation
              type="submit"
              sx={{
                py: 1,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              Create Patient
            </Button>
          </PHForm>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography variant="body2">
              Already have an account?{" "}
              <Link
                href="/login"
                style={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Sign in here
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default RegisterPage;
