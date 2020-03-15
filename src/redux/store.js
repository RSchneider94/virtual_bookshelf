import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ui from './reducers/uiReducer';
import books from './reducers/booksReducer';
import comments from './reducers/commentsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    ui,
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
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
