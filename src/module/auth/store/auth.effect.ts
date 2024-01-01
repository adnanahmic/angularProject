import { Injectable } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { logOut, loginStart, loginSuccess } from './auth.action';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { StorageService } from '../../../shared/service/storage.service';
import { ToastrService } from 'ngx-toastr';
import { ERROR, SUCCESS } from '../../../constants/toastr';
import { NAVIGATION } from '../../../constants/navigation';

@Injectable()
export class AuthEffect {
  constructor(
    private authService: LoginService,
    private action$: Actions,
    private route: Router,
    private localstorage: StorageService,
    private toastr: ToastrService
  ) {}

  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.SignIn(action.email, action.password).pipe(
          map((user) => {
            if (user.status === 'success') {
              this.localstorage.set('user', JSON.stringify(user));
              this.route.navigateByUrl(NAVIGATION.DASHBOARD);
              this.toastr.success(SUCCESS.LOGGED_IN);
            } else {
              this.toastr.error(user.message);
            }
            return loginSuccess({ user });
          }),
          catchError((error) => {
            this.toastr.error(ERROR.SOMETHING_WENT_WRONG);
            return of(error);
          })
        );
      })
    );
  });

  logOut$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(logOut),
        map((action) => {
          this.localstorage.clear();
          this.route.navigate([NAVIGATION.AUTH]);
        }),
        catchError((error) => {
          return of(error);
        })
      );
    },
    { dispatch: false }
  );
}
