/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTaxi } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -1px, 0);
  }

  70% {
    transform: translate3d(0, -0.5px, 0);
  }

  90% {
    transform: translate3d(0,-0.5px,0);
  }
`;

interface TaxiMarkerProps {
  lat: number;
  lng: number;
  currentLocation: string;
}

function TaxiMarker({ currentLocation }: TaxiMarkerProps) {
  return (
    <Fragment>
      <div>
        <FontAwesomeIcon
          css={css`
            animation: ${bounce} 1s ease infinite;
          `}
          icon={faTaxi}
          size={'2x'}
        />
      </div>
    </Fragment>
  );
}

export default TaxiMarker;
