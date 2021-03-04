import React from "react";
import { render } from "@testing-library/react";

import Header from "../routes/Home/homeHeader/Header";

describe("<Header />", () => {
  it('renders correctly', () => {
    const tree = render(<Header />)
    expect(tree).toMatchSnapshot();
  });
});
