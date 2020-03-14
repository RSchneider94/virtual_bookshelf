import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import CategoryView from '../components/Categories/CategoryView';

const useStyles = makeStyles({
  root: {}
});

export default function Home() {
  const classes = useStyles();
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
