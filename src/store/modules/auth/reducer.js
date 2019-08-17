import produce from 'immer';
import {
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_REQUEST,
  AUTH_SIGN_UP_REQUEST,
  AUTH_SIGN_UP_SUCCESS,
  AUTH_SIGN_OUT,
  AUTH_SIGN_FAILURE,
} from './actions';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case AUTH_SIGN_UP_REQUEST:
      case AUTH_SIGN_IN_REQUEST:
        draft.loading = true;
        break;
      case AUTH_SIGN_IN_SUCCESS:
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      case AUTH_SIGN_OUT:
        draft.token = null;
        draft.signed = false;
        break;
      case AUTH_SIGN_UP_SUCCESS:
      case AUTH_SIGN_FAILURE:
        draft.loading = false;
        break;
      default:
        break;
    }
  });
}
