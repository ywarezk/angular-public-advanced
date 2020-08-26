import { NgModule } from '@angular/core';

import { UploadDirective } from './upload.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    // HttpClientModule /// ---> HttpClient if our module is lazy
  ],
  exports: [],
  declarations: [UploadDirective],
  providers: [],
})
export class FormsModule { }
