import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { Container, Typography, Box } from "@mui/material";
import EMICalculator from "./component/EMICalculator";
import AmortizationTable from "./component/AmortizationTable";
import CurrencyConverter from "./component/CurrencyConverter";

function Home() {
  const [emi, setEmi] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [currency, setCurrency] = useState("USD");

  const handleCalculate = ({ emi, P, R, N }) => {
    setEmi(emi);

    let balance = P;
    const data = [];

    for (let i = 1; i <= N; i++) {
      const interest = balance * R;
      const principal = emi - interest;
      balance -= principal;
      data.push({ month: i, interest, principal, balance });
    }

    setSchedule(data);
  };
  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
  };
  const handleReset = () => {
    setEmi(null);
    setSchedule([]);
    setCurrency("USD");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Loan Calculator Dashboard</Typography>
      <EMICalculator onCalculate={handleCalculate} />
      {emi && (
        <>
          <Typography variant="h6" sx={{ mt: 4 }}>Monthly EMI: ${emi}</Typography>
          <CurrencyConverter currency={currency} onCurrencyChange={handleCurrencyChange}  onReset={handleReset} />
          <AmortizationTable schedule={schedule} currency={currency} />
        </>
      )}
    </Container>
  );
}

export default Home;
