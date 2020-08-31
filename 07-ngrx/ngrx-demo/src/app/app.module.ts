import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import {TodoComponent} from './todo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(),
    EntityDataModule.forRoot({
      entityMetadata: {
        Task: {

        },
        Todo: {

        }
      }
    })
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: {
        // https://nztodo.herokuapp.com/api/task'
        // https://nztodo.herokuapp.com/api/todo'
        root: 'https://nztodo.herokuapp.com/api/'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
