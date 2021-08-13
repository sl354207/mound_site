import { Container, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Form from "../components/Form";

const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: [
      // "Londrina Outline",
      "Jacques Francois Shadow",
      "cursive",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),

    justifyContent: "center",
    textDecoration: "underline",
    textDecorationThickness: "2px",
    textUnderlineOffset: "5px",
  },
}));

const contact = () => {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h1" className={classes.text}>
        Contact Us
      </Typography>
      <Form />
    </Container>
  );
};

export default contact;
