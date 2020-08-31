import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SendComponent} from './send.component';
import { RecieveComponent } from './recieve.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { messageReducer } from './ngrx/message/message.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SendComponent,
    RecieveComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    StoreModule.forRoot({
      message: messageReducer,
      user: (state = {
        firstName: 'Yariv',
        lastName: 'Katz'
      }) => {
        return state;
      }
    }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
