import { render, screen } from '@testing-library/react';
import Button from '../ui/Button';

test('renders Hello component', () => {
  render(<Button>Test</Button>);
  expect(screen.getByRole('button')).toBeInTheDocument();
  // expect(screen.getByRole('button')).toBeInTheDocument();
});
