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
  bookFormModal: {
    isModalOpen: true,
    actionType: ''
  },
  commentFormModal: {
    isModalOpen: false,
    actionType: ''
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
    case actionTypes.SHOW_BOOK_FORM_MODAL:
      return {
        ...state,
        bookFormModal: {
          isModalOpen: true,
          actionType: action.payload.actionType
        }
      };
    case actionTypes.CLOSE_BOOK_FORM_MODAL:
      return {
        ...state,
        bookFormModal: {
          isModalOpen: false,
          actionType: ''
        }
      };
    case actionTypes.SHOW_COMMENT_FORM_MODAL:
      return {
        ...state,
        commentFormModal: {
          isModalOpen: true,
          actionType: action.payload.actionType
        }
      };
    case actionTypes.CLOSE_COMMENT_FORM_MODAL:
      return {
        ...state,
        commentFormModal: {
          isModalOpen: false,
          actionType: ''
        }
      };
    default:
      return state;
  }
}
