import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const AUTH_STATE_NAME = 'user';

export const getAuthstate = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const getUsers = createSelector(getAuthstate, (state) => {
  return state?.user;
});

export const isAuthenticated = createSelector(
  getAuthstate,
  (state: AuthState) => {
    return state?.user?.status === 'success' ? true : false;
  }
);
