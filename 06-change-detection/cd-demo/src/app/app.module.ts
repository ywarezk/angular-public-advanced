import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './components/child.component';
import { GrandComponent } from './components/grand.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandComponent
  ],
  imports: [
    BrowserModule,
    // Router
    RouterModule.forRoot([], {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
