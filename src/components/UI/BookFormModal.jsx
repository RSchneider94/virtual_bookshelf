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
import { closeBookFormModal } from '../../redux/actions/uiActions';
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

export default function BookFormModal() {
  const classes = useStyles();
  const { isModalOpen, actionType } = useSelector(
    state => state.ui.bookFormModal
  );
  const dispatch = useDispatch();

  // Get predefined categories from state
  const categories = useSelector(state => state.categories);

  // Fill the select and options
  const categoriesOptions = [];
  for (const [categoryKey, categoryValue] of Object.entries(categories)) {
    categoriesOptions.push(
      <MenuItem key={categoryKey} value={categoryValue}>
        {categoryValue}
      </MenuItem>
    );
  }

  // Used for selector element to change the book's category
  const [selectCategory, setSelectCategory] = useState('No Category');

  const handleCategorySelect = event => {
    setSelectCategory(event.target.value);
  };

  const handleClose = () => {
    dispatch(closeBookFormModal());
  };

  const handleConfirmation = () => {
    dispatch(closeBookFormModal());
  };

  return (
    <div>
      <Dialog
        open={isModalOpen}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="book-form-modal-title"
        aria-describedby="book-form-modal-description"
      >
        <DialogTitle id="book-form-modal-title">
          {actionType === 'add' ? 'Add New Book' : 'Edit Book'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="book-form-modal-description">
            {actionType === 'add'
              ? 'Add a new book to your Virtual Bookshelf.'
              : 'Edit the book in your Virtual Bookshelf'}
          </DialogContentText>
          <TextField
            required
            id="input-book-title"
            type="text"
            label="Title"
            placeholder="Insert the title"
            className={classes.formControl}
          />
          <TextField
            required
            id="input-book-author"
            type="text"
            label="Author"
            placeholder="Insert the author"
            className={classes.formControl}
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="input-book-category-label">Category</InputLabel>
            <Select
              required
              labelId="input-book-category-label"
              id="input-book-category"
              value={selectCategory}
              onChange={handleCategorySelect}
            >
              {categoriesOptions}
            </Select>
          </FormControl>
          <TextField
            rowsMax="20"
            fullWidth
            multiline
            required
            id="input-book-description"
            type="textarea"
            label="Description"
            placeholder="Insert the description"
            className={classes.formControl}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmation} color="primary">
            {actionType === 'add' ? 'Add' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
