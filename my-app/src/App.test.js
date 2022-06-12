// import { render, screen } from '@testing-library/react';
// import App from './App';
//
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";
import Header from './Components/Header';

describe("App", () => {
  it("Test app", () => {
    render(<App />);
    expect(screen.getByTestId("nav")).toBeInTheDocument();
  });
});
