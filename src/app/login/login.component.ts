import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      const email = this.email?.value;
      const password = this.password?.value;

      if (this.loginService.isUser(email, password)) {
        console.log('Login successful!', this.loginForm.value);
        this.showSwalSuccess();
      } else {
        this.showSwalError();
      }
    } else {
      console.log('Form is not valid!');
    }
  }

  showSwalSuccess() {
    Swal.fire({
      icon: 'success',
      title: 'Login Successful',
      showCancelButton: true,
      confirmButtonText: 'Continue',
      cancelButtonText: 'Close'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/']);
      }
    });
  }

  showSwalError() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'User Not Found',
      footer: `
        <a href="/register" class="btn btn-primary">Register</a>
      `
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
