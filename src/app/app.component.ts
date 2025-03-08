import { Component} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = "SignInForm";
  isWhiteTheme = true;

  onChangeTheme(){
    document.body.classList.toggle('dark-theme');
    this.isWhiteTheme = !this.isWhiteTheme;
  }
}
