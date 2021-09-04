import React from 'react';
import Button from './button';
import { typography } from '@my-scope/styles.typography';

export const PrimaryButton = () => (
  <div className={typography} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column' }}>
    <Button variant='primary' onClick={() => alert('on click')}>Primary</Button>
  </div>
);

export const SecondaryButton = () => (
  <div className={typography} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column' }}>
    <Button variant='secondary' onClick={() => alert('on click')}>Secondary</Button>
  </div>
);
