import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, FormControl, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  listItem: {
    marginBottom: 4
  },
  text: {
    color: '#fff'
  },
  label: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default function BookDetailsList({
  creationDate,
  author,
  description,
  selectCategory,
  handleCategorySelect
}) {
  const classes = useStyles();

  // Categories from state to fill out the select
  const categories = useSelector(state => state.categories);
  const categoriesOptions = [];
  for (const [categoryKey, categoryValue] of Object.entries(categories)) {
    categoriesOptions.push(
      <MenuItem key={categoryKey} value={categoryValue}>
        {categoryValue}
      </MenuItem>
    );
  }

  return (
    <ul>
      <li className={classes.listItem}>
        <Typography variant="body1" className={classes.label}>
          Created At:
        </Typography>
        <Typography variant="body2" className={classes.text}>
          {creationDate}
        </Typography>
      </li>
      <li className={classes.listItem}>
        <Typography variant="body1" className={classes.label}>
          Author:
        </Typography>
        <Typography variant="body2" className={classes.text}>
          {author}
        </Typography>
      </li>
      <li className={classes.listItem}>
        <Typography variant="body1" className={classes.label}>
          Category:
        </Typography>
        <FormControl>
          <Select
            value={selectCategory}
            onChange={handleCategorySelect}
            className={classes.text}
          >
            {categoriesOptions}
          </Select>
        </FormControl>
      </li>
      <li className={classes.listItem}>
        <Typography variant="body1" className={classes.label}>
          Description:
        </Typography>
        <Typography variant="body2" className={classes.text}>
          {description}
        </Typography>
      </li>
    </ul>
  );
}
