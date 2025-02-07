import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const AddCredits = () => {
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");

  const handleUpdate = () => {
    console.log("Amount:", amount);
    console.log("Reason:", reason);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", p: 3, borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h6" gutterBottom>
        Add Credits
      </Typography>
      <TextField
        fullWidth
        label="Amount"
        variant="outlined"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Reason/Comments"
        variant="outlined"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleUpdate}>
        Update
      </Button>
    </Box>
  );
};

export default AddCredits;
