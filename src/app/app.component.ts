import { Component } from '@angular/core';
import { FormFooterComponent } from './form-footer/form-footer.component';
import { ThemeChangingComponent } from './theme-changing/theme-changing.component';
import { FormHeaderComponent } from './form-header/form-header.component';
import { FormActionsComponent } from './form-actions/form-actions.component';
import { FormBodyComponent } from './form-body/form-body.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormFooterComponent, ThemeChangingComponent,
    FormHeaderComponent, FormActionsComponent, FormBodyComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
