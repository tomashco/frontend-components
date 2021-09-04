import React from 'react';
import classNames from 'classnames';
import {typography} from '@my-scope/styles.typography'

import styles from './card.module.scss';


export type CardProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string,
  className?: string,
  imgSrc?: string
};

export function Card({ text, className, imgSrc }: CardProps) {
  return (
    <div className={classNames(className, styles.baseCard, typography)}>
      {imgSrc && <img src={imgSrc} alt="imgSrc" />}
      <p>{text}</p>
    </div>
  );
}
