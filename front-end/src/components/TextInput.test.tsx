import {cleanup, fireEvent, screen, render} from '@testing-library/react';
import React from 'react';
import TextInput from './TextInput';

afterEach(cleanup);

it('TextInput updates text', () => {
  render(<TextInput />);
  const input = screen.getByPlaceholderText('Type in a phrase');
  fireEvent.change(input, {target: {value: 'Hello World'}});
  expect((input as HTMLInputElement).value).toBe('Hello World');
});

it('TextInput resets text', () => {
  render(<TextInput />);
  const input = screen.getByPlaceholderText('Type in a phrase');
  fireEvent.change(input, {target: {value: 'Hello World'}});
  expect((input as HTMLInputElement).value).toBe('Hello World');
  const resetButton = screen.getByText('Reset Text');
  fireEvent.click(resetButton);
  expect((input as HTMLInputElement).value).toBe('');
});
