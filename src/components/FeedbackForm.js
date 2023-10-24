import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const PhoneField = () => {
  const [phone, setPhone] = React.useState("+91");

  const handlePhoneChange = (newPhone) => {
    matchIsValidTel(newPhone);
    setPhone(newPhone); // boolean
  };

  return (
    <MuiTelInput
      value={phone}
      onChange={handlePhoneChange}
      flagSize="medium"
      defaultCountry="India"
      preferredCountries={["IN", "US", "GB"]}
    />
  );
};

export default function FeedbackForm() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          marginTop: 1,
          marginBottom: 1,
          width: "100%",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5" gutterBottom>
        Your Feedback Matters!
      </Typography>
      <Typography variant="body" gutterBottom>
        Thank you for taking the time to provide feedback. Your insights help us
        improve this website. Please fill out the following form to share your
        thoughts.
      </Typography>
      <br />
      <TextField required id="outlined-required" label="Name" defaultValue="" />
      <br />
      <PhoneField />
      <br />
      <TextField
        required
        id="outline-required"
        placeholder="Feedback"
        multiline
        rows={8}
        maxRows={10}
        rowsMax={Infinity}
      />
      <Button variant="contained" endIcon={<SendIcon />}>
        Submit
      </Button>
    </Box>
  );
}
