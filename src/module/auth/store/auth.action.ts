import { createAction, props } from '@ngrx/store';
import { User } from '../../../interface/user.interface';
import { AuthState } from './auth.state';

export const LOGIN_START = '[auth page]login start';
export const LOGIN_SUCCESS = '[auth page]login success';
export const REHYDRATE_USER = '[auth page] Rehydrate State';

export const LOGOUT = '[post] Logout success';

export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User | null }>()
);

export const logOut = createAction(LOGOUT);

export const rehydrateState = createAction(
  REHYDRATE_USER,
  props<{ user: User }>()
);
