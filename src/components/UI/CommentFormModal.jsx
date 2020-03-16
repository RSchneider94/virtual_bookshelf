import React, { forwardRef, useState, useContext } from 'react';
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
import { closeCommentFormModal } from '../../redux/actions/uiActions';
import { addComment } from '../../redux/actions/commentsActions';
import { showFeedbackPopup } from '../../redux/actions/uiActions';

// Context
import { UserContext } from '../../context/userContext';

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
  const { isModalOpen, actionType, parentId } = useSelector(
    state => state.ui.commentFormModal
  );
  const user = useContext(UserContext);
  const dispatch = useDispatch();

  const [comment, setComment] = useState('');

  const handleInputChange = e => {
    setComment(e.target.value);
  };

  const handleClose = () => {
    dispatch(closeCommentFormModal());
  };

  const handleAddNewCommentSubmit = () => {
    dispatch(addComment(parentId, comment, user));
    setComment('');
    handleClose();
    dispatch(
      showFeedbackPopup('success', 'The comment was successfully added!')
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
          <form autoComplete="false">
            <TextField
              rows="2"
              rowsMax="40"
              fullWidth
              multiline
              required
              id="input-comment"
              type="textarea"
              label="Comment"
              placeholder="Write your comment, be creative! ✏️"
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
          <Button onClick={handleAddNewCommentSubmit} color="primary">
            {actionType === 'add' ? 'Insert' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}