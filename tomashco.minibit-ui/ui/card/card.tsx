import React, { useState } from "react";

import Button from "@tomashco/minibit-ui.ui.button";
import styled from "styled-components";

const FoldedCard = styled.div`
  display: ${({ foldable, isFolded }) =>
    foldable ? (isFolded ? "flex" : "none") : "none"};
  min-height: 50px;
  border: 1px solid var(--dark-50);
  border-radius: 20px;
  align-items: center;
  padding: 0 1em;
  cursor: pointer;
`;

const BaseCard = styled.div`
  display: ${({ foldable, isFolded }) =>
    foldable ? (isFolded ? "none" : "flex") : "flex"};
  border: 1px solid var(--dark-50);
  height: ${({ imgSrc }) => (imgSrc ? "50em" : "30em")};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 5px 10px #ccc;
  flex-direction: column;
  justify-content: flex-start;

  p {
    padding: 1em 1em 0.2em 1em;
  }
  img {
    min-height: 15em;
    width: auto;
    object-fit: cover;
  }
`;

const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0 1em;
  h1 {
    padding-left: 1em;
  }
  span {
    cursor: pointer;
    padding-right: 1em;
  }
`;

const CtaArea = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 2em;
  align-items: end;
  flex-grow: 1;

  button {
    flex: 0 1 calc(25%);
    display: flex;
    margin-bottom: 2em;
    &:last-child {
      margin-left: 10px;
    }
    // margin-left: 20px;
  }
`;

const Labels = styled.div`
  margin: 0.5em 1em;
`;

const SingleLabel = styled.span`
  border: 1px solid var(--primary-color);
  border-radius: 2em;
  display: inline-block;
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
  foldable?: boolean;
  alt?: string;
  price?: number;
  labels?: Array<string>;
  primaryBtnText?: string;
  primaryBtnClickHandler?: () => void;
  secondaryBtnText?: string;
  secondaryBtnClickHandler?: () => void;
  className?: string;
};

const checkVisibility = (foldable, fold) => {
  return foldable ? fold : false;
};

export default function Card({
  title,
  text,
  imgSrc,
  foldable = false,
  alt,
  labels,
  primaryBtnText,
  primaryBtnClickHandler,
  secondaryBtnText,
  secondaryBtnClickHandler,
}: CardProps) {
  const [isFolded, setIsFolded] = useState(true);

  return (
    <>
      <FoldedCard
        foldable={foldable}
        isFolded={isFolded}
        onClick={() => setIsFolded(!isFolded)}
      >
        {title && <h1>{title}</h1>}
      </FoldedCard>

      <BaseCard imgSrc={imgSrc} foldable={foldable} isFolded={isFolded}>
        {imgSrc && <img src={imgSrc} alt={alt} />}
        {title && (
          <CardTitle>
            <h1>{title}</h1>
            {foldable && (
              <span onClick={() => setIsFolded(!isFolded)}>^^^</span>
            )}
          </CardTitle>
        )}
        {labels && (
          <Labels>
            {labels.map((label, index) => (
              <SingleLabel key={`${label}-${index}`}>{label}</SingleLabel>
            ))}
          </Labels>
        )}
        <p>{text}</p>
        <CtaArea>
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
        </CtaArea>
      </BaseCard>
    </>
  );
}
