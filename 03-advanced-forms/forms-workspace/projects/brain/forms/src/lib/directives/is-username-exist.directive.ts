/**
 <input [isUsernameExist]="cb" />
 */

import { Directive, Input } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { AsyncValidators } from '../async-validators';

@Directive({
  selector: '[isUsernameExist]'
})
export class IsUsernameExistDirective implements AsyncValidator {
  @Input('isUsernameExist')
  cb: (value: string) => Observable<boolean>

  validate(control: AbstractControl): Observable<ValidationErrors> {
    AsyncValidators.isUsernameExist(this.cb)(control);
  }
}
