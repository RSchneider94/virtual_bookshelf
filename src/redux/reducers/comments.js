import { actionTypes } from '../actions/comments';
const initialState = [
  {
    id: 0,
    parentId: 2,
    creationDate: Date.now(),
    body: 'Very good',
    author: 'José',
    deleted: false
  }
];

export default function comments(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
