import { render, screen } from '@testing-library/react';
import Button from '../ui/Button';

test('renders Hello component', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
