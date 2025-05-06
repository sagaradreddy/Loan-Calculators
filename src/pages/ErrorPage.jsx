import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
      Something went wrong in the application.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="outlined"
        color="primary"
        sx={{ mt: 2 }}
      >
        Go Home
      </Button>
    </Box>
  );
}

export default ErrorPage;
