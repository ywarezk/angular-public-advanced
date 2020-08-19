import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

export class AsyncValidators {

  static isUsernameExist(cb: (value: string) => Observable<boolean>) {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return cb(control.value).pipe(
        map((isUsernameExist: boolean) => {
          if (isUsernameExist) {
            return {
              isUsernameExist: `the username ${control.value} already exists`
            }
          } else {
            return null;
          }
        })
      )
    }
  }

}
