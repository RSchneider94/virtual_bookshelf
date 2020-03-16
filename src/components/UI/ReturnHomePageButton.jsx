import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack } from '@material-ui/icons';

const useStyles = makeStyles({
  returnButton: {
    marginTop: 50
  }
});

export default function ReturnHomePageButton() {
  const classes = useStyles();

  const handleClick = () => {
    window.location.pathname = '/';
  };

  return (
    <Button
      variant="contained"
      className={classes.returnButton}
      startIcon={<ArrowBack />}
      onClick={handleClick}
    >
      Return to Home Page
    </Button>
  );
}
