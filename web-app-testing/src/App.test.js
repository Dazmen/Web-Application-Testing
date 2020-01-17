import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without Crashing', () => {
  render(<App />);
});
test('At Bat buttons found', () => {
  const {getByTestId} = render(<App />);
  getByTestId(/btnstrike/i);
  getByTestId(/btnball/i);
  getByTestId(/btnfoul/i);
  getByTestId(/btnhit/i);
})
