import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";

import RoomIcon from "@material-ui/icons/Room";
import { Box, Paper, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
      fontSize: "3em",
    },
  },
  overlay: {
    backgroundColor: "rgba(199, 199, 199, 0.8)",
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
  text: {
    fontSize: "1em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.25em",
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  const [viewport, setViewport] = useState({
    longitude: -82.140565,
    latitude: 39.369474,
    zoom: 14,
  });

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <Box className={classes.hero}>
        <Grid container xs={12} sm={6}>
          <Paper className={classes.overlay}>
            <Typography className={classes.text}>The Plains</Typography>
            <Typography className={classes.text}>Mound Festival</Typography>
            <Typography className={classes.text}>October 8th, 2021</Typography>
          </Paper>
        </Grid>
      </Box>
      <ReactMapGL
        {...viewport}
        width="100vw"
        height="100vh"
        onViewportChange={setViewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={TOKEN}
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

      <Footer />
    </div>
  );
}
