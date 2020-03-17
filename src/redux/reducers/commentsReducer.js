import { actionTypes } from '../actions/commentsActions';
import { generateRandomId } from '../../utils/utils';

export default function comments(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      const newComment = {
        id: generateRandomId(),
        parentId: action.payload.parentId,
        creationDate: Date.now(),
        body: action.payload.body,
        author: action.payload.author,
        deleted: false
      };
      return [...state, newComment];
    case actionTypes.EDIT_COMMENT:
      return state.map(comment => {
        if (comment.id === action.payload.commentId) {
          return { ...comment, body: action.payload.body };
        }
        return comment;
      });
    case actionTypes.REMOVE_COMMENT:
      return state.map(comment => {
        if (comment.id === action.payload.commentId) {
          return { ...comment, deleted: true };
        }
        return comment;
      });
    default:
      return state;
  }
}
