export const actionTypes = {
  ADD_COMMENT: 'ADD_COMMENT',
  EDIT_COMMENT: 'EDIT_COMMENT',
  REMOVE_COMMENT: 'REMOVE_COMMENT'
};

export const addComment = (parentId, body, author) => {
  return dispatch => {
    dispatch({
      type: actionTypes.ADD_COMMENT,
      payload: {
        parentId,
        body,
        author
      }
    });
  };
};

export const editComment = (commentId, body) => {
  return dispatch => {
    dispatch({
      type: actionTypes.EDIT_COMMENT,
      payload: {
        commentId,
        body
      }
    });
  };
};

export const removeComment = commentId => {
  return dispatch => {
    dispatch({
      type: actionTypes.REMOVE_COMMENT,
      payload: {
        commentId
      }
    });
  };
};
