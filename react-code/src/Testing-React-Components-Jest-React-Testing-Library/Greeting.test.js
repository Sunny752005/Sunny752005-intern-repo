import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Greeting from './Greeting';

test('renders welcome message by default', () => {
  render(<Greeting />);
  expect(screen.getByText('Welcome!')).toBeInTheDocument();
});

test('shows greeting message after button click', () => {
  render(<Greeting />);
  fireEvent.click(screen.getByText('Greet'));
  expect(screen.getByText('Hello Sunny!')).toBeInTheDocument();
});
