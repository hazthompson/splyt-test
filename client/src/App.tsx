/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useEffect, useState } from 'react';
import GlobalStyles from 'assets/GlobalStyles';
import './App.css';
import Map from 'pages/Map';
import { centerInterface } from 'utils/interfaces';

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
      <Map center={center} />
    </div>
  );
}

export default App;
