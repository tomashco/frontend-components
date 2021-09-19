import React from "react";

import { render } from "@testing-library/react";

import { BasicPortfolio } from "./portfolio.composition";

it("should render the basic portfolio", () => {
  render(<BasicPortfolio />);
});
