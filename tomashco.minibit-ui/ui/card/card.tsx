import React from "react";

import { typography } from "@tomashco/minibit-ui.styles.typography";
import Button from "@tomashco/minibit-ui.ui.button";
import classNames from "classnames";
import styled from "styled-components";

import styles from "./card.module.scss";

const Labels = styled.div`
  margin: 0.5em 1em;
`;

const SingleLabel = styled.span`
  border: 1px solid var(--primary-color);
  border-radius: 2em;
  padding: 0.2em 0.5em;
  margin: 0.1em 0.2em;
  color: var(--dark-50);
  :hover {
    background-color: var(--primary-color);
    color: var(--light-50);
  }
`;

export type CardProps = {
  title?: string;
  text: string;
  imgSrc?: string;
  alt?: string;
  price?: number;
  labels?: Array<string>;
  primaryBtnText?: string;
  primaryBtnClickHandler?: () => void;
  secondaryBtnText?: string;
  secondaryBtnClickHandler?: () => void;
  className?: string;
};

export default function Card({
  title,
  text,
  className,
  imgSrc,
  alt,
  labels,
  primaryBtnText,
  primaryBtnClickHandler,
  secondaryBtnText,
  secondaryBtnClickHandler,
}: CardProps) {
  return (
    <div className={classNames(className, styles.baseCard, typography)}>
      {imgSrc && <img src={imgSrc} alt={alt} />}
      {title && <h1>{title}</h1>}
      {labels && (
        <Labels>
          {labels.map((label, index) => (
            <SingleLabel key={`${label}-${index}`}>{label}</SingleLabel>
          ))}
        </Labels>
      )}
      <p>{text}</p>
      <div className={styles.ctaArea}>
        {secondaryBtnText && (
          <Button secondary onClick={secondaryBtnClickHandler}>
            {secondaryBtnText}
          </Button>
        )}
        {primaryBtnText && (
          <Button primary onClick={primaryBtnClickHandler}>
            {primaryBtnText}
          </Button>
        )}
      </div>
    </div>
  );
}
