import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { AddComment } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import Comment from './Comment';

const useStyles = makeStyles({
  noCommentsText: {
    marginTop: 10
  }
});

export default function CommentsList({ bookComments }) {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h6" component="h2">
        What people are saying about this book?
      </Typography>
      <Button variant="contained" startIcon={<AddComment />}>
        Share your thought!
      </Button>
      {bookComments.length ? (
        bookComments.map(comment => (
          <Comment key={comment.id} {...comment}></Comment>
        ))
      ) : (
        <Typography variant="body1" className={classes.noCommentsText}>
          No comments for this book yet. Wanna share your thoughts?{' '}
          <span role="img" aria-label="emoji">
            😊
          </span>
        </Typography>
      )}
    </Box>
  );
}
