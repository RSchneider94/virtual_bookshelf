import React, { forwardRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';

// Actions
import { closeEditCommentFormModal } from '../../redux/actions/uiActions';
import { editComment } from '../../redux/actions/commentsActions';
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

export default function EditCommentFormModal() {
  const classes = useStyles();
  const dispatch = useDispatch();

  // Redux State
  const { isModalOpen, commentId } = useSelector(
    state => state.ui.editCommentFormModal
  );
  const commentObject = useSelector(state =>
    state.comments.find(comment => comment.id === commentId)
  );

  // Persisted State
  const [comment, setComment] = useState('');

  // Watch changes into comment
  useEffect(() => {
    setComment(commentObject && commentObject.body);
  }, [commentObject]);

  // Handles
  const handleInputChange = e => {
    setComment(e.target.value);
  };

  const handleClose = () => {
    dispatch(closeEditCommentFormModal());
  };

  const handleEditCommentSubmit = () => {
    dispatch(editComment(commentId, comment));
    setComment('');
    handleClose();
    dispatch(
      showFeedbackPopup('success', 'The comment was successfully edited!')
    );
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
        aria-labelledby="edit-comment-form-modal-title"
        aria-describedby="edit-comment-form-modal-description"
      >
        <DialogTitle id="edit-comment-form-modal-title">
          Edit Comment
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="edit-comment-form-modal-description">
            Edit this comment to this book.
          </DialogContentText>
          <form autoComplete="false">
            <TextField
              rows="2"
              rowsMax="40"
              autoFocus
              fullWidth
              multiline
              required
              id="input-edit-comment"
              type="textarea"
              label="Comment"
              value={comment}
              className={classes.formControl}
              onChange={handleInputChange}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditCommentSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
