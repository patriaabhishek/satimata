import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import FeedbackForm from "../components/FeedbackForm";
import ContactInfoCard from "../components/ContactInfoCard";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <Grid container spacing={3}>
        <Grid item sm={6}>
          <Box>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <ContactInfoCard />
          </Box>
        </Grid>
        <Grid item sm={6}>
          <FeedbackForm />
        </Grid>
      </Grid>
    </Layout>
  );
};

export const Head = () => <title>Contact</title>;

export default Contact;
