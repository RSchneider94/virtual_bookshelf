import React from 'react';
import { useSelector } from 'react-redux';

import { Box } from '@material-ui/core';
import CategoryGrid from '../components/Categories/CategoryGrid';

export default function Home() {
  const categories = useSelector(state => state.categories);

  const categoriesSections = [];

  for (const [categoryKey, value] of Object.entries(categories)) {
    categoriesSections.push(
      <CategoryGrid
        key={categoryKey}
        categoryKey={categoryKey}
        categoryName={value}
      />
    );
  }

  return <Box>{categoriesSections}</Box>;
}
