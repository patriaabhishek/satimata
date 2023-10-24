import React from "react";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const data = [
  { station: "BHILWARA (BHL)", distance: "72" },
  { station: "KOTA JN (KOTA)", distance: "75" },
  { station: "INDARGARH (IDG)", distance: "97" },
];

function TrainsTable() {
  return (
    <TableContainer component={Paper} alignItems="center">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Station</TableCell>
            <TableCell align="center">Distance (kms)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.station}>
              <TableCell align="center">{row.station}</TableCell>
              <TableCell align="center">{row.distance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TrainsTable;
