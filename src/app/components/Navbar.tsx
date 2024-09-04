// ButtonAppBar.tsx
"use client";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { useMediaQuery, useTheme } from "@mui/material";
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

          <IconButton
            size="large"
            edge="end"
            aria-label="menu"
            sx={{
              mr: 2,
              color: "#000000", // Ensure IconButton does not override icon color
              "&:hover": {
                boxShadow: "none",
                backgroundColor: "transparent",
              },
            }}
          >
            <DragHandleIcon
              sx={{
                color: "#000000", // Ensure the color is explicitly set
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
