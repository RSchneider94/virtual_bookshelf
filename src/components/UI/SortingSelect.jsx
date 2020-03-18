import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { SortByAlpha, CalendarToday } from '@material-ui/icons';
import StyledText from '../UI/StyledText';

// Actions
import { changeSorting } from '../../redux/actions/uiActions';

export default function SortingSelect() {
  const dispatch = useDispatch();
  const sorting = useSelector(state => state.ui.sorting);

  const [sortingValue, setSortingValue] = useState('alphabetic');

  useEffect(() => {
    setSortingValue(sorting);
  }, [sorting]);

  const handleChange = (_, value) => {
    dispatch(changeSorting(value));
  };

  return (
    <Box>
      <StyledText variant="body2" component="p" color="#fff">
        Sort by:
      </StyledText>
      <ToggleButtonGroup
        value={sortingValue}
        size="small"
        exclusive
        onChange={handleChange}
        aria-label="books sorting"
      >
        <ToggleButton value="alphabetic" aria-label="alphabetic">
          <SortByAlpha />
        </ToggleButton>
        <ToggleButton value="creation" aria-label="creation">
          <CalendarToday />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
