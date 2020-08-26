/**
---0---0--0--------X--|---->
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'brain-login',
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="login()">
      <input
        formControlName="email"
        type="email"
        placeholder="Enter Email" />
      <input
        type="password"
        placeholder="Enter Password"
        formControlName="password" />
      <button type="submit">Login</button>
      <button (click)="fetchTodo()" type="button" >fetchTodo</button>
    </form>

  `
})
export class LoginComponent {
  loginForm : FormGroup = this._builder.group({
    email: ['', [Validators.email, Validators.required] ],
    password: ['', [Validators.required, Validators.minLength(5)] ]
  });

  constructor(
    private _builder: FormBuilder,
    private _http: HttpClient
  ) { }

  login() {
    console.log(this.loginForm.value);
    this._http.post<any>(
      'https://academeez-login-ex.herokuapp.com/api/users/login',
      this.loginForm.value
    ).subscribe((tokenObj) => {
      console.log(tokenObj);
      localStorage.setItem('token', tokenObj.token);
    })
  }

  fetchTodo() {
    this._http.get(
      'https://academeez-login-ex.herokuapp.com/api/tasks'
    ).subscribe((todoItems) => {
      console.log(todoItems);
    })
  }
}
