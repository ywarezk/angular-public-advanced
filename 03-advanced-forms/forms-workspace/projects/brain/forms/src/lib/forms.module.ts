import { NgModule } from '@angular/core';
import { FormsComponent } from './forms.component';
import { IsEqualDirective } from './directives/is-equal.directive';
import { IsUsernameExistDirective } from './directives/is-username-exist.directive';
import { PhoneInputComponent } from './components/phone-input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormsComponent,
    IsEqualDirective,
    IsUsernameExistDirective,
    PhoneInputComponent
  ],
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    FormsComponent,
    IsEqualDirective,
    IsUsernameExistDirective,
    PhoneInputComponent
  ]
})
export class FormsModule { }
