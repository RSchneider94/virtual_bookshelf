import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

// Actions
import {
  showConfirmationModal,
  showEditCommentFormModal
} from '../../redux/actions/uiActions';

const useStyles = makeStyles({
  container: {
    marginTop: 10,
    marginBottom: 15
  },
  commentBody: {
    marginTop: 10
  },
  cardActions: {
    justifyContent: 'flex-end'
  }
});

export default function Comment(props) {
  const classes = useStyles();
  const { id, author, creationDate, body } = props;
  const dispatch = useDispatch();

  const handleEditCommentClick = commentId => () => {
    dispatch(showEditCommentFormModal(commentId));
  };

  const handleDeleteCommentConfirmClick = commentId => () => {
    dispatch(
      showConfirmationModal(
        'Comment Deletion',
        'Are you sure you want to remove this comment?',
        'comment',
        commentId
      )
    );
  };

  return (
    <Card className={classes.container}>
      <CardContent>
        <small>
          Written by {author} on {creationDate}:
        </small>
        <Typography variant="body1" className={classes.commentBody}>
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          title="Edit this comment"
          aria-label="edit the comment"
          onClick={handleEditCommentClick(id)}
        >
          <Edit></Edit>
        </IconButton>
        <IconButton
          title="Delete this comment"
          aria-label="delete the comment"
          onClick={handleDeleteCommentConfirmClick(id)}
        >
          <Delete></Delete>
        </IconButton>
      </CardActions>
    </Card>
  );
}
