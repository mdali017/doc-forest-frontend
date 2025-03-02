import { InputAdornment, TextField, IconButton, SxProps } from "@mui/material";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth: boolean;
  icon?: React.ReactNode;
  rows?: number;
  multiline?: boolean;
  sx?: SxProps;
  required?: boolean;
};

const PHInput = ({
  name,
  fullWidth,
  label,
  type = "text",
  size = "small",
  icon,
  rows,
  multiline = false,
  required = false,
  sx,
}: TInputProps) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Determine the actual input type for password fields
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: {error} }) => (
          <TextField
            {...field}
            fullWidth={fullWidth}
            label={label}
            type={inputType}
            placeholder={label}
            // required={required}
            variant="outlined"
            size={size}
            margin="normal"
            multiline={multiline}
            rows={rows}
            error={!!error}
            helperText={error?.message}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
              ...sx
            }}
            InputProps={{
              startAdornment: icon ? (
                <InputAdornment
                  position={multiline ? "start" : "start"}
                  sx={multiline ? { alignSelf: "flex-start", mt: 1 } : {}}
                >
                  {icon}
                </InputAdornment>
              ) : null,
              endAdornment:
                type === "password" ? (
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
                ) : null,
            }}
          />
        )}
      />
    </>
  );
};

export default PHInput;