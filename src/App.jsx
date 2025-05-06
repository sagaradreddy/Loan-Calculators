import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Box } from "@mui/material";
import Navbar from "./component/Navbar"
import AboutPage from "./pages/AboutPage"
import ErrorPage from "./pages/ErrorPage"
import Home from "./Home";

function App() {

  return (
    <Box sx={{
      bgcolor: "background.default",
      color: "text.primary",
      minHeight: "100vh",
      pb: 4,
    }}>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Box>
  );
}

export default App;
