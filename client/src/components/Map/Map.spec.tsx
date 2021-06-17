import React from 'react';
import { render, screen } from '@testing-library/react';
import Map from './Map';

const defaultProps = {
  center: { lat: 51.5049375, lng: -0.0964509 },
  currentLocation: 'London',
  taxiLocations: {
    pickup_eta: 1,
    drivers: [
      {
        driver_id: '123',
        location: {
          latitude: 51.5049355,
          longitude: -0.0964503,
          bearing: 4,
        },
      },
      {
        driver_id: '456',
        location: {
          latitude: 51.5049372,
          longitude: -0.0964508,
          bearing: 4,
        },
      },
    ],
  },
};

it('renders Map component', async () => {
  render(<Map {...defaultProps} />);
  const map = screen.getByTestId('google-map-react');
  expect(map).toBeInTheDocument();
});

it('renders Correct number of taxi icons', async () => {
  render(<Map {...defaultProps} />);
  const taxiMarkers = await screen.findAllByTestId('taxi-marker');
  expect(taxiMarkers).toHaveLength(2);
});
