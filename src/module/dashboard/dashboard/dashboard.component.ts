import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPosts } from '../../../store/store.selector';
import { StorageService } from '../../../shared/service/storage.service';
import { ToastrService } from 'ngx-toastr';
import { ERROR } from '../../../constants/toastr';
import { PostState } from '../../../store/store.state';
import { Post } from '../../../interface/post.interface';
import { CONSTANTS } from '../../../constants/constant';
import { deletePost, loadPost } from '../../../store/store.action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  displayedColumns: string[] = ['id', 'title', 'body', 'edit', 'delete'];
  dataSource!: Post[];
  noDataFound=CONSTANTS.NO_DATA_FOUND
  constructor(
    private store: Store<PostState>,
    private storage: StorageService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.store.select(getPosts).subscribe((res) => {
      this.dataSource = res;
    });
    this.store.dispatch(loadPost());
  }

  deletePost(id: string) {
    const userDetail = this.storage.get('user');
    const user = userDetail !== null ? JSON.parse(userDetail) : '';
    if (user && user.role && user.role === 'admin') {
      this.store.dispatch(deletePost({ id }));
    } else {
      this.toastr.error(ERROR.AUTHORIZED_ERROR_DELETE_POST);
      return;
    }
  }

  onSearch(searchText: string): void {
    if (!searchText || searchText.trim() === '') {
      this.store.select(getPosts).subscribe((res) => {
        this.dataSource = res;
      });
    } else {
      searchText = searchText.toLowerCase();
      this.dataSource = this.dataSource.filter(
        (item) =>
          item.title.toLowerCase().includes(searchText) ||
          item.body.toLowerCase().includes(searchText)
      );
    }
  }
}
