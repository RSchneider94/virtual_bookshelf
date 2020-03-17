import { actionTypes } from '../actions/booksActions';
import { generateRandomId } from '../../utils/utils';

export default function books(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      const newBook = {
        id: generateRandomId(),
        creationDate: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        author: action.payload.author,
        category: action.payload.category,
        deleted: false
      };
      return [...state, newBook];
    case actionTypes.EDIT_BOOK:
      return state.map(book => {
        if (book.id === action.payload.bookId) {
          return {
            ...book,
            title: action.payload.title,
            author: action.payload.author,
            category: action.payload.category,
            description: action.payload.description
          };
        }
        return book;
      });
    case actionTypes.CHANGE_BOOK_CATEGORY:
      return state.map(book => {
        if (book.id === action.payload.bookId) {
          return { ...book, category: action.payload.newCategory };
        }
        return book;
      });
    case actionTypes.REMOVE_BOOK:
      return state.map(book => {
        if (book.id === action.payload.bookId) {
          return { ...book, deleted: true };
        }
        return book;
      });
    default:
      return state;
  }
}
