import React from "react";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function WikipediaLinkWithImage({ articleDetails }) {
  const wikipediaArticleURL = `https://en.wikipedia.org/wiki/${articleDetails.article}`;
  const wikipediaImageURL = articleDetails.imageurl;

  return (
    <Card variant="outlined">
      <Link href={wikipediaArticleURL}>
        <CardMedia component="img" height="140" image={wikipediaImageURL} />
        <Typography variant="body" align="center">
          <Link href={wikipediaArticleURL}>{articleDetails.article}</Link>
        </Typography>
      </Link>
    </Card>
  );
}

export default WikipediaLinkWithImage;
