import * as React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

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

const HistoryParagraph = ({ items }) => {
  return (
    <Card>
      <br />
      <Typography gutterBottom variant="h5" component="div" align="center">
        <u>{items.title}</u>
      </Typography>
      <CardContent>
        <Typography variant="body">{items.top}</Typography>
        <List component="ol" sx={{ listStyle: "decimal", pl: 4 }}>
          {items.middle.map((item, index) => (
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={item.title}
                secondary={item.content}
                align="justify"
              />
            </ListItem>
          ))}
        </List>
        <Typography variant="body">{items.bottom}</Typography>
      </CardContent>
    </Card>
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

export { OrderedParagraphs, OrderedList, HistoryParagraph };
