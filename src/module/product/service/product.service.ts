import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../../../interface/product.interface';
import { HttpClient } from '@angular/common/http';
import { API } from '../../../constants/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  loadProductData(): Observable<Product[]> {
    return this.http.get<Product[]>(`${API.BASE_URL}${API.PRODUCTS}`).pipe(
      map((post) => {
        return post;
      }),
      (err) => {
        return err;
      }
    );
  }
}
