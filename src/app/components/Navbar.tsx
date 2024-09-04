// ButtonAppBar.tsx
"use client";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

export default function Navbar() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#EEEAE6",
          boxShadow: "none",
          margin: 0, // Lägg till detta om det inte redan finns
          padding: 0, // Lägg till detta om det inte redan finns
        }}
      >
        <Toolbar
          sx={{
            margin: 0, // Lägg till detta om det inte redan finns
            padding: 0, // Lägg till detta om det inte redan finns
          }}
        >
          <Box
            component="img"
            sx={{
              height: "auto",
              padding: "10px",
              flexGrow: 1,
            }}
          />

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Typography variant="h6" sx={{ color: "#000000" }}>
              MENU
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
