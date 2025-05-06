import React, { useEffect, useState } from "react";
import axios from "axios";
import { MenuItem, Box, Button, TextField } from "@mui/material";

const CurrencyConverter = ({ currency, onCurrencyChange, onReset }) => {
  const [rates, setRates] = useState({});
  console.log('rates', rates);

  useEffect(() => {
    const fetchRates = async () => {
      const res = await axios.get(`https://v6.exchangerate-api.com/v6/a8aa630728720e6168cf013b/latest/USD`);
      setRates(res.data.conversion_rates);
    };
    fetchRates();
  }, []);
;
const handleChange = (e) => {
  const selectedCurrency = e.target.value;
  onCurrencyChange(selectedCurrency);
};

return (
  <Box display="flex" alignItems="center" justifyContent="space-between" gap={2} sx={{ mt: 2 }}>
  <TextField
    select
    label="Currency"
    value={currency}
    onChange={handleChange}
    variant="outlined"
    sx={{ minWidth: 90 }}
  >
    {Object.keys(rates).slice(0, 20).map((cur) => (
      <MenuItem key={cur} value={cur}>
        {cur}
      </MenuItem>
    ))}
  </TextField>

  <Button variant="outlined" color="secondary" size="large" onClick={onReset}>
    Reset Table
  </Button>
</Box>
);
};

export default CurrencyConverter;
