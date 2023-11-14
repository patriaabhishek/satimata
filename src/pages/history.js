import * as React from "react";
import Layout from "../components/layout";
import WikipediaLinkWithImage from "../components/WikipediaLinkWithImage";
import { HistoryParagraph } from "../components/TextComponents";
import { HistorySatimataConfig } from "../config/historysatimata";
import { HistoryJahazpurConfig } from "../config/historyjahazpur";
import { HistoryPatriaConfig } from "../config/historypatria";

const articleDetails = {
  article: "Jahazpur",
  imageurl:
    "https://lh3.googleusercontent.com/p/AF1QipOM97K3N3y6BYKfnVN_covx4Av2ud8Li-dkdFPr=s1360-w1360-h1020",
};

const History = () => {
  return (
    <Layout pageTitle="History">
      <HistoryParagraph items={HistorySatimataConfig.items} />
      <br />
      <HistoryParagraph items={HistoryPatriaConfig.items} />
      <br />
      <HistoryParagraph items={HistoryJahazpurConfig.items} />
      <br />
      <WikipediaLinkWithImage articleDetails={articleDetails} />
    </Layout>
  );
};

export const Head = () => <title>History</title>;

export default History;
