import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewRoutingModule } from './addnew-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AddNewPostComponent } from './addNewPost/addNewPost.component';

@NgModule({
  declarations: [AddNewPostComponent],
  imports: [CommonModule, AddNewRoutingModule, SharedModule],
})
export class AddNewModule {}
