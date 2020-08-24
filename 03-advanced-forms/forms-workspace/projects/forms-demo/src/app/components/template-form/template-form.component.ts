import { Component, OnInit } from '@angular/core';
// import {NgForm} from '@angular/forms';

@Component({
  selector: 'template-demo',
  template: `
    <form #nameForm="ngForm" (ngSubmit)="hello()">
      <input
        required
        pattern
        email
        maxlength="100"
        minlength="100"
        name="myName"
        ngModel
        type="text"
        placeholder="name" />
      <select ngModel>
        <option value="1">hello</option>
      </select>
      <input type="checkbox" >

      <!-- avitanValue = {value: 10, other: 'something the user typed'} -->
      <!-- <avitan-dropdown [(ngModel)]="avitanValue">
      </avitan-dropdown>

      <ruslan-slider [formControl]="ruslanValue">
      </ruslan-slider> -->
      <button>submit</button>
    </form>

  `
})
export class TemplateDemoComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  hello() {
    throw new Error();
  }
}
