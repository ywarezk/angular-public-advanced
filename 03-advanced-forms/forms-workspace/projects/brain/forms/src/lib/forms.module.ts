import { NgModule } from '@angular/core';
import { FormsComponent } from './forms.component';
import { IsEqualDirective } from './directives/is-equal.directive';



@NgModule({
  declarations: [FormsComponent, IsEqualDirective],
  imports: [
  ],
  exports: [FormsComponent, IsEqualDirective]
})
export class FormsModule { }
