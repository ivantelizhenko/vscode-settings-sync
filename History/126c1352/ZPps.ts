import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../ui/Button';

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('рендерить кнопку', () => {
  render(<Button>Hey</Button>);

  expect(screen.getByRole('button')).toBeInTheDocument();
});
