/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useEffect, useState } from 'react';
import GlobalStyles from 'assets/GlobalStyles';
import Map from 'components/Map/Map';
import TaxiCounterSlider from 'components/TaxiCounterSlider/TaxiCounterSlider';
import { centerInterface, taxiLocationsInterface } from 'utils/interfaces';

const buttonStyling = (currentLocation: string, currentButton: string) => css`
  color: ${GlobalStyles.ghostWhite};
  cursor: pointer;
  background-color: ${currentLocation === currentButton
    ? GlobalStyles.royalBlue
    : GlobalStyles.splytBlue};
  border-radius: ${GlobalStyles.borderRadius};
  border: none;
  font-weight: bold;
  width: 200px;
  font-size: 20px;
  font-family: ${GlobalStyles.headerFont};

  &:active {
    color: ${GlobalStyles.splytBlue};
  }
`;

const appStyling = css`
  text-align: center;
  background-color: ${GlobalStyles.canaryYellow};
  height: 100vh;
`;

const buttonContainerStyling = css`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
  padding: 30px;
`;

function App() {
  const [center, setCenter] = useState<centerInterface>({
    lat: 51.5049375,
    lng: -0.0964509,
  });
  const [currentLocation, setCurrentLocation] = useState<string>('London');
  const [currentTaxiAmount, setCurrentTaxiAmount] = useState<number>(6);

  const [taxiLocations, setTaxiLocations] = useState<taxiLocationsInterface>({
    pickup_eta: 1,
    drivers: [],
  });

  const LocationButtonClick = (targetLocation: string) => (target: any) => {
    if (targetLocation === currentLocation) {
      return;
    } else {
      setCurrentLocation(targetLocation);
    }
  };

  //run fetch for taxi locations on first render and at 10 second intervals for updated locations
  useEffect(() => {
    const getTaxiLocations = async () =>
      fetch(
        `${process.env.REACT_APP_ACCESS_ALLOWED_PROXY}${process.env.REACT_APP_API_URL}?count=${currentTaxiAmount}&longitude=${center.lng}&latitude=${center.lat}`
      )
        .then((response) => response.json())
        .then((data) => setTaxiLocations(data));

    getTaxiLocations();

    const interval = setInterval(() => {
      getTaxiLocations();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentTaxiAmount, center]);

  useEffect(() => {
    if (currentLocation === 'London') {
      setCenter({ lat: 51.5049375, lng: -0.0964509 });
    } else {
      setCenter({ lat: 1.285194, lng: 103.8522982 });
    }
  }, [currentLocation]);

  if (!taxiLocations.drivers.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className='App' css={appStyling}>
      <div className='map__buttons-container' css={buttonContainerStyling}>
        <button
          onClick={LocationButtonClick('London')}
          css={buttonStyling(currentLocation, 'London')}
        >
          London
        </button>
        <button
          onClick={LocationButtonClick('Singapore')}
          css={buttonStyling(currentLocation, 'Singapore')}
        >
          Singapore
        </button>
      </div>
      <Map
        center={center}
        currentLocation={currentLocation}
        taxiLocations={taxiLocations}
      />
      <TaxiCounterSlider setCurrentTaxiAmount={setCurrentTaxiAmount} />
    </div>
  );
}

export default App;
