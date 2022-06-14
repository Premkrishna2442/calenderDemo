import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Insertform from "../Insertform";
import { BrowserRouter } from "react-router-dom";

const MokeInsertButton = () => {
  return (
    <BrowserRouter>
      <Insertform />
    </BrowserRouter>
  );
};
describe("Insert button tests", () => {
  test("Add button has button", () => {
    render(<MokeInsertButton />);
    const ButtonElement = screen.getByRole("button");
    expect(ButtonElement).toBeInTheDocument();
  });

  test("it has Insert role", () => {
    render(<MokeInsertButton />);
    const ButtonElement = screen.getAllByText(/Insert Event/i);
    expect(ButtonElement.length).toBe(2);
  });
});
