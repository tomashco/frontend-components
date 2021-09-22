import React from 'react';
import { render } from '@testing-library/react';
import { BasicPageTitle } from './page-title.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicPageTitle />);
  const rendered = getByText('hello from PageTitle');
  expect(rendered).toBeTruthy();
});
