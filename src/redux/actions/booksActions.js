export const actionTypes = {
  ADD_BOOK: 'ADD_BOOK',
  EDIT_BOOK: 'EDIT_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
  CHANGE_BOOK_CATEGORY: 'CHANGE_BOOK_CATEGORY'
};

export const addBook = ({ title, description, author, category }) => {
  return dispatch => {
    dispatch({
      type: actionTypes.ADD_BOOK,
      payload: {
        title,
        description,
        author,
        category
      }
    });
  };
};

export const editBook = (bookId, { title, author, category, description }) => {
  return dispatch => {
    dispatch({
      type: actionTypes.EDIT_BOOK,
      payload: {
        bookId,
        title,
        author,
        category,
        description
      }
    });
  };
};

export const changeBookCategory = (bookId, newCategory) => {
  return dispatch => {
    dispatch({
      type: actionTypes.CHANGE_BOOK_CATEGORY,
      payload: {
        bookId,
        newCategory
      }
    });
  };
};

export const removeBook = bookId => {
  return dispatch => {
    dispatch({
      type: actionTypes.REMOVE_BOOK,
      payload: {
        bookId
      }
    });
  };
};
