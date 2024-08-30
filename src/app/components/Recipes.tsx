"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { recipes } from "../data/data";

export default function Recipes() {
  return (
    <Box
      sx={{
        backgroundColor: "#EEEAE6",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: "100%" }}>
        {recipes.map((recipe) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={recipe.id}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 280,
                maxWidth: "100%",
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  boxShadow: "none",
                  backgroundColor: "transparent",
                }}
              >
                <CardMedia
                  component="img"
                  image={recipe.url}
                  alt={recipe.title}
                  sx={{
                    height: "400px",
                    objectFit: "cover",
                    objectPosition: "center",
                    backgroundColor: "#EEEAE6",
                  }}
                />
                <CardContent
                  sx={{
                    backgroundColor: "#EEEAE6",
                    padding: "16px",
                    height: "150px", // Sätt en fast höjd
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start", // Placera texten i toppen
                    "&:last-child": { paddingBottom: "16px" },
                  }}
                >
                  <Typography variant="h6">{recipe.title}</Typography>
                  <Typography variant="body2" sx={{ marginTop: 2 }}>
                    {recipe.description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "auto", // Placera knapparna längst ner
                    padding: "8px 16px",
                  }}
                >
                  <Button
                    size="large"
                    sx={{
                      color: "#C1121F",
                      margin: "50px",
                      "&:hover": {
                        backgroundColor: "transparent",
                        fontWeight: 600,
                        boxShadow: "none",
                      },
                    }}
                  >
                    SHOW ME
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
