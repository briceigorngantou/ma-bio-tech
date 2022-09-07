import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import GoogleMapReact from "google-map-react";
import PinDropIcon from "@mui/icons-material/PinDrop";
import { useTheme } from "@mui/material/styles";

function createMapOptions(maps) {
  return {
    zoomControlOptions: {
      position: maps.ControlPosition.RIGHT_CENTER,
      style: maps.ZoomControlStyle.SMALL,
    },
    mapTypeControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT,
    },
    mapTypeControl: true,
  };
}

function GoogleMap() {
  const theme = useTheme();
  const [center, setcenter] = useState({ lat: 43.8339895, lng: 4.355649 });
  const [zoom, setzoom] = useState(11);

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  return (
    <Container sx={{ height: "50vh", width: { xs: "100%", md: "50%" } }}>
      <GoogleMapReact
        // bootstrapURLKeys={{
        //   key: "AIzaSyACKGvYt9E1hEHcW2moGh0wBjPLC_egU84",
        // }}
        // defaultCenter={center}
        // defaultZoom={zoom}
        // options={createMapOptions}
        hoverDistance={40 / 2}
        // yesIWantToUseGoogleMapApiInternals
        // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <Grid lat={center.lat} lng={center.lng}>
          <PinDropIcon
            sx={{ color: theme.palette.primary.main, fontSize: 24 }}
          />
        </Grid>
      </GoogleMapReact>
    </Container>
  );
}

export default GoogleMap;
