import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TrainsTable from "../tables/TrainsTable";
import RoadDistanceTable from "../tables/RoadDistanceTable";
import AirportsTable from "../tables/AirportsTable";
import Layout from "../components/layout";

// "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115123.85811039567!2d75.20243763906248!3d25.61752170000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f2102eee91549%3A0xe212a5fa0c2632e1!2sPatriya%20(Didwaniya)%20Samaj%20Sati%20Mataji%20Mandir!5e0!3m2!1sen!2sus!4v1696560529085!5m2!1sen!2sus"

const GoogleMap = ({ mapSrc }) => {
  return (
    <Box>
      <iframe
        title="jahazpur_map"
        src={mapSrc}
        width="100%"
        height="400"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </Box>
  );
};

const MapCard = ({ mapUrl }) => {
  return (
    <Card>
      <Typography gutterBottom variant="h4" component="div" align="center">
        How to Reach
      </Typography>

      <GoogleMap mapSrc={mapUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          By Road
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Jahazpur is well connected by road. The nearest cities to the temple
          are Deoli and Bhilwara which have state transport and private buses
          running throughout the day. Bus connectivity during night is a bit
          sketchy. Details of the bus timings can be found on the RSRTC website.
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          There are some preferred taxi operators whose details with telephone
          numbers can be found on the contact page.
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          Distances from the major cities are as follows:
        </Typography>
        <RoadDistanceTable />
        <br />
        <Typography gutterBottom variant="h5" component="div">
          By Train
        </Typography>
        <Typography variant="body2" color="text.secondary">
          There is no direct train to Jahazpur but nearby cities are well
          connected by trains. The nearest railway stations to Jahazpur are
          Bhilwara, Kota and Indargarh. Here is a quick summary about the
          railway stations and respective distances. For more information,
          please refer Indian Railways website.
        </Typography>
        <br />
        <TrainsTable />
        <br />
        <Typography gutterBottom variant="h5" component="div">
          By Air
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Jahazpur doesn't have a dedicated airport. The nearest airports are at
          Jaipur, Udaipur, Delhi and Ahmedabad. Here is a quick summary about
          the airports and respective distances. For flight schedules, please
          check with the airlines.
        </Typography>
        <br />
        <AirportsTable />
      </CardContent>
    </Card>
  );
};

const HowToReach = () => {
  return (
    <Layout pageTitle="How to Reach">
      <MapCard mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115123.85811039567!2d75.20243763906248!3d25.61752170000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f2102eee91549%3A0xe212a5fa0c2632e1!2sPatriya%20(Didwaniya)%20Samaj%20Sati%20Mataji%20Mandir!5e0!3m2!1sen!2sus!4v1696560529085!5m2!1sen!2sus" />
    </Layout>
  );
};

export const Head = () => <title>How to Reach</title>;

export default HowToReach;
