import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Validators as OurValidators } from '@brain/forms';

@Component({
  selector: 'reactive-form',
  template: `
    <form [formGroup]="nameForm">
      <input
        [isEqual]="nameForm.controls.stam.value"
        required
        maxlength="100"
        formControlName="myName"
        name="myName"
        type="text"
        placeholder="name" />

      <input
        isEqual="Yariv"
        required
        maxlength="100"
        formControlName="stam"
        name="myName"
        type="text"
        placeholder="name" />
      <button>submit</button>

      <p>
        {{ nameForm.controls.myName?.errors | json }}
      </p>
    </form>
  `
})
export class ReactiveFormComponent implements OnInit {
  nameForm = new FormGroup({
    myName: new FormControl('', [
      Validators.required,
      // OurValidators.isEqual('Yariv')
      // Validators.email,
      // Validators.pattern(/[0-9]+/)
    ]),
    stam: new FormControl()
  });

  constructor() { }

  ngOnInit() { }
}
