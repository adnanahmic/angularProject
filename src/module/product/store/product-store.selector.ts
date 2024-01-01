import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product-store.state';

const getProductState = createFeatureSelector<ProductState>('product');

export const getProducts = createSelector(getProductState, (state) => {
  return state.product;
});


