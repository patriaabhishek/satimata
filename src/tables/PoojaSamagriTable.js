import React from "react";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const data = [
  { item: "Maave ki mithai", quantity: "1 kg" },
  { item: "Wheat grains", quantity: "2 kg" },
  { item: "Cow Ghee", quantity: "500 gm" },
  { item: "Chawal (Rice)", quantity: "250 gm" },
  { item: "Chawal (Rice) and Lapsi (Cooked)", quantity: "1 kg - 1kg" },
  { item: "Mehandi", quantity: "1 kg" },
  { item: "Patashe", quantity: "1 kg" },
  {
    item: "Panchamrut (Consists of milk, curd, ghee, honey, & sugar)",
    quantity: "1 cup",
  },
  { item: "Peele ki saari (Yellow saari) and chuda", quantity: "1 pair" },
  { item: "Saari and chuda", quantity: "5 pairs" },
  { item: "Phool mala", quantity: "11" },
  { item: "Gole (Inner intact core of dry coconut)", quantity: "9" },
  { item: "Nariyal (Dry coconut with water)", quantity: "5" },
  { item: "Diye", quantity: "11" },
  { item: "Diye ki batti (Cotton balls)", quantity: "11" },
  { item: "Maali Pana (Fine metal foil, NOT 'varak')", quantity: "9" },
  { item: "Itra Bottle", quantity: "1" },
  { item: "Sindoor", quantity: "1 packet" },
  { item: "Roli (Kumkum)", quantity: "1 packet" },
  { item: "Kaajal", quantity: "1 packet" },
  { item: "Laccha", quantity: "1 roll" },
  { item: "Bindi", quantity: "1 packet" },
  { item: "White cloth", quantity: "5 pieces (1 meter each )" },
  { item: "Red cloth", quantity: "1 meter" },
  { item: "Old Newspaper/ Tissue rolls", quantity: "For cleaning purpose" },
];

function PoojaSamagriTable() {
  return (
    <TableContainer component={Paper} alignItems="center">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <u>Item</u>
            </TableCell>
            <TableCell align="center">
              <u>Quantity</u>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.item}>
              <TableCell align="center">{row.item}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PoojaSamagriTable;
