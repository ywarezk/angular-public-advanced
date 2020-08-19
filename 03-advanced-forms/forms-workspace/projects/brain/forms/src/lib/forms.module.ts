import { NgModule } from '@angular/core';
import { FormsComponent } from './forms.component';
import { IsEqualDirective } from './directives/is-equal.directive';
import { IsUsernameExistDirective } from './directives/is-username-exist.directive';



@NgModule({
  declarations: [FormsComponent, IsEqualDirective, IsUsernameExistDirective],
  imports: [
  ],
  exports: [FormsComponent, IsEqualDirective, IsUsernameExistDirective]
})
export class FormsModule { }
