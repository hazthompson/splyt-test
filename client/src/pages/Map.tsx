/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { centerInterface } from 'utils/interfaces';
import CurrentLocationMarker from 'components/CurrentLocationMarker';

interface MapProps {
  center: centerInterface;
}

function Map({ center }: MapProps) {
  const [zoom] = useState<number>(15);
  return (
    <div style={{ height: '100vh', width: '100%', opacity: 0.7 }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_BOOTSTRAPURLKEY! }}
        center={center}
        defaultZoom={zoom}
      >
        <CurrentLocationMarker
          lat={center.lat}
          lng={center.lng}
          text={'My Marker'}
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
