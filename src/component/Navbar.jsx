import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Switch,
  useTheme,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeContext } from "../context/ThemeProviderCustom";
import { Link } from "react-router-dom";

function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "Exchange Rates (Live)", path: "/exchange" },
    { text: "About", path: "/about" },
    { text: "Error Page", path: "/404" }
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" noWrap>
          Loan Calculator
        </Typography>

        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                <List>
                  {navLinks.map((link) => (
                    <ListItem button key={link.text} component={Link} to={link.path}>
                      <ListItemText primary={link.text} />
                    </ListItem>
                  ))}
                  <ListItem>
                    <Switch onChange={toggleTheme} />
                    <Typography variant="body2">Dark Mode</Typography>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            {navLinks.map((link) => (
              <Button key={link.text} color="inherit" component={Link} to={link.path}>
                {link.text}
              </Button>
            ))}
            <Switch onChange={toggleTheme} />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
