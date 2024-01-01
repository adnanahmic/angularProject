import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API } from '../../../constants/api';
import { ERROR, SUCCESS } from '../../../constants/toastr';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  SignIn(email: string, password: string) {
    return this.http.get(`${API.BASE_URL}${API.USERS}`).pipe(
      map(
        (data: any) => {
          const users = data.find((res: any) => {
            return res.email === email && res.password === password;
          });
          if (users) {
            return users;
          } else {
            return { message: ERROR.USER_NOT_FOUND, status: 'error' };
          }
        },
        (err: any) => {
          console.log(err);
        }
      )
    );
  }
}
