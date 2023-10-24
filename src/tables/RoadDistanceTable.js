import React from "react";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const data = [
  { city: "Bhilwara", distance: 72 },
  { city: "Kota", distance: 74 },
  { city: "Ajmer", distance: 113 },
  { city: "Jaipur", distance: 189 },
  { city: "Delhi", distance: 438 },
  { city: "Mumbai", distance: 1000 },
];

function RoadDistanceTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">Distance (kms)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.city}>
              <TableCell align="center">{row.city}</TableCell>
              <TableCell align="center">{row.distance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RoadDistanceTable;
