import React, { forwardRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';

// Actions
import { closeCommentFormModal } from '../../redux/actions/uiActions';
import { showFeedbackPopup } from '../../redux/actions/uiActions';

const useStyles = makeStyles({
  listItem: {
    marginBottom: 4
  },
  text: {
    color: '#fff'
  },
  label: {
    color: '#fff',
    fontWeight: 'bold'
  },
  formControl: {
    marginTop: 20,
    marginRight: 20
  }
});

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CommentFormModal() {
  const classes = useStyles();
  const { isModalOpen, actionType } = useSelector(
    state => state.ui.commentFormModal
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeCommentFormModal());
  };

  const handleConfirmation = () => {
    dispatch(closeCommentFormModal());
  };

  return (
    <div>
      <Dialog
        open={isModalOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        aria-labelledby="comment-form-modal-title"
        aria-describedby="comment-form-modal-description"
      >
        <DialogTitle id="comment-form-modal-title">
          {actionType === 'add' ? 'Add New Comment' : 'Edit Comment'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="comment-form-modal-description">
            {actionType === 'add'
              ? 'Add a new comment to this book.'
              : 'Edit the comment to this book'}
          </DialogContentText>
          <TextField
            rowsMax="40"
            fullWidth
            multiline
            required
            id="input-comment"
            type="textarea"
            label="Comment"
            placeholder="Write your comment, be creative! ✏️"
            className={classes.formControl}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmation} color="primary">
            {actionType === 'add' ? 'Insert' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
