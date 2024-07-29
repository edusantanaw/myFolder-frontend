import { Component } from '@angular/core';
import { FormComponent } from '../../shared/component/form/form.component';
import { UserService } from '../../services/user/user.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';

interface AuthForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  selector: 'login-component',
  imports: [FormComponent, NgIf, ReactiveFormsModule],
})
export class LoginComponent {
  service: UserService;
  authForm: FormGroup<AuthForm>;
  error: string | null = null;
  loading: boolean = false;

  constructor(userService: UserService, fb: FormBuilder) {
    this.service = userService;
    this.authForm = fb.group<AuthForm>({
      email: new FormControl<string | null>('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl<string | null>('', [Validators.required]),
    });
  }

  isLoading() {
    return this.loading;
  }

  haveError() {
    return !!this.error;
  }

  async handleAuth() {
    if (this.authForm.valid) {
      this.loading = true;
      const values = this.authForm.value;
      this.service.auth(values.email!, values.password!).subscribe({
        next: (data) => {
          console.log(data);
          this.loading = false;
        },
        error: (err) => {
          this.error = err.error.message;
          this.loading = false;
        },
      });
    }
  }
}
