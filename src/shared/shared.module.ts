import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { postReducer } from '../store/store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffect } from '../store/store.effect';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { AuthReducer } from '../module/auth/store/auth.reducer';
import { AuthEffect } from '../module/auth/store/auth.effect';
import { productReducer } from '../module/product/store/product-store.reducer';
import { ProductEffect } from '../module/product/store/product-store.effect';
@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ToastrModule.forRoot(),
    StoreModule.forFeature('post', postReducer),
    EffectsModule.forFeature([PostEffect]),
    StoreModule.forFeature('user', AuthReducer),
    EffectsModule.forFeature([AuthEffect]),
    StoreModule.forFeature('product', productReducer),
    EffectsModule.forFeature([ProductEffect]),
  ],
  exports: [
    SearchComponent,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
})
export class SharedModule {}
