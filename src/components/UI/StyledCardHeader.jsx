import { CardHeader } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledCardHeader = withStyles({
  root: {
    textAlign: 'center',
    borderBottom: '1px solid #b8dcde'
  }
})(CardHeader);

export default StyledCardHeader;
