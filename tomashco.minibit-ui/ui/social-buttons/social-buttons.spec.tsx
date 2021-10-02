import React from "react";

import { render } from "@testing-library/react";

import { BasicSocialButtons } from "./social-buttons.composition";

it("should render a bunch of social buttons", () => {
  render(<BasicSocialButtons />);
});
