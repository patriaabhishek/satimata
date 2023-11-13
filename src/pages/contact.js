import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Layout from "../components/layout";
import FeedbackForm from "../components/FeedbackForm";

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <Box>
        <Typography variant="h5" gutterBottom>
          Your Feedback Matters!
        </Typography>
        <Typography variant="body" gutterBottom>
          Thank you for taking the time to provide feedback. Your insights help
          us improve this website. Please fill out the following form to share
          your thoughts.
        </Typography>
        <br />
        <br />
        <FeedbackForm />
      </Box>
    </Layout>
  );
};

export const Head = () => <title>Contact</title>;

export default Contact;
