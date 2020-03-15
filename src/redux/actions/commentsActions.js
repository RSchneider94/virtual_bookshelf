export const actionTypes = {
  ADD_COMMENT: 'ADD_COMMENT',
  EDIT_COMMENT: 'EDIT_COMMENT',
  REMOVE_COMMENT: 'REMOVE_COMMENT'
};

export const removeComment = commentId => ({
  // TODO: make with thunk
  type: actionTypes.REMOVE_COMMENT,
  payload: {
    commentId
  }
});
