import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloService } from './services/hello.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // StamModule.forRoot('https://orel-the-jadai.com...')
    // AppRoutingModule,
    HttpClientModule // -----> HttpClient
    // StamModule.forRoot('https://....')
    // ShareModule,
    // RuslanModule.forRoot()
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   // ...
    // }
    // HelloService,
    // HelloService2
    {
      provide: HelloService,
      useExisting: HelloService
      // useExisting: HelloService2
      // useClass: HelloService2
    },

    // {
    //   provide: HelloService2,
    //   useExisting: HelloService
    // }

    {
      provide: 'hello',
      useValue: 'hello from app module'
      // deps: [HelloService],
      // useFactory: (hello) => {
      //   return hello.greeting;
      // }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
