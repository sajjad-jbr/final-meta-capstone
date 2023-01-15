/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

import { render, screen } from "@testing-library/react";
import FormBooking, {initializeTimes} from './Components/Booking/FormBooking';
import {updateTimes} from "./util/api";

test('Renders the BookingForm heading', () => {
  render(<FormBooking />);
  const headingElement = screen.getByText("Reservation Table");
  expect(headingElement).toBeInTheDocument();

})

test('initializeTimes returns values', () => {
  const times = initializeTimes()
  expect(times).toBeTruthy()
})

test('updateTimes returns values', () => {
  const newTimes = updateTimes('test value', 'action')
  expect(newTimes).toEqual('test value')
})
