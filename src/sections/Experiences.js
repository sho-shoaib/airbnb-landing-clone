import { Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Heading from "../Utils/Heading";

const exp = [
  {
    head: "Things to do on your trip",
    btn: "experiences",
    bg: "https://images.unsplash.com/photo-1521171338749-b3a9f9ad7f34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    gapMd: 6,
    gapXs: 12,
  },
  {
    head: "Things to do on your own",
    btn: "Online experiences",
    bg: "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    gapMd: 6,
    gapXs: 12,
  },
];

const Experiences = () => {
  return (
    <Container
      maxWidth='1380px'
      sx={{
        maxWidth: "1380px",
        mb: 13,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Heading color='black'>Discover Airbnb Experiences</Heading>
        <Grid container spacing={3.5}>
          {exp.map((exp, i) => {
            return (
              <Grid item xs={exp.gapXs} md={exp.gapMd} sx={{}}>
                <Box
                  sx={{
                    height: { xs: 300, md: 600 },
                    borderRadius: 3,
                    backgroundImage: `linear-gradient(150deg,rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(${exp.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    p: { xs: 4, sm: 7, md: 10 },
                    pr: "40%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    alignItems: "flex-start",
                  }}
                >
                  <Heading>{exp.head}</Heading>
                  <Button
                    variant='contained'
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
                      paddingBlock: 1.3,
                      paddingInline: 2.5,
                    }}
                  >
                    {exp.btn}
                  </Button>
                </Box>
              </Grid>
            );
          })}
          <Grid item xs={12}>
            <Box
              sx={{
                borderRadius: { sm: 1, md: 5 },
                height: 600,
                backgroundImage: `linear-gradient(150deg,rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1499570601852-5a2e27e88854?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                p: { xs: 4, sm: 7, md: 10 },
                pr: "40%",
                display: "flex",
                flexDirection: "column",
                gap: 3,
                alignItems: "flex-start",
              }}
            >
              <Heading>Questions about hosting</Heading>
              <Button
                variant='contained'
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
                  paddingBlock: 1.3,
                  paddingInline: 2.5,
                }}
              >
                Ask a superhost
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Experiences;
