import * as React from "react";
import Box from "@mui/material/Box";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import PhoneInput from "react-phone-input-2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Formik, Field, ErrorMessage, Form, useFormik } from "formik";
import { TextField } from "formik-mui";
import * as Yup from "yup";
import phone from "google-libphonenumber";
import { Phone } from "@mui/icons-material";
import "react-phone-input-2/lib/material.css";

// const PhoneField = () => {
//   const [phone, setPhone] = React.useState("+91");

//   const handlePhoneChange = (newPhone) => {
//     matchIsValidTel(newPhone);
//     setPhone(newPhone); // boolean
//   };

//   return (
//     <MuiTelInput
//       value={phone}
//       onChange={handlePhoneChange}
//       flagSize="medium"
//       defaultCountry="India"
//       preferredCountries={["IN", "US", "GB"]}
//       fullWidth="true"
//     />
//   );
// };

const validationSchema = Yup.object({
  fullName: Yup.string()
    .max(100, "Must be 100 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  feedbackContent: Yup.string()
    .max(3000, "Must be 3000 characters or less")
    .required("Required"),
});

const FeedbackFormFormik = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        phone: "",
        feedbackContent: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <Field
            component={TextField}
            name="fullName"
            type="text"
            label="Full Name"
            fullWidth="true"
          />
          <br />
          <br />
          <Field
            component={TextField}
            name="email"
            type="email"
            label="Email"
            fullWidth="true"
          />
          <br />
          <br />
          <Field
            component={PhoneInput}
            name="phone"
            type="text"
            label="Phone"
            fullWidth="true"
            country={"in"}
            preferredCountries={["in", "us", "gb"]}
          />
          <br />
          <br />
          <Field
            component={TextField}
            name="feedbackContent"
            type="text"
            label="Feedback"
            multiline
            rows={8}
            maxRows={10}
            rowsMax={Infinity}
            fullWidth="true"
          />
          <br />
          <br />
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default FeedbackFormFormik;
