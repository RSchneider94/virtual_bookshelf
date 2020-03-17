import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button } from '@material-ui/core';
import { AddComment } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

// Actions
import { showAddCommentFormModal } from '../../redux/actions/uiActions';

// Components
import Comment from './Comment';
import StyledText from '../UI/StyledText';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative'
  },
  commentsSection: {
    marginTop: 30
  },
  addCommentButton: {
    marginTop: 10,
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: 10,
      right: 0,
      marginTop: 0
    }
  }
}));

export default function CommentsList({ bookId, bookComments }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleAddNewCommentButtonClick = () => {
    dispatch(showAddCommentFormModal(bookId));
  };

  return (
    <Box className={classes.container}>
      <StyledText variant="h6" component="h2" color="#fff">
        What people are saying about this book?
      </StyledText>
      <Button
        variant="contained"
        startIcon={<AddComment />}
        className={classes.addCommentButton}
        onClick={handleAddNewCommentButtonClick}
      >
        {bookComments.length
          ? 'Share your thought too!'
          : "Wanna be the first to comment something? Don't be shy!"}
      </Button>
      <Box className={classes.commentsSection}>
        {bookComments.length ? (
          bookComments
            .sort((a, b) => b.creationDate - a.creationDate)
            .map(comment => <Comment key={comment.id} {...comment}></Comment>)
        ) : (
          <StyledText variant="body1" color="#fff">
            No comments for this book yet. Wanna share your thoughts?{' '}
            <span role="img" aria-label="emoji">
              😊
            </span>
          </StyledText>
        )}
      </Box>
    </Box>
  );
}
