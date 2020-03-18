import React from 'react';
import { useStore } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const categoryName = useStore().getState().categories[categoryId];

  const handleReturnClick = () => history.push('/');

  return (
    <Box className={classes.container}>
      <CategoryGrid
        categoryKey={categoryId}
        categoryName={categoryName}
      ></CategoryGrid>
      <ButtonWithIcon
        icon={<ArrowBack></ArrowBack>}
        text="Return to Home Page"
        customStyles={{ marginTop: 50 }}
        clickHandler={handleReturnClick}
      ></ButtonWithIcon>
    </Box>
  );
}
