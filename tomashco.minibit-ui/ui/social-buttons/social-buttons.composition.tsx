import React from "react";

import { colors } from "@tomashco/minibit-ui.styles.colors";
import { typography } from "@tomashco/minibit-ui.styles.typography";
import classNames from "classnames";

import SocialButtons from "./social-buttons";

export const BasicSocialButtons = () => (
  <div className={classNames(typography, colors)}>
    <SocialButtons
      Linkedin="https://www.linkedin.com/in/tommasomaioli/"
      GitHub="https://github.com/tomashco"
      Mail="mailto:tommaso.maioli@gmail.com"
    />
  </div>
);
