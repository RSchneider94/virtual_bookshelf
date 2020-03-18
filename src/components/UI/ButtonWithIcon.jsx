import React from 'react';
import { Button } from '@material-ui/core';

export default function ButtonWithIcon({
  icon,
  text,
  clickHandler,
  customStyles
}) {
  return (
    <Button
      variant="contained"
      style={customStyles ? customStyles : null}
      startIcon={icon}
      onClick={clickHandler}
    >
      {text}
    </Button>
  );
}
