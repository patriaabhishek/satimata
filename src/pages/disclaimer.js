import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Layout from "../components/layout";
import { DisclaimerConfig } from "../config/disclaimer";

const Disclaimer = () => {
  return (
    <>
      <Layout pageTitle="Disclaimer">
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Please read the disclaimer
            </Typography>
            <Typography variant="body1">
              {DisclaimerConfig.content.map((item) => (
                <div>
                  <br />
                  {item}
                </div>
              ))}
            </Typography>
          </CardContent>
        </Card>
      </Layout>
    </>
  );
};

export const Head = () => <title>Disclaimer</title>;

export default Disclaimer;
