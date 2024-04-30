import * as React from "react";
import Layout from "../components/layout";
import Typography from "@mui/material/Typography";
import ImageCarouselHomepage from "../components/ImageCarouselHomepage";
import { Box } from "@mui/material";

const Index = () => {
  return (
    <Layout pageTitle="Index">
      <Typography gutterBottom variant="h4" component="div" align="center">
        Satimata of Patria-Didwania Samaj
      </Typography>
      <br/>
      <Typography gutterBottom variant="h7" component="div" align="center">
        Welcome to the pious digital abode of our Satimata.
      </Typography>
      <Box align="center">
        <ImageCarouselHomepage />
      </Box>
    </Layout>
  );
};

export const Head = () => <title>Satimata</title>;

export default Index;
