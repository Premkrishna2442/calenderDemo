import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddButton from "../AddButton";
import { BrowserRouter } from "react-router-dom";
import { Add } from "@material-ui/icons";

const MokeAddButton = () => {
  return (
    <BrowserRouter>
      <AddButton />
    </BrowserRouter>
  );
};
describe("Add button tests", () => {
  test("Add button has button", () => {
    render(<MokeAddButton />);
    const ButtonElement = screen.queryByRole("button");
    expect(ButtonElement).toBeInTheDocument();
  });

  test("it has add role", () => {
    render(<MokeAddButton />);
    const ButtonElement = screen.getByRole("add");
    expect(ButtonElement).not.toBeFalsy();
  });
});
