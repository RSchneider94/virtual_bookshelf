import React, { forwardRef, useState, useEffect } from 'react';
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
import { closeEditBookFormModal } from '../../redux/actions/uiActions';
import { editBook } from '../../redux/actions/booksActions';
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

export default function EditBookFormModal() {
  const classes = useStyles();
  const dispatch = useDispatch();

  // Used for selector element to change the book's category
  // Persisted State
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: ''
  });
  const [validationErrors, setValidationErrors] = useState({
    title: false,
    author: false,
    category: false,
    description: false
  });

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

  // Redux State for the modal
  const { isModalOpen, bookId } = useSelector(
    state => state.ui.editBookFormModal
  );
  const bookObject = useSelector(state =>
    state.books.find(book => book.id === bookId)
  );

  useEffect(() => {
    if (bookObject) {
      setFormData({
        title: bookObject.title,
        author: bookObject.author,
        category:
          bookObject.category === null ? 'No Category' : bookObject.category,
        description: bookObject.description
      });
    }
  }, [bookObject]);

  // Handles
  const handleInputChange = event => {
    if (event.target.value.length) {
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
    dispatch(closeEditBookFormModal());
  };

  const handleConfirmation = () => {
    if (Object.values(validationErrors).some(Boolean)) {
      return 0;
    }
    dispatch(editBook(bookId, { ...formData }));
    setFormData({
      title: '',
      author: '',
      category: '',
      description: ''
    });
    handleClose();
    dispatch(showFeedbackPopup('success', 'The book was successfully edited!'));
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
        <DialogTitle id="book-form-modal-title">Edit This Book</DialogTitle>
        <DialogContent>
          <DialogContentText id="book-form-modal-description">
            Edit this book from your Virtual Bookshelf.
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
              <InputLabel id="input-book-category-label">Category</InputLabel>
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
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
