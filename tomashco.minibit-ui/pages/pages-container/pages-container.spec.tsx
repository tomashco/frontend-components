import React from "react";

import { render } from "@testing-library/react";

import { BasicPagesContainer } from "./pages-container.composition";

it("should render the pages-container component", () => {
  render(<BasicPagesContainer />);
});
