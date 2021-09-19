import React from "react";

import PageMenu from "@tomashco/minibit-ui.ui.page-menu";
import classNames from "classnames";

import styles from "./portfolio.module.scss";

export type PortfolioProps = {
  pageTitle: string;
  catchyPhrase?: string;
  menuItems: Array<Object>;
};

export function Portfolio({
  menuItems,
  pageTitle,
  catchyPhrase,
}: PortfolioProps) {
  return (
    <div className={classNames(styles.portfolioPage)}>
      <PageMenu items={menuItems} />
      {/* <PageTitle title={pageTitle} catchyPhrase={catchyPhrase} /> */}
    </div>
  );
}
