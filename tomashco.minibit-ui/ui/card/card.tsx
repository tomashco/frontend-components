import React from "react";

import { typography } from "@tomashco/minibit-ui.styles.typography";
import Button from "@tomashco/minibit-ui.ui.button";
import classNames from "classnames";

import styles from "./card.module.scss";

export type CardProps = {
  title?: string;
  text: string;
  imgSrc?: string;
  alt?: string;
  price?: number;
  primaryBtnText?: string;
  primaryBtnClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  secondaryBtnText?: string;
  secondaryBtnClickHandler?: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  className?: string;
};

export function Card({
  title,
  text,
  className,
  imgSrc,
  primaryBtnText,
  primaryBtnClickHandler,
  secondaryBtnText,
  secondaryBtnClickHandler,
}: CardProps) {
  return (
    <div className={classNames(className, styles.baseCard, typography)}>
      {imgSrc && <img src={imgSrc} alt="imgSrc" />}
      {title && <h1>{title}</h1>}
      <p>{text}</p>
      <div className={styles.ctaArea}>
        {secondaryBtnText && (
          <Button variant={"secondary"} onClick={secondaryBtnClickHandler}>
            {secondaryBtnText}
          </Button>
        )}
        {primaryBtnText && (
          <Button variant={"primary"} onClick={primaryBtnClickHandler}>
            {primaryBtnText}
          </Button>
        )}
      </div>
    </div>
  );
}
