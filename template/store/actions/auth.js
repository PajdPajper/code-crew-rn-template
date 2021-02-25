import * as types from '../constants/ActionTypes'
import AsyncStorage from '@react-native-community/async-storage';
import { signIn } from '../../services/'

// LOGIN FORM WILL SAVE TOKEN AND DISPATCH IT TO AUTHENTICATES
export const login = (email, password) => {
  return async (dispatch) => {
    const result = await signIn(email, password)
    console.log('result iz action auth', result)
    if (result.data.key) {
      dispatch(authenticates(result.data.key, result.data))
      // Disable splash
      dispatch(handleSplash(false))
      AsyncStorage.setItem('token', result.data.key)
      const user = JSON.stringify(result.data)
      AsyncStorage.setItem('currentUser', user)
    } else {
      console.log('ERROR')
    }
  }
}

// LOGOUT FORM WILL REMOVE TOKEN FROM ASYNC STORAGE
export const logout = () => {
  console.log('log out')
  return async (dispatch) => {
    try {
      await AsyncStorage.removeItem('token')
      await AsyncStorage.removeItem('currentUser')
      dispatch({ type: types.SIGN_OUT, token: null })
    } catch (e) {
      console.log('ERROR', e)
    }
  };
}

// THIS WILL LOG IN USER (WE WRITE IT HERE SEPARATLY)
// BECAUSE WE GONNA USE IT AFTER SIGN UP(REGISTER) AND SIGN IN(LOGIN)
export const authenticates = (token, data) => {
  return (dispatch) => {
    dispatch({
      type: types.SIGN_IN,
      token: token,
      data: data,
      onBoardCompleted: data.onBoardCompleted,
    });
  };
};

export const handleOnboarding = (onboarded) => {
  console.log('onboarding', onboarded);
  return (dispatch) => {
    dispatch({
      type: types.ONBOARDING,
      onBoardCompleted: onboarded,
    });
  };
};

export const handleSplash = (showSplash) => {
  console.log('splashs iz akcije', showSplash)
  return (dispatch) => {
    dispatch({
      type: types.SPLASH,
      showSplash: showSplash,
    });
  };
};

// THIS WILL CHECK ON LOADING IF THERE IS TOKEN IN ASYNCSTORAGE
// IF THERE IS THEN WE ARE SHOWING HOME SCREEN
// IF THERE IS NOT THEN WE ARE SHOWING LOGIN SCREEN
export const checkOnLoading = () => {
  return async (dispatch) => {
    let userToken;

    try {
      userToken = await AsyncStorage.getItem('token');
    } catch (e) {
      // Restoring token failed
      console.log(e);
    }

    // WE MAY NEED VALIDATE TOKEN HERE

    dispatch({ type: types.RESTORE_TOKEN, token: userToken });
  };
};
