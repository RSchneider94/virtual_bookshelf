import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  returnButton: {
    marginTop: 50
  }
});

export default function ButtonWithIcon({ icon, text, clickHandler }) {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={classes.returnButton}
      startIcon={icon}
      onClick={clickHandler}
    >
      {text}
    </Button>
  );
}
