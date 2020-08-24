/**
 <input [isUsernameExist]="cb" />
 */

import { Directive, Input } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
// import { AsyncValidators } from '../async-validators';

@Directive({
  selector: '[isUsernameExist]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      multi: true,
      useExisting: IsUsernameExistDirective
    }
  ]
})
export class IsUsernameExistDirective {
  @Input('isUsernameExist')
  cb: (value: string) => Observable<boolean>

  // validate(control: AbstractControl): Observable<ValidationErrors> {
  //   AsyncValidators.isUsernameExist(this.cb)(control);
  // }
}
