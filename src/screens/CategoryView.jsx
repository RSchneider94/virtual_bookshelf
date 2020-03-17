import React from 'react';
import { useStore } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

// Components
import CategoryGrid from '../components/Categories/CategoryGrid';
import ButtonWithIcon from '../components/UI/ButtonWithIcon';

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
      <ButtonWithIcon
        icon={<ArrowBack></ArrowBack>}
        text="Return to Home Page"
        clickHandler={() => {
          window.location.pathname = '/';
        }}
      ></ButtonWithIcon>
    </Box>
  );
}
