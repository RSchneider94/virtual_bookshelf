import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledText = withStyles(({ textColor, alignment }) => ({
  root: {
    color: textColor,
    textAlign: alignment
  }
}))(Typography);

export default StyledText;
