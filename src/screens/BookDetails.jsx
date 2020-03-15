import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { changeBookCategory } from '../redux/actions/booksActions';
import { showConfirmationModal } from '../redux/actions/uiActions';

// Components
import BookCover from '../components/Books/BookCover';
import BookDetailsList from '../components/Books/BookDetailsList';
import CommentsList from '../components/Comments/CommentsList';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    }
  },
  bookActions: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    right: 0,
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
  bookDetails: {
    marginTop: 10,
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      marginLeft: 20,
      width: '80%'
    }
  },
  comments: {
    marginTop: 20,
    borderTop: '1px solid black',
    width: '100%'
  },
  noBookWithIdText: {
    textAlign: 'center',
    color: '#fff'
  }
}));

export default function BookDetails() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { bookId } = useParams();

  // Get the book we are sending in param
  const book = useSelector(state =>
    state.books.find(book => book.id === parseInt(bookId))
  );

  // And their comments
  const bookComments = useSelector(state =>
    state.comments.filter(
      comment => comment.parentId === parseInt(bookId) && !comment.deleted
    )
  );

  // Used for selector element to change the book's category
  const [selectCategory, setSelectCategory] = useState(
    book.category !== null ? book.category : 'No Category'
  );
  const handleCategorySelect = event => {
    setSelectCategory(event.target.value);
    dispatch(changeBookCategory(book.id, event.target.value));
  };

  const handleDeleteBookConfirmClick = itemId => () => {
    dispatch(
      showConfirmationModal(
        'Book Deletion',
        'Are you sure you want to remove this book?',
        'book',
        itemId
      )
    );
  };

  if (book) {
    if (book.deleted) {
      return (
        <Typography variant="body1" className={classes.noBookWithIdText}>
          Sorry! This book is currently deleted. Redirecting you to home page.
        </Typography>
      );
    }
    return (
      <Box className={classes.container}>
        <BookCover id={book.id} title={book.title}></BookCover>
        <Box className={classes.bookDetails}>
          <BookDetailsList
            selectCategory={selectCategory}
            handleCategorySelect={handleCategorySelect}
            {...book}
          ></BookDetailsList>
        </Box>
        <Box className={classes.bookActions}>
          <IconButton title="Edit this book" aria-label="edit the book">
            <Edit></Edit>
          </IconButton>
          <IconButton
            title="Delete this book"
            aria-label="delete the book"
            onClick={handleDeleteBookConfirmClick(book.id)}
          >
            <Delete></Delete>
          </IconButton>
        </Box>
        <Box className={classes.comments}>
          <CommentsList bookComments={bookComments}></CommentsList>
        </Box>
      </Box>
    );
  }
  return (
    <Box className={classes.container}>
      <Typography variant="body1" className={classes.noBookWithIdText}>
        Sorry, no books found with the provided ID!
        <span role="img" aria-label="emoji">
          😔
        </span>
      </Typography>
    </Box>
  );
}
