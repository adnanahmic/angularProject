import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductState } from "./product-store.state";
import { Store } from "@ngrx/store";
import { catchError, map, mergeMap, of } from "rxjs";
import { LoadProduct, LoadProductSuccess } from "./product-store.action";
import { ProductService } from "../service/product.service";

@Injectable()
export class ProductEffect {
  constructor(
    private productService: ProductService,
    private action$: Actions,
    private store: Store<ProductState>,
  ) {}

  loadProduct$ = createEffect(() => {
    return this.action$.pipe(
      ofType(LoadProduct),
      mergeMap((action) => {
        return this.productService.loadProductData().pipe(
          map((product) => {
            return LoadProductSuccess({ product });
          }),catchError(error=>{
            return of(error)
          })
        );
      })
    );
  });

}
