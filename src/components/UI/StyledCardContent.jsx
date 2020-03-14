import { CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledCardContent = withStyles({
  root: {
    padding: 30,
    borderTop: '2px solid #dadada',
    borderBottom: '2px solid #dadada'
  }
})(CardContent);

export default StyledCardContent;
