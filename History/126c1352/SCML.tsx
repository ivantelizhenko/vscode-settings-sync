import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import Button from '../ui/Button';

test('рендерить кнопку', () => {
  render(<Button>Test</Button>);
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('Викликає функцію при кліку', () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Test</Button>);
  fireEvent.click(button);
  expect(screen.getByRole('button')).toBeInTheDocument();
});
