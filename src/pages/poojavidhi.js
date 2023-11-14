import * as React from "react";
import { Typography } from "@mui/material";
import Layout from "../components/layout";
import { PoojaVidhiConfig } from "../config/poojavidhi";
import { PoojaConsiderations } from "../config/poojaconsiderations";
import { OrderedList, OrderedParagraphs } from "../components/TextComponents";

const PoojaVidhi = () => {
  return (
    <Layout pageTitle="Pooja Vidhi">
      <Typography gutterBottom variant="h4" component="div" align="center">
        Pooja Vidhi
      </Typography>
      <br />
      <Typography gutterBottom variant="h6" component="div" align="center">
        <u>Considerations</u>
      </Typography>
      <Typography variant="body">
        <OrderedParagraphs items={PoojaConsiderations.items} />
      </Typography>
      <Typography variant="body">
        As you step into the precincts of our temple, may your journey be guided
        by the profound spirituality and inclusive ethos that defines the
        worship of Satimata Ji. Following is the complete Poojan Vidhi for our
        Satimata Ji
      </Typography>
      <br />
      <br />
      <Typography gutterBottom variant="h6" component="div" align="center">
        <u>Poojan Vidhi</u>
      </Typography>
      <Typography variant="body">
        <OrderedList items={PoojaVidhiConfig.items} />
      </Typography>
    </Layout>
  );
};

export const Head = () => <title>Pooja Vidhi</title>;

export default PoojaVidhi;
