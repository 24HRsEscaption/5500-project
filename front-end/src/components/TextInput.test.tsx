import {cleanup, fireEvent, screen, render} from '@testing-library/react';
import React from 'react';
import TextInput from './TextInput';

afterEach(cleanup);

it('TextInput updates text', () => {
  render(<TextInput />);
  const input = screen.getByPlaceholderText('Enter your text here');
  fireEvent.change(input, {target: {value: 'Hello World'}});
  expect((input as HTMLInputElement).value).toBe('Hello World');
});

it('TextInput resets text', () => {
  render(<TextInput handleReset={() => {}} />);
  const input = screen.getByPlaceholderText('Enter your text here');
  fireEvent.change(input, {target: {value: 'Hello World'}});
  expect((input as HTMLInputElement).value).toBe('Hello World');
  const resetButton = screen.getByTestId('reset');
  fireEvent.click(resetButton);
  expect((input as HTMLInputElement).value).toBe('');
});
