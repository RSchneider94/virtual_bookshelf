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
import { addBook } from '../../redux/actions/booksActions';
import { closeAddBookFormModal } from '../../redux/actions/uiActions';
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

export default function AddBookFormModal() {
  const classes = useStyles();
  const { isModalOpen } = useSelector(state => state.ui.addBookFormModal);
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
  // Persisted State
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: ''
  });
  const [validationErrors, setValidationErrors] = useState({
    title: true,
    author: true,
    category: true,
    description: true
  });

  // Handles
  const handleInputChange = event => {
    if (event.target.value.length && event.target.value !== '') {
      setValidationErrors({
        ...validationErrors,
        [event.target.name]: false
      });
    } else {
      setValidationErrors({
        ...validationErrors,
        [event.target.name]: true
      });
    }
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleClose = () => {
    dispatch(closeAddBookFormModal());
  };

  const handleConfirmation = () => {
    if (Object.values(validationErrors).some(Boolean)) {
      return 0;
    }
    dispatch(addBook({ ...formData }));
    setFormData({
      title: '',
      author: '',
      category: '',
      description: ''
    });
    handleClose();
    dispatch(showFeedbackPopup('success', 'The book was successfully added!'));
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
        <DialogTitle id="book-form-modal-title">Add New Book</DialogTitle>
        <DialogContent>
          <DialogContentText id="book-form-modal-description">
            Add a new book to your Virtual Bookshelf.
          </DialogContentText>
          <form autoComplete="false">
            <TextField
              required
              error={validationErrors.title}
              id="input-book-title"
              name="title"
              type="text"
              label="Title"
              placeholder="Insert the title"
              value={formData.title}
              className={classes.formControl}
              onChange={handleInputChange}
            />
            <TextField
              required
              error={validationErrors.author}
              id="input-book-author"
              name="author"
              type="text"
              label="Author"
              placeholder="Insert the author"
              value={formData.author}
              className={classes.formControl}
              onChange={handleInputChange}
            />
            <FormControl className={classes.formControl}>
              <InputLabel
                id="input-book-category-label"
                style={{ top: formData.category ? '' : '-15px' }}
              >
                Category
              </InputLabel>
              <Select
                required
                error={validationErrors.category}
                labelId="input-book-category-label"
                id="input-book-category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                {categoriesOptions}
              </Select>
            </FormControl>
            <TextField
              rowsMax="20"
              fullWidth
              multiline
              required
              error={validationErrors.description}
              id="input-book-description"
              name="description"
              type="textarea"
              label="Description"
              placeholder="Insert the description"
              value={formData.description}
              className={classes.formControl}
              onChange={handleInputChange}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmation} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
