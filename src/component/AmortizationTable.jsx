import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Paper,Box,Typography } from "@mui/material";

const AmortizationTable = ({ schedule, currency }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Amortization Schedule ({currency})
      </Typography>
      <Box sx={{ maxHeight:300, overflowX: "auto" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell>Principal</TableCell>
            <TableCell>Interest</TableCell>
            <TableCell>Remaining Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.month}</TableCell>
              <TableCell>{row.principal.toFixed(2)} {currency}</TableCell>
              <TableCell>{row.interest.toFixed(2)} {currency}</TableCell>
              <TableCell>{row.balance.toFixed(2)} {currency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Box>
    </Paper>  
  );
};

export default AmortizationTable;
