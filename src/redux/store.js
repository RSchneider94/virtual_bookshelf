import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash.throttle';
import { loadState, saveState } from '../services/localStorage';
import ui from './reducers/uiReducer';
import books from './reducers/booksReducer';
import comments from './reducers/commentsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Try to load state from localStorage
const persistedState = loadState();

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
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

// Save to localStorage
store.subscribe(
  throttle(() => {
    saveState({
      books: store.getState().books,
      comments: store.getState().comments
    });
  }, 1000)
);

export default store;
