import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    position: 'static',
    paddingTop: 20,
    paddingLeft: 20,
    width: '100%'
  },
  title: {
    color: '#fff'
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Typography variant="h4" className={classes.title}>
        Virtual Bookshelf
      </Typography>
    </Box>
  );
}
