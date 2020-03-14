import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

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
  const { author, creationDate, body } = props;

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
        <IconButton title="Edit this comment" aria-label="edit the comment">
          <Edit></Edit>
        </IconButton>
        <IconButton title="Delete this comment" aria-label="delete the comment">
          <Delete></Delete>
        </IconButton>
      </CardActions>
    </Card>
  );
}
