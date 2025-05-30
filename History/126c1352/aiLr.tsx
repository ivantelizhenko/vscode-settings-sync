import { render, screen } from '@testing-library/react';
import Button from '../ui/Button';

test('renders Hello component', () => {
  render(<Button>Test</Button>);
  expect(screen.getByRole('button')).toBeInTheDocument();

  expect(2 + 2).toBe(4);
  expect(2 + 2).not.toBe(5);
});
