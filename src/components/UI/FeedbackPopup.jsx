import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

// Actions
import { clearFeedbackPopup } from '../../redux/actions/uiActions';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));

export default function FeedbackPopup() {
  const classes = useStyles();
  const { isPopupOpen, popupSeverity, popupContent } = useSelector(
    state => state.ui.feedbackPopup
  );
  const dispatch = useDispatch();

  const handleClose = () => dispatch(clearFeedbackPopup());

  return (
    <div className={classes.root}>
      <Snackbar
        open={isPopupOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <Alert onClose={handleClose} severity={popupSeverity}>
          {popupContent}
        </Alert>
      </Snackbar>
    </div>
  );
}
