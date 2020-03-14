import { Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledCard = withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '220px',
    height: '300px'
  }
})(Card);

export default StyledCard;
