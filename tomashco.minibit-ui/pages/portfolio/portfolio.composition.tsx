import React from "react";

import { Portfolio } from "./portfolio";

export const BasicPortfolio = () => (
  <Portfolio
    pageTitle="My portfolio!"
    catchyPhrase="I'm only another dev out there"
    menuItems={[
      {
        ctaLink: "#",
        ctaText: "My projects",
      },
      {
        ctaLink: "#",
        ctaText: "About me",
      },
      {
        ctaLink: "#",
        ctaText: "Reach me out",
      },
    ]}
  />
);
