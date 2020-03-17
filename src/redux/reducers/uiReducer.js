import { actionTypes } from '../actions/uiActions';

const initialState = {
  feedbackPopup: {
    isPopupOpen: false,
    popupSeverity: 'success',
    popupContent: ''
  },
  confirmationModal: {
    isModalOpen: false,
    modalTitle: '',
    modalContent: '',
    itemToDelete: '',
    itemId: ''
  },
  addBookFormModal: {
    isModalOpen: false
  },
  addCommentFormModal: {
    isModalOpen: false,
    parentId: ''
  },
  editCommentFormModal: {
    isModalOpen: false,
    commentId: ''
  }
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SHOW_CONFIRMATION_MODAL:
      return {
        ...state,
        confirmationModal: {
          isModalOpen: true,
          modalTitle: action.payload.title,
          modalContent: action.payload.content,
          itemToDelete: action.payload.itemToDelete,
          itemId: action.payload.itemId
        }
      };
    case actionTypes.CLOSE_CONFIRMATION_MODAL:
      return {
        ...state,
        confirmationModal: {
          isModalOpen: false,
          modalTitle: '',
          modalContent: '',
          itemToDelete: '',
          itemId: ''
        }
      };
    case actionTypes.SHOW_FEEDBACK_POPUP:
      return {
        ...state,
        feedbackPopup: {
          isPopupOpen: true,
          popupSeverity: action.payload.severity,
          popupContent: action.payload.content
        }
      };
    case actionTypes.CLEAR_FEEDBACK_POPUP:
      return {
        ...state,
        feedbackPopup: {
          isPopupOpen: false,
          popupSeverity: 'success',
          popupContent: ''
        }
      };
    case actionTypes.SHOW_ADD_BOOK_FORM_MODAL:
      return {
        ...state,
        addBookFormModal: {
          isModalOpen: true
        }
      };
    case actionTypes.CLOSE_ADD_BOOK_FORM_MODAL:
      return {
        ...state,
        addBookFormModal: {
          isModalOpen: false
        }
      };
    case actionTypes.SHOW_ADD_COMMENT_FORM_MODAL:
      return {
        ...state,
        addCommentFormModal: {
          isModalOpen: true,
          parentId: action.payload.parentId
        }
      };
    case actionTypes.CLOSE_ADD_COMMENT_FORM_MODAL:
      return {
        ...state,
        addCommentFormModal: {
          isModalOpen: false,
          parentId: ''
        }
      };
    case actionTypes.SHOW_EDIT_COMMENT_FORM_MODAL:
      return {
        ...state,
        editCommentFormModal: {
          isModalOpen: true,
          commentId: action.payload.commentId
        }
      };
    case actionTypes.CLOSE_EDIT_COMMENT_FORM_MODAL:
      return {
        ...state,
        editCommentFormModal: {
          isModalOpen: false,
          commentId: ''
        }
      };
    default:
      return state;
  }
}
