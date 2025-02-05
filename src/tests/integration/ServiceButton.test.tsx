import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ServiceButton from "@/app/components/ServiceButton/ServiceButton";

test("component renders properly", () => {
  render(<ServiceButton title="test" japaneseTitle="test" />);

  const button = screen.getByTestId("service-button");

  expect(button).toBeVisible();
});

test("component renders title properly", () => {
  render(<ServiceButton title="Vocabulary" japaneseTitle="語彙" />);

  const button = screen.getByTestId("service-button");

  expect(button).toHaveTextContent("Vocabulary");
});

test("component renders japaneseTitle properly", () => {
  render(<ServiceButton title="Vocabulary" japaneseTitle="語彙" />);

  const button = screen.getByTestId("service-button");

  expect(button).toHaveTextContent("語彙");
});
