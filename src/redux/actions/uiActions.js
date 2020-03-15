export const actionTypes = {
  SHOW_CONFIRMATION_MODAL: 'SHOW_CONFIRMATION_MODAL',
  CLOSE_CONFIRMATION_MODAL: 'CLOSE_CONFIRMATION_MODAL',
  SHOW_FEEDBACK_POPUP: 'SHOW_FEEDBACK_POPUP',
  CLEAR_FEEDBACK_POPUP: 'CLEAR_FEEDBACK_POPUP'
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
