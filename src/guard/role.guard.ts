import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../shared/service/storage.service';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ERROR } from '../constants/toastr';
@Injectable({
  providedIn: 'root',
})
export class roleGuard {
  constructor(private storage: StorageService, private toastr: ToastrService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.storage.get('user');
    const userDetail = user !== null ? JSON.parse(user) : '';
    if (userDetail && userDetail.role && userDetail.role === 'admin') {
      return true;
    } else {
      this.toastr.error(ERROR.AUTHORIZED_ERROR_EDIT_POST);
      return false;
    }
  }
}
