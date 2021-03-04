import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

import Navbar, { Props } from "../components/Navbar/Navbar";

describe("<Navbar />", () => {
  it('renders correctly', () => {
    const tree = render(<Navbar />)
    expect(tree).toMatchSnapshot();
  });
});