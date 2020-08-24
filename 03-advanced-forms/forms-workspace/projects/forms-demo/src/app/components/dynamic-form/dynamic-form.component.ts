import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'brain-dynamic-form',
  template: `
  <form [formGroup]="myAddressForm">
    <input
      *ngFor="let addressCtrl of $any(myAddressForm.controls.addresses)?.controls"
      type="text"
      placeholder="address"
      [formControl]="addressCtrl" />
    <button type="button" (click)="add()">Add new address</button>

    <button>Submit</button>
  </form>

  <p>
    {{ myAddressForm.value | json }}
  </p>
  `
})
export class DynamicFormComponent {
  /*
  myAdreesForm = new FormGroup({
    addresses: new FormArray([
      new FormControl(),
      new FormControl()
    ])
  })
  */

  myAddressForm = this._builder.group({

    addresses: this._builder.array([
      this._builder.control('')
    ])

  })

  constructor(private _builder: FormBuilder) { }

  add() {
    (<FormArray>this.myAddressForm.controls.addresses).push(
      this._builder.control('')
    )
  }
}
