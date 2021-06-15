/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import GlobalStyles from 'assets/GlobalStyles';
import { Fragment } from 'react';

interface CurrentLocationMarkerProps {
  currentLocation: String;
  lat: number;
  lng: number;
}

const currentLocationMarkerStyle = css`
  color: red;
  .faMapPin {
    &:hover {
      // color: ${GlobalStyles.splytBlue};
    }
  }
  .currentMarkerLabel {
    &:hover {
      color: red;
    }
  }
`;

function CurrentLocationMarker({
  currentLocation,
}: CurrentLocationMarkerProps) {
  return (
    <Fragment>
      <div css={currentLocationMarkerStyle}>
        <div
          className='currentMarkerLabel'
          css={css`
            width: 100%;
            margin: -10px 0 0 -25px;
            font-family: ${GlobalStyles.headerFont};
            font-size: 15px;
            margin: -20px 0 0 -35px;
            color: transparent;
            // &:hover {
            //   font-size: 15px;
            //   margin: -20px 0 0 -35px;
            // }
          `}
        >
          <span
            css={css`
              font-weight: bold;
            `}
          >
            Splyt
          </span>
          &nbsp;{currentLocation}
        </div>
        <FontAwesomeIcon className='faMapPin' icon={faMapPin} size={'2x'} />
      </div>
    </Fragment>
  );
}

export default CurrentLocationMarker;
