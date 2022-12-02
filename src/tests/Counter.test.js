// import necessary react testing library helpers here
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import the Counter component here
import Counter from '../components/Counter';


beforeEach(() => {
  // Render the Counter component here
  
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();

});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const btn = screen.getByTestId('count');
  
  expect(btn).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const btn = screen.getByTestId('count');

  const btnIncremement = screen.getByTestId('increment');

  fireEvent.click(btnIncremement);

  
  expect(btn).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const btn = screen.getByTestId('count');

  const btnIncremement = screen.getByTestId('decrement');

  fireEvent.click(btnIncremement);

  
  expect(btn).toHaveTextContent("-1");
});