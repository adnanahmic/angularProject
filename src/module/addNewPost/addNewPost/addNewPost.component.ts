import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddNewPost } from '../../../store/store.action';
import { CONSTANTS } from '../../../constants/constant';
@Component({
  selector: 'app-addNewPost',
  templateUrl: './addNewPost.component.html',
  styleUrl: './addNewPost.component.css',
})
export class AddNewPostComponent {
  postForm!: FormGroup;
  newPost = CONSTANTS.ADD_NEW;
  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  get postFormControl() {
    return this.postForm.controls;
  }

  addNewPost() {
    if (!this.postForm.valid) {
      return;
    } else {
      this.store.dispatch(AddNewPost({ post: this.postForm.value }));
    }
  }
}
