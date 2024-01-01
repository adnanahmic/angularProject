import { Action, createReducer, on } from '@ngrx/store';
import { ProductState, initialstate } from './product-store.state';
import { LoadProductSuccess, LogOut } from './product-store.action';

const _productReducer = createReducer(
  initialstate,
  on(LoadProductSuccess, (state, action) => {
    return {
      ...state,
      product: action.product,
    };
  }),

  on(LogOut, (state, action) => {
    return {
      ...initialstate,
      product: [],
    };
  })
);

export function productReducer(state: ProductState | undefined, action: Action) {
  return _productReducer(state, action);
}
