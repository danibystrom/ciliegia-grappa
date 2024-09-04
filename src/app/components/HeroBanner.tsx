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
          bottom: isMobile ? "50dvh" : "15dvh",
          paddingLeft: isMobile ? "10px" : "50px",
          maxWidth: isMobile ? "90%" : "500px",
          backgroundColor: "transparent",
          paddingBottom: "50px",
          border: "none",
          boxhadow: "none",
        }}
      >
        <Typography variant="h2" sx={{ mb: 2 }}>
          PUT SOME ICE IN IT
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Unlock the magic with Ciliegia Cherry Grappa where every sip is a bold
          adventure. Crafted with passion and a touch of mischief, Ciliegia is
          not just a drink. It's a tantalizing journey for your taste buds.
          Perfectly chilled and unapologetically daring, Ciliegia is the
          ultimate indulgence for those who crave a touch of adventure with
          their sophistication.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          disableRipple
          sx={{ borderRadius: 0, width: "70%" }}
        >
          SHOP CILIEGIA
        </Button>
      </Box>
    </Box>
  );
}
