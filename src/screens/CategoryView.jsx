import React from 'react';
import { useStore } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Components
import CategoryGrid from '../components/Categories/CategoryGrid';
import ReturnHomePageButton from '../components/UI/ReturnHomePageButton';

const useStyles = makeStyles({
  container: {
    marginTop: 30
  }
});

export default function CategoryView() {
  const classes = useStyles();
  const { categoryId } = useParams();
  const categoryName = useStore().getState().categories[categoryId];

  return (
    <Box className={classes.container}>
      <CategoryGrid
        categoryKey={categoryId}
        categoryName={categoryName}
      ></CategoryGrid>
      <ReturnHomePageButton></ReturnHomePageButton>
    </Box>
  );
}
