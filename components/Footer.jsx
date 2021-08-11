import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    // position: "absolute",
    // bottom: 0,
    // width: "100%",
    marginTop: "calc(5% + 60px)",
    bottom: 0,
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        {/* Made with <img src="/netliheart.svg" alt="Netlify Logo" /> for you */}
        test
      </footer>
    </>
  );
}
