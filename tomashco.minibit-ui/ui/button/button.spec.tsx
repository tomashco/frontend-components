/* eslint-disable @typescript-eslint/no-unused-expressions, jest/valid-expect */
import React from "react";

import { render } from "@testing-library/react";

import Button from "./button";

it("should render the basic button", () => {
  render(<Button />);
});
