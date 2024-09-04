"use client";

import {
  Box,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function Footer() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#000",
        color: "#fff",
        padding: "40px",
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              ABOUT US
            </Typography>
            <Link href="#" underline="hover" color="inherit">
              Our Story
            </Link>
            <br />
            <Link href="#" underline="hover" color="inherit">
              Sustainability
            </Link>
            <br />
            <Link href="#" underline="hover" color="inherit">
              Blog
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              EXPLORE
            </Typography>
            <Link href="#" underline="hover" color="inherit">
              Our Products
            </Link>
            <br />
            <Link href="#" underline="hover" color="inherit">
              Cocktail Recipes
            </Link>
            <br />
            <Link href="#" underline="hover" color="inherit">
              Pairing Guide
            </Link>
            <br />
            <Link href="#" underline="hover" color="inherit">
              Events
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              CUSTOMER SERVICE
            </Typography>
            <Link href="#" underline="hover" color="inherit">
              Contact Us
            </Link>
            <br />
            <Link href="#" underline="hover" color="inherit">
              FAQ
            </Link>
            <br />
            <Link href="#" underline="hover" color="inherit">
              Shipping & Returns
            </Link>
            <br />
            <Link href="#" underline="hover" color="inherit">
              Privacy Policy
            </Link>
            <br />
            <Link href="#" underline="hover" color="inherit">
              Terms & Conditions
            </Link>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "center" },
            }}
          >
            <Box
              component="img"
              src="./assets/logo-white.png"
              alt="Ciliegia Logo"
              sx={{
                width: 250,
                height: "auto",
                margin: isMobile ? "50px" : "0px",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ padding: isMobile ? "0px" : "50px" }}>
          © 2024 Ciliegia. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
