import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: JwtInterceptor
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   multi: true,
    //   useClass: CacheInterceptor
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   multi: true,
    //   useClass: UnauthorizedInterceptor
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
