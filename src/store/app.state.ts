import { RouterReducerState, routerReducer } from '@ngrx/router-store';

export interface AppState {
  router: RouterReducerState;
}

export const AppReducer = {
  router: routerReducer,
};
