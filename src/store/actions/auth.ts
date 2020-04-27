import {SIGN_IN, SIGN_OUT, RESTORE_TOKEN} from '~Store/constants/actionTypes';

export interface authPayload {
  token: string | null
}


export const signIn = (payload: authPayload) => ({
    type: SIGN_IN,
    payload: payload,
  }
)

export const signOut = () => ({
  type: SIGN_OUT
})

export const restoreToken = (payload: authPayload) => ({
    type: RESTORE_TOKEN,
    payload: payload

  }
)
