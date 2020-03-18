import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { changeSorting } from '../../redux/actions/uiActions';

const useStyles = makeStyles({
  select: {
    backgroundColor: '#fff',
    lineHeight: '0.1875em'
  }
});

export default function SortingSelect() {
  const dispatch = useDispatch();
  const classes = useStyles();
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
      <Select
        labelId="select-books-sorting-label"
        id="select-books-sorting"
        className={classes.select}
        value={sortingValue || ''}
        onChange={handleChange}
      >
        <MenuItem value="alphabetic">Alphabetic</MenuItem>
        <MenuItem value="creation">Creation Date</MenuItem>
      </Select>
    </FormControl>
  );
}
