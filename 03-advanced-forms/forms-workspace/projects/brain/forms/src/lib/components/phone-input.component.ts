/**
 phoneControl.value = '052-2222222'
 <phone-input [formContro]="phoneControl"  >
 */

import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, Validator, AsyncValidator, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'brain-phone-input',
  template: `
    <select [formControl]="selectCtrl" (blur)="markAsTouched()">
      <option value="052">052</option>
      <option value="054">054</option>
    </select>
    <input type="text" [formControl]="inputCtrl" (blur)="markAsTouched()" />
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PhoneInputComponent
    }
  ]
})
export class PhoneInputComponent implements ControlValueAccessor, OnInit {
  selectCtrl = new FormControl();
  inputCtrl = new FormControl();

  private _changeCb;
  private _touchedCb;

  /**
   * writes a value to the control
   * @param obj
   */
  writeValue(phoneNumber: string): void {
    try {
      const [prefix, number] = phoneNumber.split('-');
      this.selectCtrl.setValue(prefix);
      this.inputCtrl.setValue(number);
    } catch(err) {}
  }

  registerOnChange(fn: any): void {
    this._changeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this._touchedCb = fn;
  }

  markAsTouched() {
    this._touchedCb();
  }

  ngOnInit() {
    this.selectCtrl.valueChanges.subscribe(() => {
      // select is changed
      this._changeCb(`${this.selectCtrl.value}-${this.inputCtrl.value}`);
    });

    this.inputCtrl.valueChanges.subscribe(() => {
      // input is changed
      this._changeCb(`${this.selectCtrl.value}-${this.inputCtrl.value}`);
    })
  }
}
