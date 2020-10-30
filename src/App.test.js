import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ok', () => {
  render(<App />);
  expect(screen).toBeTruthy();
});
