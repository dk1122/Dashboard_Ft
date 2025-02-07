import React, { useState } from "react";
import { TextField, Button, IconButton, InputAdornment, Box, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Password = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleReset = () => {
    if (newPassword === confirmPassword && newPassword.length >= 8) {
      console.log("Password reset successful");
    } else {
      console.log("Passwords do not match or do not meet the criteria.");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", p: 3, borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h6" gutterBottom>
        Reset Password
      </Typography>
      <TextField
        fullWidth
        label="New Password"
        variant="outlined"
        type={showPassword ? "text" : "password"}
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        helperText="Min. 8 characters"
        sx={{ mb: 2 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        label="Confirm Password"
        variant="outlined"
        type={showPassword ? "text" : "password"}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        helperText="Min. 8 characters"
        sx={{ mb: 2 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleReset}>
        Reset
      </Button>
    </Box>
  );
};

export default Password;