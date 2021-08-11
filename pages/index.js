import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";

import RoomIcon from "@material-ui/icons/Room";
import {
  Box,
  Paper,
  Typography,
  Grid,
  useMediaQuery,
  Divider,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX;

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",

    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "4em",
    },
  },
  overlay: {
    backgroundColor: "rgba(250, 250, 250, 0.8)",
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 460,
    margin: 20,

    [theme.breakpoints.down("sm")]: {
      height: 260,
      fontSize: "3em",
    },
  },
  //   font-family: 'Bungee Shade', cursive; maybe
  // font-family: 'Ewert', cursive; maybe
  // font-family: 'Fredericka the Great', cursive; maybe
  // font-family: 'Geostar', cursive; no
  // font-family: 'Jacques Francois Shadow', cursive; yes
  // font-family: 'Kumar One Outline', cursive; no
  // font-family: 'Miltonian', cursive; no
  // font-family: 'Ribeye Marrow', cursive; maybe
  // font-family: 'Tourney', cursive; maybe
  text: {
    fontSize: "1em",
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.25em",
    },
    justifyContent: "center",
  },
  words: {
    margin: 20,
  },
  map: {
    margin: "30px 5px 5px 20px",
    border: "solid",
    // backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Home() {
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [viewport, setViewport] = useState({
    longitude: -82.140565,
    latitude: 39.369474,
    zoom: 14,
  });

  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <Box className={classes.hero}>
        <Grid container item xs={12} md={6}>
          <Paper className={classes.overlay}>
            <Typography className={classes.text} align="center">
              The Plains
            </Typography>
            <Typography className={classes.text} align="center">
              Mound Festival
            </Typography>
            <Typography className={classes.text} align="center">
              October 8th, 2021
            </Typography>
          </Paper>
        </Grid>
      </Box>
      <Grid container={true}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.words}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
            nunc lacus, quis aliquam tortor efficitur id. Quisque nulla sem,
            commodo eu fermentum ut, pretium vitae est. Donec et nisi at ante
            molestie vulputate. Donec mattis tempus quam, eu viverra est
            suscipit accumsan. Mauris quis mi vel ipsum vehicula scelerisque
            vehicula in metus. Mauris rhoncus felis lectus, a posuere magna
            ultrices at. Etiam feugiat magna eget sollicitudin porta. Fusce
            nulla neque, maximus vel accumsan sed, euismod sit amet tellus. Nam
            vitae sagittis nunc. Etiam molestie risus vel augue iaculis
            venenatis. Curabitur imperdiet, nisi in sagittis posuere, mauris
            quam dignissim libero, nec varius augue lorem at lacus. Nulla et
            finibus velit. In urna justo, pharetra at orci id, laoreet sodales
            lacus. Nunc semper lectus et odio fermentum semper. Integer
            malesuada velit vitae tellus auctor vulputate. Quisque accumsan arcu
            id magna vestibulum convallis vitae lobortis arcu.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          {isMobile ? (
            <ReactMapGL
              {...viewport}
              width="90vw"
              height="460px"
              onViewportChange={setViewport}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              mapboxApiAccessToken={TOKEN}
              className={classes.map}
            >
              <Marker
                latitude={39.369474}
                longitude={-82.140565}
                offsetLeft={-20}
                offsetTop={-10}
              >
                <RoomIcon fontSize="large" />
              </Marker>
            </ReactMapGL>
          ) : (
            <ReactMapGL
              {...viewport}
              width="47vw"
              height="460px"
              onViewportChange={setViewport}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              mapboxApiAccessToken={TOKEN}
              className={classes.map}
            >
              <Marker
                latitude={39.369474}
                longitude={-82.140565}
                offsetLeft={-20}
                offsetTop={-10}
              >
                <RoomIcon fontSize="large" />
              </Marker>
            </ReactMapGL>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
