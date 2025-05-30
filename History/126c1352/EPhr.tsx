import { render, screen } from '@testing-library/react';

test('renders Hello component', () => {
  render(<div>Hello World</div>);
  expect(screen.getByRole('button')).toBeInTheDocument();
});
