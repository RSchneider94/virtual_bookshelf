export const actionTypes = {
  SHOW_CONFIRMATION_MODAL: 'SHOW_CONFIRMATION_MODAL',
  CLOSE_CONFIRMATION_MODAL: 'CLOSE_CONFIRMATION_MODAL',
  SHOW_FEEDBACK_POPUP: 'SHOW_FEEDBACK_POPUP',
  CLEAR_FEEDBACK_POPUP: 'CLEAR_FEEDBACK_POPUP',
  SHOW_ADD_BOOK_FORM_MODAL: 'SHOW_ADD_BOOK_FORM_MODAL',
  CLOSE_ADD_BOOK_FORM_MODAL: 'CLOSE_ADD_BOOK_FORM_MODAL',
  SHOW_EDIT_BOOK_FORM_MODAL: 'SHOW_EDIT_BOOK_FORM_MODAL',
  CLOSE_EDIT_BOOK_FORM_MODAL: 'CLOSE_EDIT_BOOK_FORM_MODAL',
  SHOW_ADD_COMMENT_FORM_MODAL: 'SHOW_ADD_COMMENT_FORM_MODAL',
  CLOSE_ADD_COMMENT_FORM_MODAL: 'CLOSE_ADD_COMMENT_FORM_MODAL',
  SHOW_EDIT_COMMENT_FORM_MODAL: 'SHOW_EDIT_COMMENT_FORM_MODAL',
  CLOSE_EDIT_COMMENT_FORM_MODAL: 'CLOSE_EDIT_COMMENT_FORM_MODAL'
};

export const showConfirmationModal = (title, content, itemToDelete, itemId) => {
  return dispatch => {
    dispatch({
      type: actionTypes.SHOW_CONFIRMATION_MODAL,
      payload: {
        title,
        content,
        itemToDelete,
        itemId
      }
    });
  };
};

export const closeConfirmationModal = () => {
  return dispatch => {
    dispatch({ type: actionTypes.CLOSE_CONFIRMATION_MODAL });
  };
};

export const showFeedbackPopup = (severity, content) => {
  return dispatch => {
    dispatch({
      type: actionTypes.SHOW_FEEDBACK_POPUP,
      payload: {
        severity,
        content
      }
    });
  };
};

export const clearFeedbackPopup = () => {
  return dispatch => {
    dispatch({ type: actionTypes.CLEAR_FEEDBACK_POPUP });
  };
};

export const showAddBookFormModal = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.SHOW_ADD_BOOK_FORM_MODAL
    });
  };
};

export const closeAddBookFormModal = () => {
  return dispatch => {
    dispatch({ type: actionTypes.CLOSE_ADD_BOOK_FORM_MODAL });
  };
};

export const showEditBookFormModal = bookId => {
  return dispatch => {
    dispatch({
      type: actionTypes.SHOW_EDIT_BOOK_FORM_MODAL,
      payload: {
        bookId
      }
    });
  };
};

export const closeEditBookFormModal = () => {
  return dispatch => {
    dispatch({ type: actionTypes.CLOSE_EDIT_BOOK_FORM_MODAL });
  };
};

export const showAddCommentFormModal = parentId => {
  return dispatch => {
    dispatch({
      type: actionTypes.SHOW_ADD_COMMENT_FORM_MODAL,
      payload: {
        parentId
      }
    });
  };
};

export const closeAddCommentFormModal = () => {
  return dispatch => {
    dispatch({ type: actionTypes.CLOSE_ADD_COMMENT_FORM_MODAL });
  };
};

export const showEditCommentFormModal = commentId => {
  return dispatch => {
    dispatch({
      type: actionTypes.SHOW_EDIT_COMMENT_FORM_MODAL,
      payload: {
        commentId
      }
    });
  };
};

export const closeEditCommentFormModal = () => {
  return dispatch => {
    dispatch({ type: actionTypes.CLOSE_EDIT_COMMENT_FORM_MODAL });
  };
};
