export const actionTypes = {
  ADD_BOOK: 'ADD_BOOK',
  EDIT_BOOK: 'EDIT_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
  CHANGE_BOOK_CATEGORY: 'CHANGE_BOOK_CATEGORY'
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
