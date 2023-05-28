import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders kangaroo', () => {
  render(<App />);
  // TODO: fix for i18n
  const linkElement = screen.getByText("Contactanos y siguenos");
  expect(linkElement).toBeInTheDocument();
});
