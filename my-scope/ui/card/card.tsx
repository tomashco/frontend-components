import React from "react";

import { typography } from "@my-scope/styles.typography";
import classNames from "classnames";

import styles from "./card.module.scss";

export type CardProps = {
  title?: string;
  text: string;
  imgSrc?: string;
  alt?: string;
  price?: number;
  buttonText?: string;

  className?: string;
};

export function Card({ title, text, className, imgSrc }: CardProps) {
  return (
    <div className={classNames(className, styles.baseCard, typography)}>
      {imgSrc && <img src={imgSrc} alt="imgSrc" />}
      {title && <h1>{title}</h1>}
      <p>{text}</p>
    </div>
  );
}
