import React from 'react';
import CategoryGrid from './CategoryGrid';
import { render } from '../../testUtils';

it("renders no books text for category view when there's no books", () => {
  const { getByText } = render(<CategoryGrid></CategoryGrid>);
  expect(
    getByText('No books for this category. What about creating one?')
  ).toBeInTheDocument();
});
