import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("button changing form properly", () => {
  render(<App />);
  const btn = screen.getByTestId("button");
  fireEvent.click(btn);
  const formSection = screen.getByTestId("form-section");
  expect(formSection).toHaveTextContent("First Name");
});
