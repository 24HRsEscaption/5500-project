import {cleanup, fireEvent, screen, render} from '@testing-library/react';
import React from 'react';
import Audio from './Audio';

afterEach(cleanup);

it('Audio sets correct play state', () => {
  render(<Audio audioName="Audio" onClick={() => {}}></Audio>);
  expect(screen.queryByTestId('status-text')?.textContent).toBe('Status: Off');

  const audioEl = screen.getByTestId('audio');
  fireEvent.play(audioEl);

  expect(screen.queryByTestId('status-text')?.textContent).toBe('Status: On');
});
