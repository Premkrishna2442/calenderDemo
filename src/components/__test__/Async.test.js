import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CalanderTable from "../CalanderTable";
import UpdateEvent from "../UpdateEvent";
import { BrowserRouter } from "react-router-dom";

const MokeAsync = () => {
  return (
    <BrowserRouter>
      <CalanderTable />
    </BrowserRouter>
  );
};
const MokeUpdate = () => {
  return (
    <BrowserRouter>
      <UpdateEvent />
    </BrowserRouter>
  );
};
describe("Async", () => {
  // test('Add button has button',async()=>{
  //     render(<MokeAsync />)
  //     const SummaryElement= await screen.findByTestId('summary');
  //     expect(SummaryElement).toBeInTheDocument();

  // })
  test("Add button has button", async () => {
    render(<MokeUpdate />);
    const SummaryElement = await screen.findByTestId("summary-update");
    expect(SummaryElement).toBeInTheDocument();
  });
});
