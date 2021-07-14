import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";

import RoomIcon from "@material-ui/icons/Room";

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX;

export default function Home() {
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

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
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
