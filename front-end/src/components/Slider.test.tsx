import {cleanup, fireEvent, screen, render} from '@testing-library/react';
import React from 'react';
import Slider from './Slider';

afterEach(cleanup);

it('Slider renders correctly with provided name', () => {
  render(<Slider name="Speed" />);
  const input = screen.getByText('Speed');
  expect((input as HTMLInputElement)).toBeDefined();
});

it('Slider updates value', () => {
  render(<Slider name="Speed" />);
  expect(screen.getByText('1x')).toBeDefined();

  fireEvent.mouseDown(screen.getByRole('slider'), {clientX: 100});
  expect(screen.getByText('2x')).toBeDefined();

  fireEvent.mouseDown(screen.getByRole('slider'), {clientX: -100});
  expect(screen.getByText('0.1x')).toBeDefined();
});
