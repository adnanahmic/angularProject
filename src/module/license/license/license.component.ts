import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPostById } from '../../../store/store.selector';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { updatePost } from '../../../store/store.action';
import { Post } from '../../../interface/post.interface';
import { PostState } from '../../../store/store.state';
import { CONSTANTS } from '../../../constants/constant';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrl: './license.component.css',
})
export class LicenseComponent {
  postForm!: FormGroup;
  id: any;
  post!: Post | null | undefined;
  editPost = CONSTANTS.EDIT_POST;
  constructor(private store: Store<PostState>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });

    this.store.select(getPostById).subscribe((data) => {
      this.post = data;
      this.postForm.patchValue({
        title: data?.title,
        body: data?.body,
      });
    });
  }

  get postFormControl() {
    return this.postForm.controls;
  }

  updatePostById() {
    if (!this.postForm.valid) {
      return;
    } else {
      const title = this.postForm.value.title;
      const body = this.postForm.value.body;
      const post: Post = {
        id: this.post?.id,
        title,
        body,
      };
      this.store.dispatch(updatePost({ post: post }));
    }
  }
}
