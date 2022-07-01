import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("test login form",() =>{
  const component = render(<App />)
  const childElement = component.getByText("Login");
  expect(childElement).toBeInTheDocument();
});

test("test Registerw form",() =>{
  const component = render(<App />)
  const childElement = component.getByText("Register");
  expect(childElement).toBeInTheDocument();
});
