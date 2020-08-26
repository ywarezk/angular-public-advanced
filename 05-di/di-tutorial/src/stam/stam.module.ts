import { NgModule, ModuleWithProviders } from '@angular/core';

import { StamComponent } from './stam.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CONFIG_STAM_SERVICE} from './stam.service';
import { RouterModule } from '@angular/router';

// imports: [StamModule.forRoot()]

@NgModule({
  imports: [
    HttpClientModule // ---> HttpClient,
    // RouterModule.forRoot()
    //ShareModule
  ],
  exports: [],
  declarations: [StamComponent],
  // providers: [
  //   // {
  //   //   provide: HTTP_INTERCEPTORS,
  //   //   // ...
  //   // },
  //   {
  //     provide: 'hello',
  //     useValue: 'hello from stam module'
  //   },

  // ],
})
export class StamModule {
  static forRoot(configUrl: string): ModuleWithProviders<StamModule> {
    return {
      ngModule: StamModule,
      providers: [
        {
          provide: CONFIG_STAM_SERVICE,
          useValue: 'https://...'
        }
      ]
    }
  }

  // static create() {

  // }
}
