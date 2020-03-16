import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Components
import Logo from '../UI/Logo';

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
      <Link to="/">
        <Logo></Logo>
      </Link>
    </Box>
  );
}
