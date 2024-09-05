"use client";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import ContactForm from "./ContactForm";

export default function Navbar() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#EEEAE6",
          boxShadow: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <Toolbar
          sx={{
            margin: 0,
            padding: 0,
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

          <Button
            size="large"
            onClick={handleOpen}
            disableRipple
            sx={{
              fontSize: isMobile ? "0.8rem" : "1rem",
              color: "#C1121F",
              whiteSpace: "nowrap",
              "&:hover": {
                backgroundColor: "transparent",
                fontWeight: 600,
                boxShadow: "none",
              },
            }}
          >
            CONTACT ME
          </Button>
        </Toolbar>
      </AppBar>

      <ContactForm open={open} handleClose={handleClose} />
    </Box>
  );
}
