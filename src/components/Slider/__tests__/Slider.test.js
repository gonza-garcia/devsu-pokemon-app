import React from 'react';
import { render, screen } from '@testing-library/react';
import Slider from '../Slider';

test('Slider renders with same title passed as prop', () => {
  const title = 'my title';
  render(<Slider title={title} />);
  const SliderElement = screen.getByText(/my title/i);
  expect(SliderElement).toBeInTheDocument();
});
