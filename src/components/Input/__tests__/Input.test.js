import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '../Input';

it('should render label text with same label passed as prop', () => {
  const props = {
    label: 'My Input',
    variant: 'default',
  };
  render(<Input {...props} />);
  const inputElement = screen.getByLabelText(`${props.label}:`);
  expect(inputElement).toBeInTheDocument();
});

it('should have same value passed', () => {
  const props = {
    label: 'My Input',
    variant: 'default',
    value: 44,
  };
  render(<Input {...props} />);
  const inputElement = screen.getByLabelText(`${props.label}:`);
  expect(inputElement).toBeInTheDocument();
  expect(inputElement.value).toBe('44');
});

it('should render placeholder text', () => {
  const props = {
    variant: 'default',
    placeholder: 'Input',
  };
  render(<Input {...props} />);
  const inputElement = screen.queryByPlaceholderText(`${props.placeholder}`);
  expect(inputElement).toBeInTheDocument();
});

it('should NOT render label tag if it is not passed as prop', () => {
  const props = {
    variant: 'default',
    placeholder: 'Input',
  };
  render(<Input {...props} />);
  const inputComponent = screen.queryByTestId('inputComponent');
  expect(inputComponent).not.toContainHTML('label');
});
