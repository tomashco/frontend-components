import React from "react";

import { colors } from "@tomashco/minibit-ui.styles.colors";
import { typography } from "@tomashco/minibit-ui.styles.typography";
import classNames from "classnames";

import PageTitle from "./page-title";

export const BasicPageTitle = () => (
  <div className={classNames(typography, colors)}>
    <PageTitle
      title="This is my page title!"
      catchyPhrase="and this is a fancy phrase to tell you how much I'm cool"
    />
  </div>
);
