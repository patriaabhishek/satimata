import * as React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import Layout from "../components/layout";
import { PoojaVidhiConfig } from "../config/poojavidhi";
import { PoojaConsiderations } from "../config/poojaconsiderations";

const OrderedParagraphs = ({ items }) => {
  return (
    <List component="ol" sx={{ listStyle: "decimal", pl: 4 }}>
      {items.map((item, index) => (
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText
            primary={item.title}
            secondary={item.content}
            align="justify"
          />
        </ListItem>
      ))}
    </List>
  );
};

const OrderedList = ({ items }) => {
  return (
    <List component="ol" sx={{ listStyle: "decimal", pl: 4 }}>
      {items.map((item, index) => (
        <ListItem key={index} sx={{ display: "list-item" }}>
          <ListItemText primary={item.parent} align="justify" />
          {item.children && item.children.length > 0 && (
            <OrderedList items={item.children} />
          )}
        </ListItem>
      ))}
    </List>
  );
};

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
