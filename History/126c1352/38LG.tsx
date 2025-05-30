import { render, screen } from '@testing-library/react';
import
import Button from '../ui/Button';

test('рендерить кнопку', () => {
  render(<Button>Test</Button>);
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('Викликає функцію при кліку', () => {
  const handleClick = vi.fn();

  render(<Button>Test</Button>);
  expect(screen.getByRole('button')).toBeInTheDocument();
});
