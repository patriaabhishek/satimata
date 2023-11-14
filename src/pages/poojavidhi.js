import * as React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import Layout from "../components/layout";
import { PoojaVidhiConfig } from "../config/poojavidhi";

const OrderedList = ({ items }) => {
  return (
    <List component="ol" sx={{ listStyle: "decimal", pl: 4 }}>
      {items.map((item, index) => (
        <ListItem key={index} sx={{ display: "list-item" }}>
          <ListItemText primary={item.parent} />
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
      <Typography variant="body">
        <OrderedList items={PoojaVidhiConfig.items} />
      </Typography>
    </Layout>
  );
};

export const Head = () => <title>Pooja Vidhi</title>;

export default PoojaVidhi;
