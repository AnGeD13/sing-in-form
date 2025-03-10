import { Component, OnInit} from '@angular/core';
import { NgClass } from '@angular/common';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  currentTheme: string | null = null;
  title = "SignInForm";
  isWhiteTheme = true;
  regPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(this.regPassword)
    ]),
  });

  onSubmit() {
    console.log(this.signInForm.value);
  }

  constructor(){}
  ngOnInit() {
    this.currentTheme = localStorage.getItem('theme');
    if (this.currentTheme == 'dark-theme') {
      this.isWhiteTheme = false;
      document.body.classList.add(this.currentTheme);
    }
  }

  onChangeTheme(){
    if (this.isWhiteTheme) {
      this.currentTheme = 'dark-theme';
      document.body.classList.add('dark-theme');
      localStorage.setItem("theme", 'dark-theme');
    }
    else {
      this.currentTheme = "light";
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
    this.isWhiteTheme = !this.isWhiteTheme;
  }
}
