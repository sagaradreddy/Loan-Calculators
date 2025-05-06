import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

const EMICalculator = ({ onCalculate }) => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [term, setTerm] = useState("");

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate) / 12 / 100;
    const N = parseFloat(term) * 12;

    const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    onCalculate({ emi: EMI.toFixed(2), P, R, N });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <TextField label="Loan Amount" fullWidth value={principal} onChange={(e) => setPrincipal(e.target.value)} />
      </Grid>
      <Grid item xs={4}>
        <TextField label="Interest Rate (%)" fullWidth value={rate} onChange={(e) => setRate(e.target.value)} />
      </Grid>
      <Grid item xs={4}>
        <TextField label="Term (Years)" fullWidth value={term} onChange={(e) => setTerm(e.target.value)} />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={calculateEMI}>Calculate</Button>
      </Grid>
    </Grid>
  );
};

export default EMICalculator;
