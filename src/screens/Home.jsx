import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Category from '../components/Home/Category';

const useStyles = makeStyles({
  root: {}
});

export default function Home() {
  const classes = useStyles();
  const categories = useSelector(state => state.categories);

  const categoriesSections = [];

  for (const [categoryKey, value] of Object.entries(categories)) {
    categoriesSections.push(
      <Category
        key={categoryKey}
        categoryKey={categoryKey}
        categoryName={value}
      />
    );
  }

  return categoriesSections;
}
