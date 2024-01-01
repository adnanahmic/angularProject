import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { StorageService } from '../shared/service/storage.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class authGuard {
  constructor(private storage: StorageService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.storage.get('user');
    const userDetail = user !== null ? JSON.parse(user) : '';
    if (userDetail.email) {
      return true;
    } else {
      return false;
    }
  }
}
