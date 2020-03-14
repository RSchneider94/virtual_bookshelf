import { CardHeader } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledCardHeader = withStyles({
  root: {
    textAlign: 'center'
  }
})(CardHeader);

export default StyledCardHeader;
