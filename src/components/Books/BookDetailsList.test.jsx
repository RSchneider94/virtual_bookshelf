import React from 'react';
import BookDetailsList from './BookDetailsList';
import { render } from '../../testUtils';

it('renders the book details', () => {
  const { getByText } = render(
    <BookDetailsList
      creationDate={1584474522242}
      description="A book"
      author="Rodrigo"
      selectCategory="Reading"
      handleCategorySelect={() => {
        void 0;
      }}
    ></BookDetailsList>
  );
  expect(getByText('A book')).toBeInTheDocument();
});
