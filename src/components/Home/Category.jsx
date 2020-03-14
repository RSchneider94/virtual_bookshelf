import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Book from './Book';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  noBooksText: {
    textAlign: 'center'
  },
  booksContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
});

export default function Category({ categoryKey, categoryName }) {
  const classes = useStyles();

  const booksInCategory = useSelector(state => {
    if (categoryKey === 'noCategory') {
      return state.books.filter(
        book => book.category === null || book.category === categoryKey
      );
    }
    return state.books.filter(book => book.category === categoryKey);
  });

  const bookElements = booksInCategory.map(book => (
    <Book key={book.id} {...book}></Book>
  ));

  return (
    <Box>
      <Typography variant="h4" component="h2" className={classes.title}>
        {categoryName}
      </Typography>
      {bookElements.length ? (
        <Box className={classes.booksContainer}>{bookElements}</Box>
      ) : (
        <Typography variant="body1" className={classes.noBooksText}>
          No books for this category. What about creating one?{' '}
          <span role="img" aria-label="emoji">
            😊
          </span>
        </Typography>
      )}
    </Box>
  );
}
