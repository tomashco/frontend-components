import React from 'react';
import classNames from 'classnames';
import Typography from '@bit/mui-org.material-ui.typography';

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
    <div className={classNames(className, styles.baseCard)}>
      {imgSrc && <img src={imgSrc} alt="imgSrc" />}
      <Typography variant={"body1"}>{text}</Typography>
    </div>
  );
}
