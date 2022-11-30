import {cleanup, fireEvent, screen, render} from '@testing-library/react';
import React from 'react';
import Audio from './Audio';

afterEach(cleanup);

it('Audio sets correct play state', () => {
  render(<Audio src='' audioName="Audio" onClick={() => {}}></Audio>);

  const audioEl = screen.getByTestId('audio');
  fireEvent.play(audioEl);

  expect(audioEl).toBeDefined();
});
