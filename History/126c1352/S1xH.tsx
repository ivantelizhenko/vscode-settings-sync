import { render, screen } from '@testing-library/react';
import Button from '../ui/Button';

test('пере', () => {
  render(<Button>Test</Button>);
  expect(screen.getByRole('button')).toBeInTheDocument();
});
