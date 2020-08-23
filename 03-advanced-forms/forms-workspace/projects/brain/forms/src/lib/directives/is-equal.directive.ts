/**
<input
   ngModel
   isEqual="yariv"
   isId
/>
 */

import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import {Validators} from '../validators';

 @Directive({
   selector: '[isEqual]',
   providers: [
     {
       provide: NG_VALIDATORS,
       useExisting: IsEqualDirective,
       multi: true
     }
   ]
  })
 export class IsEqualDirective implements Validator {
   @Input('isEqual')
   name: string;

   validate(control: AbstractControl): ValidationErrors {
      return Validators.isEqual(this.name)(control);
   }

 }





