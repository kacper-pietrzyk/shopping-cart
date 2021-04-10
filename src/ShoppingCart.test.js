import { render, screen } from '@testing-library/react';
import ShoppingCart from './components/ShoppingCart/ShoppingCart.jsx';

test('renders learn react link', () => {
  render(<ShoppingCart />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
