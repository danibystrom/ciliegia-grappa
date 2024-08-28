"use client";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function HeroBanner() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: "url(./assets/hero-banner.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: isMobile ? "20px" : "50px",
        color: "#000",
      }}
    >
      <Box
        component="img"
        src="./assets/logo.png"
        alt="Ciliegia Logo"
        sx={{
          width: isMobile
            ? "400px" 
            : isTablet
            ? "600px" 
            : isDesktop
            ? "800px" 
            : "800px", 
          height: "auto",
        }}
      />
      <Typography variant="subtitle1" sx={{ mt: 2 }}>
        SWEET TEMPTATION, CHERRY SENSATION
      </Typography>
      <Typography variant="body1" sx={{ mt: 5 }}>
        PUT SOME ICE IN IT
        <br />
        Lorem ipsum Lorem ipsum
        <br />
        Lorem ipsum Lorem ipsum
        <br />
        Lorem ipsum
      </Typography>
      <Button
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: "#000",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#333",
          },
        }}
      >
        SHOP CILIEGIA
      </Button>
    </Box>
  );
}
