import {
  SIGN_IN,
  SIGN_OUT,
  RESTORE_TOKEN,
  SIGN_IN_FAILED,
  ONBOARDING,
  SPLASH,
} from '../constants/ActionTypes'

const initialState = {
  isLoading: true,
  isSignout: false,
  token: null,
  user: null,
  onBoardCompleted: true,
  error: [],
  showSplash: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        token: action.token,
        user: action.data,
        isLoading: false,
      };
    case SIGN_IN:
      return {
        ...state,
        isSignout: false,
        token: action.token,
        // onBoardCompleted: action.onBoardCompleted,
        user: action.data,
      };
    case SIGN_IN_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignout: true,
        token: null,
        user: null,
        flagged: false
      };
    case ONBOARDING:
      return {
        ...state,
        onBoardCompleted: action.onBoardCompleted,
      };
    case SPLASH:
      return {
        ...state,
        showSplash: action.showSplash,
      };
    default:
      return state;
  }
}
