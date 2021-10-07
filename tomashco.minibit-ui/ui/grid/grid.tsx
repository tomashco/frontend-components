import React from "react";

import classNames from "classnames";

import styles from "./grid.module.scss";

export type GridProps = {
  container?: boolean;
  row?: boolean;
  // item?: boolean,
  // cols?: number,
  children: React.ReactNode | React.ReactNodeArray;
  variant?: "container" | "item";
  className?: string;
};

export default function Grid({
  container,
  row,
  children,
  className,
  variant,
}: GridProps) {
  return (
    <div
      data-variant={container ? "container" : row ? "row" : "default"}
      className={classNames(className, styles.baseGrid, variant)}
    >
      {children}
    </div>
  );
}
