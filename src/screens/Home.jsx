import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Box } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import ButtonWithIcon from '../components/UI/ButtonWithIcon';
import SortingSelect from '../components/UI/SortingSelect';
import CategoryGrid from '../components/Categories/CategoryGrid';

// Actions
import { showAddBookFormModal } from '../redux/actions/uiActions';

export default function Home() {
  const dispatch = useDispatch();
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
      <ButtonWithIcon
        icon={<Add></Add>}
        text="Add New Book"
        clickHandler={handleAddBookClick}
      ></ButtonWithIcon>
      <SortingSelect></SortingSelect>
      {categoriesSections}
    </Box>
  );
}
