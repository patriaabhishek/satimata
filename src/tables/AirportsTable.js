import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const InternationalAirports = [
  { city: "Jaipur", name: "Jaipur International Airport", distance: 171 },
  { city: "Delhi", name: "Indira Gandhi International Airport", distance: 420 },
  {
    city: "Ahmedabad",
    name: "Sardar Vallabhbhai Patel International Airport",
    distance: 489,
  },
];

const DomesticAirports = [
  { city: "Kishangarh", name: "Kishangarh Airport", distance: 118 },
  { city: "Jaipur", name: "Jaipur International Airport", distance: 171 },
  { city: "Udaipur", name: "Maharana Pratap Airport", distance: 240 },
  { city: "Jodhpur", name: "Jodhpur Airport", distance: 312 },
];

const LocalAirports = [{ city: "Kota", name: "Kota Airport", distance: 101 }];

function AirTable({ data, title }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>City</TableCell>
            <TableCell>Airport Name</TableCell>
            <TableCell>Distance (kms)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.distance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function AirportsTable() {
  return (
    <div>
      <Typography gutterBottom variant="h6" component="div">
        International Airports
      </Typography>
      <AirTable data={InternationalAirports} />
      <br />
      <Typography gutterBottom variant="h6" component="div">
        Domestic Airports
      </Typography>
      <AirTable data={DomesticAirports} />
      <br />
      <Typography gutterBottom variant="h6" component="div">
        Local Airports
      </Typography>
      <AirTable data={LocalAirports} />
    </div>
  );
}

export default AirportsTable;
