import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import { changeSorting } from '../../redux/actions/uiActions';

export default function SortingSelect() {
  const dispatch = useDispatch();
  const sorting = useSelector(state => state.ui.sorting);

  const [sortingValue, setSortingValue] = useState('alphabetic');

  useEffect(() => {
    setSortingValue(sorting);
  }, [sorting]);

  const handleChange = e => {
    dispatch(changeSorting(e.target.value));
  };

  return (
    <FormControl variant="outlined">
      <InputLabel id="select-books-sorting-label">Sorting</InputLabel>
      <Select
        labelId="select-books-sorting-label"
        id="select-books-sorting"
        value={sortingValue || ''}
        onChange={handleChange}
      >
        <MenuItem value="alphabetic">Alphabetic</MenuItem>
        <MenuItem value="creation">Creation Date</MenuItem>
      </Select>
    </FormControl>
  );
}
