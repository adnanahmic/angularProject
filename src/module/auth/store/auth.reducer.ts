import { Action, createReducer, on } from '@ngrx/store';
import { logOut, loginSuccess, rehydrateState } from '../store/auth.action';
import { AuthState, initialState } from '../store/auth.state';

export const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(rehydrateState, (state, { user: savedState }) => ({
    user: { ...savedState },
  })),
  on(logOut, (state, action) => {
    return {
      ...initialState,
    };
  })
);

export function AuthReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}
