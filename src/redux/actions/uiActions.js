export const actionTypes = {
  SHOW_CONFIRMATION_MODAL: 'SHOW_CONFIRMATION_MODAL',
  CLOSE_CONFIRMATION_MODAL: 'CLOSE_CONFIRMATION_MODAL',
  SHOW_FEEDBACK_POPUP: 'SHOW_FEEDBACK_POPUP',
  CLEAR_FEEDBACK_POPUP: 'CLEAR_FEEDBACK_POPUP',
  SHOW_BOOK_FORM_MODAL: 'SHOW_BOOK_FORM_MODAL',
  CLOSE_BOOK_FORM_MODAL: 'CLOSE_BOOK_FORM_MODAL',
  SHOW_COMMENT_FORM_MODAL: 'SHOW_COMMENT_FORM_MODAL',
  CLOSE_COMMENT_FORM_MODAL: 'CLOSE_COMMENT_FORM_MODAL'
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

export const showBookFormModal = actionType => {
  return dispatch => {
    dispatch({
      type: actionTypes.SHOW_BOOK_FORM_MODAL,
      payload: {
        actionType
      }
    });
  };
};

export const closeBookFormModal = () => {
  return dispatch => {
    dispatch({ type: actionTypes.CLOSE_BOOK_FORM_MODAL });
  };
};

export const showCommentFormModal = (actionType, parentId) => {
  /*
    @param actionType: 'add' or 'edit'
    @param parentId: in case of 'add' for actionType it will be the id of the parent book,
      but if it's to edit book we handle it as commentId in reducers
  */
  return dispatch => {
    dispatch({
      type: actionTypes.SHOW_COMMENT_FORM_MODAL,
      payload: {
        actionType,
        parentId
      }
    });
  };
};

export const closeCommentFormModal = () => {
  return dispatch => {
    dispatch({ type: actionTypes.CLOSE_COMMENT_FORM_MODAL });
  };
};
