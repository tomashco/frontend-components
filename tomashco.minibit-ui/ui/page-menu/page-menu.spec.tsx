import React from "react";

import { render } from "@testing-library/react";

import { BasicPageMenu } from "./page-menu.composition";

it("should render the pageMenu", () => {
  render(<BasicPageMenu />);
});
