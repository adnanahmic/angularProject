import { createAction, props } from "@ngrx/store";
import { Product } from "../../../interface/product.interface";
import { LOGOUT } from "../../../store/store.action";

export const LOAD_PRDUCTS = '[product] load product';
export const LOAD_PRODUCTS_SUCCESS = '[product] load product success';

export const LoadProduct = createAction(LOAD_PRDUCTS);
export const LoadProductSuccess = createAction(
  LOAD_PRODUCTS_SUCCESS,
  props<{ product: Product[] }>()
);

export const LogOut = createAction(LOGOUT);
