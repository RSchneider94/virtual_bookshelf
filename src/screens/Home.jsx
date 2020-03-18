import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Add } from '@material-ui/icons';
import ButtonWithIcon from '../components/UI/ButtonWithIcon';
import SortingSelect from '../components/UI/SortingSelect';
import CategoryGrid from '../components/Categories/CategoryGrid';

// Actions
import { showAddBookFormModal } from '../redux/actions/uiActions';

const useStyles = makeStyles({
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default function Home() {
  const dispatch = useDispatch();
  const classes = useStyles();
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

  const handleAddBookClick = () => dispatch(showAddBookFormModal());

  return (
    <Box>
      <Box className={classes.buttonsContainer}>
        <ButtonWithIcon
          icon={<Add></Add>}
          text="Add New Book"
          clickHandler={handleAddBookClick}
        ></ButtonWithIcon>
        <SortingSelect></SortingSelect>
      </Box>
      {categoriesSections}
    </Box>
  );
}
