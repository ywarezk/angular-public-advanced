import { AbstractControl, ValidationErrors } from '@angular/forms';

export class Validators {

  static isEqual(name: string) {
    return function (control: AbstractControl): ValidationErrors {
      if (control.value === name) {
        return null;
      } else {
        return {
          isEqual: `${control.value} is not equal to ${name}`
        }
      }
    }
  }

}
