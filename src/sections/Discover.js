import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Heading from "../Utils/Heading";
import bg from "../Utils/images/house.jpg";

const places = [
  {
    name: "Lonavla",
    dist: "66 kilometers away",
    img: "https://img.freepik.com/free-vector/nature-scene-rural-land-agriculture-grassland-abtract-silhouette-asian-farmers-working-rice-field-illustration_1150-37314.jpg",
    color: "#BC1A6E",
  },
  {
    name: "Calangute",
    dist: "396 kilometers away",
    img: "https://media.publit.io/file/Valley-day.png",
    color: "#D93B30",
  },
  {
    name: "Alibaug",
    dist: "36 kilometers away",
    img: "https://wallpaperaccess.com/full/669214.jpg",
    color: "#DE3151",
  },
  {
    name: "Karjat",
    dist: "53 kilometers away",
    img: "https://wallpaperaccess.com/full/4896.jpg",
    color: "#CC2D4A",
  },
];

const Discover = () => {
  return (
    <Container
      maxWidth='1380px'
      sx={{
        maxWidth: "1380px",
        mb: 13,
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Heading color='black'>Inspiration for your next trip</Heading>
      <Grid container spacing={5} sx={{ justifyContent: "center" }}>
        {places.map((place, i) => {
          return (
            <Grid key={i} item xs={10} sm={6} md={4} lg={3}>
              <Box
                sx={{
                  backgroundColor: place.color,
                  height: 400,
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <Box
                  component='img'
                  sx={{ objectFit: "cover", height: "50%", width: "100%" }}
                  src={place.img}
                />
                <Box sx={{ p: 2 }}>
                  <Typography
                    variant='h4'
                    sx={{ fontWeight: 500, color: "white" }}
                  >
                    {place.name}
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{ fontWeight: 400, color: "white" }}
                  >
                    {place.dist}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Discover;
