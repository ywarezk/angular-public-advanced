import { NgModule } from '@angular/core';

import { NameComponent } from './name.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    // RuslanService
    // RuslanModule.forRoot()
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RuslanModule
  ],
  declarations: [NameComponent],
  providers: [],
})
export class NameModule { }
