import React from 'react';
import * as ReactDOM from 'react-dom';
import { within, render } from '@testing-library/react';
import App from './App';
import { taxiLocationsInterface } from 'utils/interfaces';

test('renders a loading message before data has arrived', async () => {
  const root = await document.createElement('div');
  ReactDOM.render(<App />, root);
  const { getByText } = within(root);

  getByText('Loading...');
});

test('renders App component once data has arrived', async () => {
  const taxiLocations: taxiLocationsInterface = {
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
  };

  const mockFetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(taxiLocations),
    } as Response)
  );

  global.fetch = mockFetch;

  // Default state values
  const currentTaxiAmount = 6;
  const center = {
    lat: 51.5049375,
    lng: -0.0964509,
  };

  const { findByRole } = render(<App />);
  const londonBtn = await findByRole('button', { name: 'London' });
  const singaporeBtn = await findByRole('button', { name: 'Singapore' });

  expect(mockFetch).toHaveBeenLastCalledWith(
    `${process.env.REACT_APP_ACCESS_ALLOWED_PROXY}${process.env.REACT_APP_API_URL}?count=${currentTaxiAmount}&longitude=${center.lng}&latitude=${center.lat}`
  );
  expect(londonBtn).toBeInTheDocument();
  expect(singaporeBtn).toBeInTheDocument();
});
