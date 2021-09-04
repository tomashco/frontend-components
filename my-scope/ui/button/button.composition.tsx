import React from 'react';
import Button from './button';
import { typography } from '@my-scope/typography';

export const BasicButton = () => (
  <div className={typography} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Button onClick={() => alert('on click')}>Click</Button>
  </div>
);
