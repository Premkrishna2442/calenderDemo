import renderer from "react-test-renderer";
import Login from "../Login";
import { BrowserRouter } from "react-router-dom";
const MokeLoginButton = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
};
it("renders correctly", () => {
  const tree = renderer.create(<MokeLoginButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
