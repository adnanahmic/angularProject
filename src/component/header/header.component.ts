import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPosts } from '../../store/store.selector';
import { StorageService } from '../../shared/service/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { logOut } from '../../store/store.action';
import { AuthState } from '../../module/auth/store/auth.state';
import { PostState } from '../../store/store.state';
import {
  getUsers,
  isAuthenticated,
} from '../../module/auth/store/auth.selector';
import { CONSTANTS } from '../../constants/constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  totalItems!: number;
  user: boolean = false;
  logo = CONSTANTS.LOGO;
  addNew = CONSTANTS.ADD_NEW;
  total = CONSTANTS.TOTAL_ITEMS;
  signOut = CONSTANTS.LOG_OUT;
  constructor(
    private store: Store,
    private storageService: StorageService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.select(getPosts).subscribe((res) => {
      this.totalItems = res.length;
    });
    this.store.select(isAuthenticated).subscribe((res) => {
      this.user = res;
    });
  }

  Logout() {
    this.store.dispatch(logOut());
  }
}
