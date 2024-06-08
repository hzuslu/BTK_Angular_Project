import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      birthdate: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: any) {
    return form.get('password').value === form.get('confirmPassword').value ? null : { mismatch: true };
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.valid) {
      Swal.fire({
        icon: 'success',
        title: 'Register Successful',
        showCancelButton: true,
        confirmButtonText: 'Continue',
        cancelButtonText: 'Close'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/login']);
        }
      }); this.loginService.addUser(this.email?.value, this.password?.value);
      this.registerForm.reset();
      this.submitted = false;
    } else {
      console.log('Form is not valid!');
    }
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get birthdate() {
    return this.registerForm.get('birthdate');
  }
}
