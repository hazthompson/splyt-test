/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import GlobalStyles from 'assets/GlobalStyles';

interface CurrentLocationMarkerProps {
  currentLocation: String;
  lat: number;
  lng: number;
}

const currentLocationMarkerStyle = css`
  color: red;
  .currentMarkerLabel {
    &:hover {
      color: red;
    }
  }
`;

const currentMarkerLabelStyling = css`
  width: 100%;
  margin: -10px 0 0 -25px;
  font-family: ${GlobalStyles.headerFont};
  font-size: 15px;
  margin: -20px 0 0 -45px;
  color: red;
`;

const spanStyling = css`
  font-weight: bold;
`;

function CurrentLocationMarker({
  currentLocation,
}: CurrentLocationMarkerProps) {
  return (
    <div css={currentLocationMarkerStyle}>
      <div className='currentMarkerLabel' css={currentMarkerLabelStyling}>
        <span css={spanStyling}>Splyt</span>
        &nbsp;{currentLocation}
      </div>
      <FontAwesomeIcon className='faMapPin' icon={faMapPin} size={'2x'} />
    </div>
  );
}

export default CurrentLocationMarker;
