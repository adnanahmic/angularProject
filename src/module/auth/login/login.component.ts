import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthState } from '../store/auth.state';
import { Store } from '@ngrx/store';
import { loginStart } from '../store/auth.action';
import { CONSTANTS } from '../../../constants/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  signInForm!: FormGroup;
  signIn = CONSTANTS.SIGN_IN;
  constructor(private fb: FormBuilder, private store: Store<AuthState>) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get signInFormControl() {
    return this.signInForm.controls;
  }

  SignIn() {
    if (!this.signInForm.valid) {
      return;
    } else {
      this.store.dispatch(
        loginStart({
          email: this.signInForm.value.email,
          password: this.signInForm.value.password,
        })
      );
    }
  }
}
