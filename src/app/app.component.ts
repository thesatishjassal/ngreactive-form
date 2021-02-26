import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormControlName,
} from '@angular/forms';
import { PasswordChecker } from './custom-validators/password-cheker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reactive-form';
  registerForm!: FormGroup;
  submitted: Boolean = false;

  constructor(private FormBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.FormBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(6)]],
        lastName: ['', [Validators.required, Validators.minLength(6)]],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),
          ],
        ],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmpassword: ['', Validators.required],
        accepTandc: [false, Validators.requiredTrue],
      },
      {
        validators: PasswordChecker('password', 'confirmpassword'),
      }
    );
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.table(this.registerForm.value);
    console.table(this.registerForm);

    alert('Success Signup!\n' + JSON.stringify(this.registerForm));
  }
  get error() {
    return this.registerForm.controls;
  }
  onResest() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
