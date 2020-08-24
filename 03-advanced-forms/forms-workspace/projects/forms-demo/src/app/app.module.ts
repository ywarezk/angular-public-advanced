import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, FormControl, FormGroup, FormArray } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateDemoComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FormsModule as OurFormsModule } from '@brain/forms';
import { DynamicFormComponent} from './components/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDemoComponent,
    ReactiveFormComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    OurFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
