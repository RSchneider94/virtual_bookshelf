import { createStore, combineReducers } from 'redux';
import books from './reducers/books';
import comments from './reducers/comments';

const store = createStore(
  combineReducers({
    categories: (
      state = {
        noCategory: 'No Category',
        reading: 'Reading',
        wantToRead: 'Want to Read',
        read: 'Read'
      }
    ) => state,
    books,
    comments
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
