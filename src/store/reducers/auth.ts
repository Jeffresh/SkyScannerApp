import {authPayload} from '~Store/actions/auth';
import {SIGN_IN, SIGN_OUT, RESTORE_TOKEN, authStateType} from '~Store/constants/actionTypes';

const initialState: authStateType = {
  isLoading: true,
  isSignout: false,
  userToken: null,
}


export const authReducer = (state: authStateType = initialState, action: any): authStateType => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignout: false,
        userToken: action.payload.token
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignout: false,
        userToken: null
      }
    case RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.payload.token,
        isLoading: false
      }
    default:
      return state

  }
}
