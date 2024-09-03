"use client";

import { Box, Grid, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#000",
        color: "#fff",
        padding: "40px",
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // För att separera innehållet från copyright-texten
      }}
    >
      {/* Innehållscontainer som centreras */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexGrow: 1, // Tar upp tillgängligt utrymme för att centrera innehållet vertikalt
        }}
      >
        <Grid container spacing={4}>
          {/* Kolumn för Om Oss / Information */}
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

          {/* Kolumn för Produkter & Upplevelser */}
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

          {/* Kolumn för Kundservice & Kontakt */}
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

          {/* Kolumn för Logotyp */}
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
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Copyright längst ner */}
      <Box sx={{ textAlign: "center", padding: "20px 0" }}>
        <Typography variant="body2">
          © 2024 Ciliegia. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
