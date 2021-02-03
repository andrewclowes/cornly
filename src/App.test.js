import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the logo', () => {
  render(<App />);
  const linkElement = screen.getByAltText(/Logo/i);
  expect(linkElement).toBeInTheDocument();
});
