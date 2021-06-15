/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useEffect, useState } from 'react';
import GlobalStyles from 'assets/GlobalStyles';
import './App.css';
import Map from 'pages/Map';
import { centerInterface, taxiLocationsInterface } from 'utils/interfaces';

const buttonStyling = css`
  color: ${GlobalStyles.ghostWhite};
  cursor: pointer;
  background-color: ${GlobalStyles.royalBlue};
  border-radius: ${GlobalStyles.borderRadius};
  border: none;
  height: 35px;
  font-weight: bold;
  width: 200px;
  font-size: 20px;
  font-family: ${GlobalStyles.headerFont};

  &:hover {
    color: ${GlobalStyles.splytBlue};
  }
`;

function App() {
  const [center, setCenter] = useState<centerInterface>({
    lat: 51.5049375,
    lng: -0.0964509,
  });
  const [currentLocation, setCurrentLocation] = useState<string>('London');

  const [taxiLocations, setTaxiLocations] = useState<taxiLocationsInterface>({
    pickup_eta: 1,
    drivers: [
      {
        driver_id: '0-v0ova78tlkr',
        location: {
          latitude: 51.50893831307097,
          longitude: -0.10739206757603717,
          bearing: 97,
        },
      },
      {
        driver_id: '1-cvbj3mq2xuv',
        location: {
          latitude: 51.50936110495304,
          longitude: -0.09254957377216022,
          bearing: 287,
        },
      },
      {
        driver_id: '2-uwbz5lx1ev',
        location: {
          latitude: 51.50858146340005,
          longitude: -0.10897960141291363,
          bearing: 156,
        },
      },
      {
        driver_id: '3-rboo8q46ewb',
        location: {
          latitude: 51.50956917904835,
          longitude: -0.0800332363303673,
          bearing: 91,
        },
      },
      {
        driver_id: '4-macgrjwwr9',
        location: {
          latitude: 51.50423996801862,
          longitude: -0.08203443401949496,
          bearing: 136,
        },
      },
    ],
  });

  const LocationButtonClick = (targetLocation: string) => (target: any) => {
    if (targetLocation === currentLocation) {
      return;
    } else {
      setCurrentLocation(targetLocation);
    }
  };

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  useEffect(() => {
    if (currentLocation === 'London') {
      setCenter({ lat: 51.5049375, lng: -0.0964509 });
    } else {
      setCenter({ lat: 1.285194, lng: 103.8522982 });
    }
  }, [currentLocation]);

  if (!taxiLocations) {
    return <p>Loading...</p>;
  }

  return (
    <div className='App'>
      <div
        className='map__buttons-container'
        css={css`
          display: grid;
          grid-template-columns: 50% 50%;
          justify-items: center;
          padding: 40px;
        `}
      >
        <button onClick={LocationButtonClick('London')} css={buttonStyling}>
          London
        </button>
        <button onClick={LocationButtonClick('Singapore')} css={buttonStyling}>
          Singapore
        </button>
      </div>
      <Map
        center={center}
        currentLocation={currentLocation}
        taxiLocations={taxiLocations}
      />
    </div>
  );
}

export default App;
