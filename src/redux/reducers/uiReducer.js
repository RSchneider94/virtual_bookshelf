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
    default:
      return state;
  }
}
