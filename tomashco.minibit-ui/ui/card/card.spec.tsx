import React from "react";

import { render } from "@testing-library/react";

import { BasicCard } from "./card.composition";

it("should render the card component", () => {
  render(<BasicCard />);
});
