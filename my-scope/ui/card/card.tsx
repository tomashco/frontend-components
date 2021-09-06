import React from 'react';
import classNames from 'classnames';
import {typography} from '@my-scope/styles.typography'

import styles from './card.module.scss';


export type CardProps = {
  /**
   * a text to be rendered in the component.
   */
  title?: string;
  text: string,
  className?: string,
  imgSrc?: string
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
