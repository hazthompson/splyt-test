/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { centerInterface, taxiLocationsInterface } from 'utils/interfaces';
import CurrentLocationMarker from 'components/CurrentLocationMarker/CurrentLocationMarker';
import TaxiMarker from 'components/TaxiMarker/TaxiMarker';

interface MapProps {
  center: centerInterface;
  currentLocation: string;
  taxiLocations: taxiLocationsInterface;
}

function Map({ center, currentLocation, taxiLocations }: MapProps) {
  const [zoom] = useState<number>(15);
  return (
    <div
      style={{ height: '75vh', width: '100%', opacity: 0.85 }}
      data-testid='google-map-react'
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_BOOTSTRAPURLKEY! }}
        center={center}
        defaultZoom={zoom}
      >
        <CurrentLocationMarker
          lat={center.lat}
          lng={center.lng}
          currentLocation={currentLocation}
        />
        {taxiLocations.drivers.length &&
          taxiLocations.drivers.map((car) => (
            <TaxiMarker
              key={car.driver_id}
              lat={car.location.latitude}
              lng={car.location.longitude}
              currentLocation={currentLocation}
            />
          ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
