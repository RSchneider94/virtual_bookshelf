import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  listItem: {
    marginBottom: 4
  },
  label: {
    fontWeight: 'bold'
  }
});

export default function BookDetailsList(props) {
  const { creationDate, author, category, description } = props;
  const classes = useStyles();
  return (
    <ul>
      <li className={classes.listItem}>
        <Typography variant="body1" className={classes.label}>
          Created At:
        </Typography>
        <Typography variant="body2">{creationDate}</Typography>
      </li>
      <li className={classes.listItem}>
        <Typography variant="body1" className={classes.label}>
          Author:
        </Typography>
        <Typography variant="body2">{author}</Typography>
      </li>
      <li className={classes.listItem}>
        <Typography variant="body1" className={classes.label}>
          Category:
        </Typography>
        <Typography variant="body2">
          {category ? category : 'No Category'}
        </Typography>
      </li>
      <li className={classes.listItem}>
        <Typography variant="body1" className={classes.label}>
          Description:
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </li>
    </ul>
  );
}
