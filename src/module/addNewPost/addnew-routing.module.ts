import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewPostComponent } from './addNewPost/addNewPost.component';
const routes: Routes = [
  {
    path: '',
    component: AddNewPostComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewRoutingModule {}
