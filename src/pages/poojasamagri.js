import * as React from "react";
import Layout from "../components/layout";
import Typography from "@mui/material/Typography";
import PoojaSamagriTable from "../tables/PoojaSamagriTable";

const PoojaSamagri = () => {
  return (
    <Layout pageTitle="Pooja Samagri">
      <Typography gutterBottom variant="h4" component="div" align="center">
        Pooja Samagri
      </Typography>
      <Typography variant="body2">
        To conduct the Satimata Pooja with utmost reverence and adherence to
        tradition, it is essential to have the following items on hand. Prior to
        commencing the Pooja, kindly ensure that you possess the specified items
        in the appropriate quantities, thereby facilitating a sacred and
        auspicious ritual.
      </Typography>
      <br />
      <br />
      <PoojaSamagriTable />
    </Layout>
  );
};

export const Head = () => <title>Pooja Samagri</title>;

export default PoojaSamagri;
