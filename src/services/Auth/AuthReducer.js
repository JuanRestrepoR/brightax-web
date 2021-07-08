import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  authentication: false,
  loading: false
}

const reducer = handleActions({
  AUTH: {
    LOGIN: (state) => ({ ...state, loading: true }),
    LOGIN_RESPONSE: {
      next(state, { payload: { token } }) {
        return { ...state, token, authentication: true }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    LOGOUT: (state) => ({ ...state, authentication: false }),
  }
},
  INITIAL_STATE 
);

export default reducer;