import { LOGIN_MSSG, SET_IS_LOGGED_IN } from './types';
const initialState = {
  isLoggedIn: false,
  email: null,
  message: null,
  token: null,
};
export const setIsLoggedIn = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: payload.value,
        email: payload.data,
        message: payload.message,
        token: payload.token,
      };

    default:
      return state;
  }
};
// export const setLoginMssg = (state = {}, { type, payload }) => {
//   switch (type) {
//     case LOGIN_MSSG:
//       return { message: payload };
//     default:
//       return state;
//   }
// };
