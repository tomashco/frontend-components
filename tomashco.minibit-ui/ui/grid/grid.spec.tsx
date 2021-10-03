import React from "react";

import { render } from "@testing-library/react";

import { BasicGrid } from "./grid.composition";

it("should render the grid element", () => {
  render(<BasicGrid />);
});
