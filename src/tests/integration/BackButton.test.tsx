import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BackButton from "@/app/components/BackButton/BackButton";

test("component renders properly", () => {
  render(<BackButton routingPath="/" />);

  const button = screen.getByRole("button");

  expect(button).toBeVisible();
});
