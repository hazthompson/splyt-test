import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { centerInterface } from 'utils/interfaces';
import CurrentLocationMarker from 'components/CurrentLocationMarker';

function Map() {
  const [center, setCenter] = useState<centerInterface>({
    lat: 51.5049375,
    lng: -0.0964509,
  });
  const [zoom, setZoom] = useState<number>(15);

  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_BOOTSTRAPURLKEY! }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <CurrentLocationMarker
          lat={59.955413}
          lng={30.337844}
          text='My Marker'
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
