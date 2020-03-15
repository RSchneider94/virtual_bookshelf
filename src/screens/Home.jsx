import React from 'react';
import { useSelector } from 'react-redux';

import CategoryView from '../components/Categories/CategoryView';

export default function Home() {
  const categories = useSelector(state => state.categories);

  const categoriesSections = [];

  for (const [categoryKey, value] of Object.entries(categories)) {
    categoriesSections.push(
      <CategoryView
        key={categoryKey}
        categoryKey={categoryKey}
        categoryName={value}
      />
    );
  }

  return categoriesSections;
}
