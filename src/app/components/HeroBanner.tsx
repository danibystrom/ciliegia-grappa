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
        height: "100dvh",
        backgroundImage: isMobile
          ? "url(./assets/hero-banner-mobile.jpg)"
          : "url(./assets/hero-banner.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingLeft: isMobile ? "20px" : "50px",
        color: "#000",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <Box
          component="img"
          src="./assets/logo.png"
          alt="Ciliegia Logo"
          sx={{
            width: isMobile
              ? "300px"
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
            textAlign: "left",
            display: isMobile ? "none" : "block",
          }}
        >
          SWEET TEMPTATION, CHERRY SENSATION
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: isMobile ? "55vh" : "15vh",
          paddingLeft: isMobile ? "10px" : "50px",

          backgroundColor: "transparent",
          paddingBottom: "50px",
          border: "none",
          boxhadow: "none",
        }}
      >
        <Typography variant="h6" sx={{ mb: 1 }}>
          Title Here
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          This is the body text of the box. You can include more information
          here.
        </Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </Box>
    </Box>
  );
}
