import React from 'react';
import BookCover from './BookCover';
import { render } from '../../testUtils';

it('renders the book cover', () => {
  const { getByText } = render(
    <BookCover id="7ts8wnxntujm92pq50zx1o" title="A book"></BookCover>
  );
  expect(getByText('A book')).toBeInTheDocument();
});
