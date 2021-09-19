import React from "react";

import PageMenu from "./page-menu";

export const BasicPageMenu = () => (
  <PageMenu
    toggleTheme
    items={[
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
