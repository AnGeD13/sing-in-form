import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { FormActionsComponent } from '../form-actions/form-actions.component';
import { NgClass, CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-body',
  imports: [NgClass, ReactiveFormsModule, CommonModule, FormActionsComponent],
  templateUrl: './form-body.component.html',
  styleUrl: './form-body.component.scss'
})
export class FormBodyComponent {
  signInForm: FormGroup;
  regPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]*$/;

  constructor(){
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(this.regPassword)
      ]),
    });
  }

  get email(): AbstractControl  | null {
    return this.signInForm.get('email');
  }

  get password(): AbstractControl  | null {
    return this.signInForm.get('password');
  }

  onSubmit(): void {
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
    }
    else {
      console.log(this.signInForm.value);
    }
  }
}
