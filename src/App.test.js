import React from 'react';
import App from './App';
import { render } from './testUtils';

it('renders all categories on home screen', () => {
  const { getByText } = render(<App></App>);
  expect(getByText('No Category')).toBeInTheDocument();
  expect(getByText('Reading')).toBeInTheDocument();
  expect(getByText('Want to Read')).toBeInTheDocument();
  expect(getByText('Read')).toBeInTheDocument();
});
