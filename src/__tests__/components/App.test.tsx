import React from "react";
import { shallow } from "enzyme";
import App from "../../components/App";

describe("App", () => {
  it("renders without crashing", () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });
});
