import { render, fireEvent, screen } from "@testing-library/react";
import Header from "./Header";

test("renders Header component with within", () => {
  render(<Header />);
  const headerTitle = screen.getByText(/Notifications/i);
  expect(headerTitle).toBeInTheDocument();
});

test("renders Header component without within", () => {
  render(<Header />);
  const headerTitle = screen.getByText(/Notifications/i);
  expect(headerTitle).toBeInTheDocument();
});

test("renders language menu when button is clicked", () => {
  render(<Header />);
  const languageButton = screen.getByLabelText(/language/i);
  fireEvent.click(languageButton);
  const englishOption = screen.getByText(/English/i);
  const vietnameseOption = screen.getByText(/VietNam/i);
  expect(englishOption).toBeInTheDocument();
  expect(vietnameseOption).toBeInTheDocument();
});
