import {
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  footer: {
    // position: "absolute",
    // bottom: 0,
    // width: "100%",
    flexGrow: 1,
    marginTop: "calc(5% + 30px)",
    height: 60,
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
    // justifyContent: "center",
    // alignItems: "center",
  },
  divider: {
    // marginBottom: 18,
  },
  icons: {
    padding: 1,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  appbar: {
    flexGrow: 1,
    justifyContent: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Divider className={classes.divider} variant="middle"></Divider>
        <AppBar position="relative" component="div" elevation={0}>
          <Toolbar className={classes.appbar}>
            <Typography align="center">
              Copyright 2021 The Plains Mound Festival. Visit us on
            </Typography>
            <IconButton
              disableRipple={true}
              disableFocusRipple={true}
              className={classes.icons}
            >
              <FacebookIcon className={classes.icons} />
            </IconButton>

            <IconButton
              disableRipple={true}
              disableFocusRipple={true}
              className={classes.icons}
            >
              <InstagramIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Made with <img src="/netliheart.svg" alt="Netlify Logo" /> for you */}
      </footer>
    </>
  );
}
