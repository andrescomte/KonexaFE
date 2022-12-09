import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import Dropdown from '../component/Dropdown';
import userEvent from '@testing-library/user-event';

test('drop down render', () => {
  render(<Dropdown />);
  const linkElement = screen.getByText(/dropdown/i);
  expect(linkElement).toBeInTheDocument();
});

test('Dropdown-btn with content "Dropdown" ', () => {
  render(<Dropdown />);
  const linkElement = screen.getByTestId("dropdownBtn");
  expect(linkElement).toHaveTextContent("Dropdown");
});

test('dropdown-btn render', () => {
  render(<Dropdown />);
  const linkElement = screen.getByTestId('dropdownBtn');
  expect(linkElement).toBeInTheDocument();
});

test('Style icon', () => {
  render(<Dropdown />);
  const linkElement = screen.getByTestId('icon');
  expect(linkElement).toHaveStyle({
    marginLeft:"3px"
  });
});
