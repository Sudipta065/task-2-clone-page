import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export default function Maps() {
  const [viewport, setViewport] = useState({
    latitude: 23.81,
    longitude: 90.41,
    width: '100vw',
    height: '120vh',
    zoom: 11,
  });

  const accessToken =
    'pk.eyJ1Ijoic3VkaXB0YTA2NSIsImEiOiJja2NsemR4aDQxbGM0MnJzNTVobzZkN29nIn0.30CKjPytwhtJ0iL1F6SpMw';

  return (
    <div>
      <ReactMapGL
        mapboxApiAccessToken={accessToken}
        {...viewport}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {' '}
      </ReactMapGL>
    </div>
  );
}
