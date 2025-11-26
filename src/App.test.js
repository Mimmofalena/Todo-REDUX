import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

test('renders Todo App title', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const titleElement = screen.getByText(/Todo App/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders add todo input', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const inputElement = screen.getByPlaceholderText(/What needs to be done/i);
  expect(inputElement).toBeInTheDocument();
});
