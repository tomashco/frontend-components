import React from "react";

import { render } from "@testing-library/react";

import { BasicPortfolioIntro } from "./portfolio-intro.composition";

it("should render the basic portfolio", () => {
  render(<BasicPortfolioIntro />);
});
