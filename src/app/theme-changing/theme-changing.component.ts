import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-theme-changing',
  standalone: true,
  imports: [NgClass],
  templateUrl: './theme-changing.component.html',
  styleUrl: './theme-changing.component.scss'
})
export class ThemeChangingComponent implements OnInit{
  currentTheme: string | null = null;
  isWhiteTheme = true;

  ngOnInit(): void {
    this.currentTheme = localStorage.getItem('theme');
    if (this.currentTheme === "dark") {
      this.isWhiteTheme = false;
      document.body.setAttribute("data-theme", this.currentTheme);
    }
  }

  onChangeTheme(): void {
    this.isWhiteTheme = !this.isWhiteTheme;

    document.body.setAttribute("data-theme",
      this.isWhiteTheme ? "light" : "dark"
    );

    this.currentTheme = this.isWhiteTheme ? "light" : "dark";
    localStorage.setItem("theme",  this.currentTheme);
  }
}
