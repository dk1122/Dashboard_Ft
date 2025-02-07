import React, { useState } from "react";
import { TextField, Button, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const Subscription = () => {
  const [prices, setPrices] = useState({
    Starter: { Monthly: "2499", Yearly: "2199" },
    Growth: { Monthly: "2499", Yearly: "2199" },
    Premium: { Monthly: "2499", Yearly: "2199" },
  });

  const handleChange = (plan, type, value) => {
    setPrices((prev) => ({
      ...prev,
      [plan]: { ...prev[plan], [type]: value },
    }));
  };

  const handleReset = () => {
    setPrices({
      Starter: { Monthly: "2499", Yearly: "2199" },
      Growth: { Monthly: "2499", Yearly: "2199" },
      Premium: { Monthly: "2499", Yearly: "2199" },
    });
  };

  const handleUpdate = () => {
    console.log("Updated Prices:", prices);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Subscription
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Plan Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Monthly</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Yearly</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(prices).map(([plan, pricing]) => (
              <TableRow key={plan}>
                <TableCell>{plan}</TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    variant="outlined"
                    size="small"
                    value={pricing.Monthly}
                    onChange={(e) => handleChange(plan, "Monthly", e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    variant="outlined"
                    size="small"
                    value={pricing.Yearly}
                    onChange={(e) => handleChange(plan, "Yearly", e.target.value)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button variant="outlined" color="primary" onClick={handleReset}>
          Reset Price
        </Button>
        <Button variant="contained" color="primary" onClick={handleUpdate}>
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default Subscription;
