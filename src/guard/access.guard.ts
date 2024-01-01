import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { StorageService } from '../shared/service/storage.service';
import { Injectable } from '@angular/core';
import { NAVIGATION } from '../constants/navigation';
@Injectable({
  providedIn: 'root',
})

export class AccessGuard {
  constructor(private storage: StorageService,private route:Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.storage.get('user');
    const userDetail = user !== null ? JSON.parse(user) : '';
    if (userDetail.email) {
      this.route.navigateByUrl(NAVIGATION.DASHBOARD)
      return false;
    } else {
      return true;
    }
  }
}
