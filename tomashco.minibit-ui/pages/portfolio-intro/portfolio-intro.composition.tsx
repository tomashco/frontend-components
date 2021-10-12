import React from "react";

import { colors } from "@tomashco/minibit-ui.styles.colors";
import { typography } from "@tomashco/minibit-ui.styles.typography";
import classNames from "classnames";
import { BrowserRouter } from "react-router-dom";

import PortfolioIntro from "./portfolio-intro";

export const BasicPortfolioIntro = () => (
  <div className={classNames(colors, typography)}>
    <BrowserRouter>
      <PortfolioIntro
        title="Tommaso Maioli"
        catchyPhrase="Just Another Fullstack Software Developer"
        titleImg={"https://dummyimage.com/400x600/000/fff"}
        Linkedin="https://www.linkedin.com/in/tommasomaioli/"
        GitHub="https://github.com/tomashco"
        Mail="mailto:tommaso.maioli@gmail.com"
      />
    </BrowserRouter>
  </div>
);
