import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import BookCover from '../components/Books/BookCover';
import BookDetailsList from '../components/Books/BookDetailsList';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'flex-start'
    }
  },
  bookDetails: {
    marginTop: 10,
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      marginLeft: 20,
      width: '80%'
    }
  }
}));

export default function BookDetails() {
  const classes = useStyles();
  const { bookId } = useParams();
  const book = useSelector(state =>
    state.books.filter(book => book.id === parseInt(bookId)).pop()
  );

  return (
    <Box className={classes.container}>
      <BookCover id={book.id} title={book.title}></BookCover>
      <Box className={classes.bookDetails}>
        <BookDetailsList {...book}></BookDetailsList>
      </Box>
    </Box>
  );
}
