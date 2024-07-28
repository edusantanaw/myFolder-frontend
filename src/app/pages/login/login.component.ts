import { Component, NgModule } from '@angular/core';
import { FormComponent } from "../../shared/component/form/form.component";

@Component({
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  selector: 'login-component',
  imports: [FormComponent],
})
export class LoginComponent {
}
