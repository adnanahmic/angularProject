import { Component } from '@angular/core';
import { ProductState } from '../store/product-store.state';
import { Store } from '@ngrx/store';
import { getProducts } from '../store/product-store.selector';
import { LoadProduct } from '../store/product-store.action';
import { Product } from '../../../interface/product.interface';
import { CONSTANTS } from '../../../constants/constant';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  displayedColumns: string[] = ['id', 'category', 'title', 'description', 'image', 'price'];
  dataSource!: Product[];
  noDataFound=CONSTANTS.NO_DATA_FOUND
constructor(private store:Store<ProductState>){}
  ngOnInit(): void {
    this.store.select(getProducts).subscribe((res) => {
      this.dataSource = res
    });
    this.store.dispatch(LoadProduct());
  }

  onSearch(searchText: string): void {
    if (!searchText || searchText.trim() === '') {
      this.store.select(getProducts).subscribe((res) => {
        this.dataSource = res;
      });
    } else {
      searchText = searchText.toLowerCase();
      this.dataSource = this.dataSource.filter(
        (item) =>
          item.title.toLowerCase().includes(searchText) ||
          item.description.toLowerCase().includes(searchText)||
          item.category.toLowerCase().includes(searchText)||
          item.price.toString().includes(searchText)
      );
    }
  }
}
