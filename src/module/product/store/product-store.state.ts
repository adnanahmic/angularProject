import { Product } from "../../../interface/product.interface";

export interface ProductState {
  product: Product[];
}

export const initialstate: ProductState = {
  product: [],
};
