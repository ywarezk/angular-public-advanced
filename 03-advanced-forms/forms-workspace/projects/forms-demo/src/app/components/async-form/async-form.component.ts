import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'async-form',
  template: `
    <form [formGroup]="asyncForm">
      <input formControlName="username" [isUsernameExist]="checkUsername"  />
    </form>
  `
})
export class NameComponent implements OnInit {
  asyncForm = new FormGroup({
    username: new FormControl()
  })

  checkUsername = () => {

  }
}
