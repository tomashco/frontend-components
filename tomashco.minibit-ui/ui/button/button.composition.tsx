import React from "react";

import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "@tomashco/minibit-ui.styles.colors";
import { typography } from "@tomashco/minibit-ui.styles.typography";
import classNames from "classnames";

import Button from "./button";

export const ButtonCompositions = () => (
  <div
    className={classNames(typography, colors)}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    }}
  >
    <Button primary onClick={() => alert("on click")}>
      Primary
    </Button>
    <Button secondary onClick={() => alert("on click")}>
      Secondary
    </Button>
    <Button primary strong onClick={() => alert("on click")}>
      Primary strong
    </Button>
    <Button secondary strong onClick={() => alert("on click")}>
      Secondary strong
    </Button>
    <Button primary onClick={() => alert("on click")}>
      <FontAwesomeIcon icon={faCoffee} size="lg" />
      Secondary strong
    </Button>
  </div>
);
