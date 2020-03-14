import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StyledCard from '../UI/StyledCard';
import StyledCardHeader from '../UI/StyledCardHeader';

const useStyles = makeStyles({
  listItem: {
    marginBottom: 4
  },
  label: {
    fontWeight: 'bold'
  }
});

export default function Book(props) {
  const { creationDate, title, description, author, category } = props;
  const classes = useStyles();

  return (
    <StyledCard>
      <StyledCardHeader title={title}></StyledCardHeader>
      <CardContent>
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
            <Typography variant="body2">
              {description.length > 50
                ? `${description.substring(0, 50)}...`
                : description}
            </Typography>
          </li>
        </ul>
      </CardContent>
    </StyledCard>
  );
}
