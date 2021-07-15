import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

const Form = () => {
  //   const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };

  return (
    <div>
      <form
        noValidate
        autoComplete="off"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <TextField
          id="name"
          label="name"
          variant="outlined"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          id="email"
          label="email"
          type="email"
          variant="outlined"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          id="message"
          label="message"
          variant="outlined"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        {/* <Button
          variant="contained"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </Button> */}
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

export default Form;
