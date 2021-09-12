import React from "react";

import { typography } from "./index";

// const textColors = [
//   '--text-color',
//   '--text-color-heavy',
//   '--text-color-light',
//   '--text-inactive'
// ];

export function typographyComp() {
  return (
    <>
      <div className={typography}>
        <h1>hello from the title</h1>
      </div>
    </>
  );
}
