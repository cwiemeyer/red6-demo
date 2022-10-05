import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main headline of application', () => {
  render(<App />);
  const mainHeadline = screen.getByText(/RED6 Demo/i);
  expect(mainHeadline).toBeInTheDocument();
});

test('renders sub headline of application', () => {
  render(<App />);
  const subHeadline = screen.getByText(/Task List App/i);
  expect(subHeadline).toBeInTheDocument();
});
