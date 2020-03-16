import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    color: props => props.color,
    textAlign: props => props.textAlign || undefined
  }
});

export default function StyledText(props) {
  const { variant, component, children, ...styleProps } = props;

  const classes = useStyles(styleProps);
  return (
    <Typography
      variant={variant}
      component={component}
      className={classes.root}
    >
      {children}
    </Typography>
  );
}
