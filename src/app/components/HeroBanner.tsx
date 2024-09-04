"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

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
        justifyContent: "flex-start", // Ensures content starts from the top
        alignItems: "flex-start", // Align items to the left
        padding: isMobile ? "20px" : "50px",
        color: "#000",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row", // Align items in a row
          alignItems: "center", // Align items vertically centered
          gap: 2,
          flexWrap: "wrap",
          width: "100%", // Ensure it uses full width to align items properly
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
            padding: "10px",
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: isMobile ? "1rem" : "1.1rem",
            maxWidth: isMobile ? "150px" : "200px",
            lineHeight: 1.5,
            textAlign: "left", // Align text to the left
          }}
        >
          SWEET TEMPTATION, CHERRY SENSATION
        </Typography>
      </Box>
    </Box>
  );
}
