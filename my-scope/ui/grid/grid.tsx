import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './grid.module.scss';


export type GridProps = {
  container?: boolean,
  row?: boolean
  // item?: boolean,
  // cols?: number,
  children: ReactNode,
  variant?: 'container' | 'item'
  className?: string,
};

// gridContainer

// gridItem

export function Grid({ container, row, children, className, variant }: GridProps) {
  return (
    <div data-variant={container? 'container' : row? 'row' : 'default'} className={classNames(className, styles.baseGrid, variant)}>
      {children}
    </div>
  );
}
