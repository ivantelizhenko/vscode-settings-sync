import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { getIssues } from '../store/BoardSlice';
import Form from '../features/Form';

// Мокуємо useAppDispatch та useAppSelector
vi.mock('../store/hooks', () => ({
  useAppDispatch: () => vi.fn(),
  useAppSelector: vi.fn(),
}));

const mockStore = configureStore();
const mockDispatch = vi.fn();

describe('Form Component', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      board: { isLoading: false },
    });

    vi.mocked(store.dispatch).mockImplementation(mockDispatch);
  });

  test('рендерить поле введення та кнопку', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    expect(screen.getByRole('input')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /load issues/i })
    ).toBeInTheDocument();
  });

  test('оновлює стан при введенні URL', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: { value: 'https://github.com/user/repo' },
    });

    expect(input).toHaveValue('https://github.com/user/repo'); // Перевіряємо оновлення значення інпута
  });

  test('викликає getIssues при сабміті форми', () => {
    render(
      <Provider store={store}>
        <Form className="test-class" />
      </Provider>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: { value: 'https://github.com/user/repo' },
    });

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(mockDispatch).toHaveBeenCalledWith(
      getIssues({ owner: 'user', repoName: 'repo' })
    );
  });

  test('кнопка вимикається, коли isLoading=true', () => {
    store = mockStore({
      board: { isLoading: true },
    });

    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const button = screen.getByRole('button', { name: /load issues/i });
    expect(button).toBeDisabled();
  });
});
