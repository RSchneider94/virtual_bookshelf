import { actionTypes } from '../actions/commentsActions';
import { generateRandomId } from '../../utils/utils';

const initialState = [
  {
    id: 0,
    parentId: 2,
    creationDate: Date.now(),
    body:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    author: 'José',
    deleted: false
  },
  {
    id: 1,
    parentId: 2,
    creationDate: Date.now(),
    body:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    author: 'José',
    deleted: false
  },
  {
    id: 2,
    parentId: 2,
    creationDate: Date.now(),
    body:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    author: 'José',
    deleted: false
  }
];

export default function comments(state = initialState, action) {
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
