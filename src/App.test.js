import { render, screen } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const linkElement = screen.getByText(/App Ref. Card 02/i);
  expect(linkElement).toBeInTheDocument();
});
