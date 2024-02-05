import { Component, OnInit } from '@angular/core';
import { IForm } from './interface/form.interface';
import { registerFormConfig } from './constants/register-form-config';
import { loginFormConfig } from './constants/login-form.constant';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Form Build';
  registerForm = registerFormConfig as IForm;
  loginForm = loginFormConfig as IForm;


  constructor() {}


  ngOnInit(): void {
  }
}