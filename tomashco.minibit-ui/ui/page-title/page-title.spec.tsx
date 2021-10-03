import React from "react";

import { render } from "@testing-library/react";

import { BasicPageTitle } from "./page-title.composition";

it("should render the title component", () => {
  render(<BasicPageTitle />);
});
