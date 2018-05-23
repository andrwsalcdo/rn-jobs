import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from './types';
import { Facebook } from 'expo';
import { AsyncStorage } from 'react-native';

const loginSuccess = token => ({
  type: FACEBOOK_LOGIN_SUCCESS,
  payload: token
});

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');

  token ? dispatch(loginSuccess(token)) : doFacebookLogin(dispatch);
};

const doFacebookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync(
    '265371847365647',
    {
      permissions: ['public_profile']
    }
  );

  if (type === 'cancel') {
    dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem('fb_token', token);
  dispatch(loginSuccess(token));
};
