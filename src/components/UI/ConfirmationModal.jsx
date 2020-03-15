import React, { forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

// Actions
import { closeConfirmationModal } from '../../redux/actions/uiActions';
import { showFeedbackPopup } from '../../redux/actions/uiActions';
import { removeBook } from '../../redux/actions/booksActions';
import { removeComment } from '../../redux/actions/commentsActions';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmationModal() {
  const {
    isModalOpen,
    modalTitle,
    modalContent,
    itemToDelete,
    itemId
  } = useSelector(state => state.ui.confirmationModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeConfirmationModal());
  };

  const handleConfirmation = () => {
    if (itemToDelete === 'book') {
      dispatch(removeBook(itemId));
      dispatch(
        showFeedbackPopup('success', 'The book was successfully removed!')
      );
      handleClose();
      setTimeout(() => {
        window.location.pathname = '';
      }, 5000);
    } else if (itemToDelete === 'comment') {
      dispatch(removeComment(itemId));
      dispatch(
        showFeedbackPopup('success', 'The comment was successfully removed!')
      );
      handleClose();
    } else {
      handleClose();
    }
  };

  return (
    <div>
      <Dialog
        open={isModalOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="confirmation-modal-title"
        aria-describedby="confirmation-modal-description"
      >
        <DialogTitle id="confirmation-modal-title">{modalTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="confirmation-modal-description">
            {modalContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmation} color="primary">
            Yes, I'm sure!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
