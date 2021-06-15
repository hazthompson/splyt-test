/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import GlobalStyles from 'assets/GlobalStyles';

const taxiSliderWrapperStyle = css`
  width: 400;
  margin: 50;
  display: grid;
  align-items: center;
  padding: 0 200px 0 200px;
  .rc-slider-mark-text {
    font-weight: bold;
    font-size: 14px;
    font-family: ${GlobalStyles.headerFont};
    color: ${GlobalStyles.royalBlue};
  }
  .rc-slider-track {
    background-color: ${GlobalStyles.splytBlue};
  }
`;

const paragraphStyle = css`
  font-size: 16px;
  font-family: ${GlobalStyles.headerFont};
  color: ${GlobalStyles.royalBlue};
  margin-bottom: 2px;
`;

interface TaxiCounterSliderProps {
  setCurrentTaxiAmount: any;
}

function TaxiCounterSlider({ setCurrentTaxiAmount }: TaxiCounterSliderProps) {
  const handleChange = (sliderValues: number) => {
    setCurrentTaxiAmount(sliderValues / 10);
  };
  return (
    <div css={taxiSliderWrapperStyle}>
      <p css={paragraphStyle}>Select number of Taxis to view:</p>
      <Slider
        min={20}
        defaultValue={60}
        marks={{ 20: 2, 40: 4, 60: 6, 80: 8, 100: 10 }}
        step={null}
        onChange={handleChange}
      />
    </div>
  );
}

export default TaxiCounterSlider;
