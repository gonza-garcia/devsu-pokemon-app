import React from 'react';
import { render, screen } from '@testing-library/react';
import Slider from '../Slider';

it('should render label text with same label passed as prop', () => {
  const props = {
    label: 'My Input',
    variant: 'default',
  };
  render(<Slider {...props} />);
  const sliderElement = screen.getByLabelText(`${props.label}:`);
  expect(sliderElement).toBeInTheDocument();
});

it('should render placeholder text', () => {
  const props = {
    variant: 'default',
    placeholder: 'Slider',
  };
  render(<Slider {...props} />);
  const sliderElement = screen.queryByPlaceholderText(`${props.placeholder}`);
  expect(sliderElement).toBeInTheDocument();
});

it('should NOT render label tag if it is not passed as prop', () => {
  const props = {
    variant: 'default',
    placeholder: 'Slider',
  };
  render(<Slider {...props} />);
  const sliderComponent = screen.queryByTestId('sliderComponent');
  expect(sliderComponent).not.toContainHTML('label');
});
