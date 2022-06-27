import axios from 'axios';
import { SET_IS_LOGGED_IN } from './types';

// export const setIsLoggedIn = (data) => ({
//   type: SET_IS_LOGGED_IN,
//   payload: { value: true, email: data.email },
// });

// export const setLogOut = (data) => ({
//   type: SET_IS_LOGGED_IN,
//   payload: { value: false, data: null },
// });

export const setLogOut = (data) => (dispatch) => {
  dispatch({
    type: SET_IS_LOGGED_IN,
    payload: {
      value: false,
      data: null,
      message: 'Sucessfully logged out',
      token: null,
    },
  });
};

export const setIsLoggedIn = (data) => async (dispatch, getState) => {
  //static data to get response
  // const staticData = {
  //   username: 'sattalui@cypresslawn.com',
  //   password: 'Vpn@cypress1',
  // };
  try {
    const response = await axios.post(
      `http://dev-app01:3007/api/v1/login`,
      data
    );
    dispatch({
      type: SET_IS_LOGGED_IN,
      payload: {
        value: true,
        data: response.data.userDetails.email,
        message: 'Successfully logged in',
        token: response.headers.authtoken,
      },
    });
  } catch (error) {
    dispatch({
      type: SET_IS_LOGGED_IN,
      payload: {
        value: false,
        data: null,
        message: error.response.data.message,
        token: null,
      },
    });
  }
};
